require('dotenv').config();

const io = require('socket.io')();
const Twitter = require('twitter');
const moment = require('moment');

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const skills = [
    '#javascript', '#reactjs', '#nodejs', '#expressjs',
    '#socket.io', '#redux', '#es6', '#webpackjs',
    '#sql', '#postgresql', '#mongodb', '#html',
    '#css', '#scss', '#bootstrap',
    '#heroku', '#git', '#github'
];

// Creating a stream which will receive data when any one of my skills is mentioned in a tweet
const stream = client.stream('statuses/filter', { 
    track: skills.join(',')
});

const findAllHTCounts = require('./queries/findAllHTCounts');
const findHTCount = require('./queries/findHTCount');
const findAllTweets = require('./queries/findAllTweets');
const findStartDate = require('./queries/findStartDate');

const insertHTCount = require('./queries/insertHTCount');
const updateHTCount = require('./queries/updateHTCount');
const insertStartDate = require('./queries/insertStartDate');
const insertTweet = require('./queries/insertTweet');
const deleteTweets = require('./queries/deleteTweets');

// Recursively go over hashtags and update their count if they exist in the db or insert if they don't
function updateOrInsertHTs(hts, cb, results = [], errors = []) {
    if (!hts.length) return cb(results, errors);

    let currentHT = hts.splice(0, 1)[0];

    findHTCount(currentHT)
        .then((ht) => {
            if(ht && Object.keys(ht).length) {
                // update existing ht count
                updateHTCount(currentHT, ht.count)
                    .then((updateRes) => {
                        let newResults = results.concat([updateRes]);
                        return findHTCount(hts, newResults, errors);
                    })
                    .catch((err) => {
                        let newErrors = errors.concat([err]);
                        return findHTCount(hts, results, newErrors);
                    });
            } else {
                // insert new ht count
                insertHTCount(currentHT)
                    .then((insertRes) => {
                        let newResults = results.concat([insertRes]);
                        return findHTCount(hts, newResults, errors);
                    })
                    .catch((err) => {
                        let newErrors = errors.concat([err]);
                        return findHTCount(hts, results, newErrors);
                    });
            }
        })
        .catch((err) => {
            let newErrors = errors.concat([err]);
            return findHTCount(hts, results, newErrors);
        });
}

// var to keep track of most recent hashtag mentioned in a tweet from the stream
let currentHT;

// this will receive stream data from twitter
stream.on('data', (event) => {
    // gather current tweet's relevant hashtags and amount of occurences in that tweet
    let htCounts = {};

    // increment gathered hashtags based on matches in any event/tweet 
    // that comes through
    event.entities.hashtags.forEach((ht) => {
        const htFormatted = `#${ht.text.toLowerCase()}`;

        if (skills.indexOf(htFormatted) > -1) {
            htCounts[htFormatted] ? htCounts[htFormatted]++ : htCounts[htFormatted] = 1;
            currentHT = htFormatted;
        }
    });

    let htCountsToInsert = [];
    
    for(let key in htCounts) {
        htCountsToInsert.push({
                ht: key,
                count: htCounts[key]
        });
    }

    updateOrInsertHTs(htCountsToInsert, (res, err) => {
        if(err.length) {
            console.log('Update Or Insert Hashtag error: ', err);
        } else {
            findAllHTCounts()
                .then((htCounts) => {
                    findStartDate()
                        .then((startDate) => {
                            if(startDate === null) {
                                insertStartDate()
                                    .then((insertStartDateRes) => {
                                        insertTweet({ tweet_id: event.id_str, created_at: Date.now() })
                                            .then((insertTweetRes) => {
                                                findAllTweets()
                                                    .then((tweetsRes) => {
                                                        let socketDelivery = {
                                                            startDate: moment().format(insertStartDateRes.startDate),
                                                            endDate: moment().format(new Date()),
                                                            htCounts: htCounts,
                                                            tweets: tweetsRes,
                                                            currentHT
                                                        };

                                                        io.sockets.emit('skill-tweet', socketDelivery); 
                                                    })
                                                    .catch((findTweetsErr) => {
                                                        console.log('ERROR FINDING TWEETS 1: ', findTweetsErr);
                                                    });
                                            })
                                            .catch((insertTweetErr) => {
                                                console.log('ERROR INSERTING TWEET: ', insertTweetErr);
                                            });
                                    })
                                    .catch((insertStartDateErr) => {
                                        console.log('ERROR INSERTING START DATE: ', insertStartDateErr);
                                    });
                            } else {
                                findAllTweets()
                                    .then((tweetsRes) => {
                                        if(tweetsRes.length > 4) {
                                            let idsToDelete = tweetsRes.slice(4, tweetsRes.length).map((tweet) => tweet['_id']);

                                            deleteTweets(idsToDelete)
                                                .then((deleteTweetRes) => {
                                                    insertTweet({ tweet_id: event.id_str, created_at: Date.now() })
                                                        .then((tweetsAfterInsert) => {
                                                            let socketDelivery = {
                                                                startDate: moment(startDate.startDate).format('MM/DD/YYYY'),
                                                                endDate: moment(new Date()).format('MM/DD/YYYY'),
                                                                htCounts: htCounts,
                                                                tweets: tweetsAfterInsert,
                                                                currentHT
                                                            };

                                                            io.sockets.emit('skill-tweet', socketDelivery);
                                                        })
                                                        .catch((insertTweetErr) => {
                                                            console.log('ERROR INSERTING TWEET: ', insertTweetErr);
                                                        });
                                                })
                                                .catch((deleteErr) => {
                                                    console.log('DELETE TWEET ERR: ', deleteErr)
                                                });
                                        } else {
                                            insertTweet({ tweet_id: event.id_str, created_at: Date.now() })
                                                .then((insertTweetRes) => {
                                                    let socketDelivery = {
                                                        startDate: moment(startDate.startDate).format('MM/DD/YYYY'),
                                                        endDate: moment(new Date()).format('MM/DD/YYYY'),
                                                        htCounts: htCounts,
                                                        tweets: tweetsRes,
                                                        currentHT
                                                    };

                                                    io.sockets.emit('skill-tweet', socketDelivery);
                                                })
                                                .catch((insertTweetErr) => {
                                                    console.log('ERROR INSERTING TWEET: ', insertTweetErr);
                                                });
                                        }
                                    })
                                    .catch((findTweetsErr) => {
                                        console.log('ERROR FINDING TWEETS 2: ', findTweetsErr);
                                    });
                            }
                        })
                        .catch((startDateErr) => {
                            console.log('ERROR FINDING START DATE: ', startDateErr);
                        });
                })
                .catch((htCountErr) => {
                    console.log('ERROR AFTER INSERTING HT COUNTS: ', htCountErr);
                });
        }
    });
});

// console log errors if they occur
stream.on('error', (error) => {
    console.log('stream error: ', error);
});

// destroy stream if node process ends to keep twitter connections clear
process.on('SIGINT', () => {
    stream.destroy();
    process.exit(0);
});

io.on('connection', (socket) => {
    console.log('socket connected', new Date()); 

    // when the client-side sends this event
    // send back an event with the latest data
    socket.on('send-twitter-data', () => {
        findAllHTCounts()
            .then((htCounts) => {
                findStartDate()
                    .then((startDate) => {
                        if(startDate) {
                            findAllTweets()
                                .then((tweetsRes) => {
                                    let socketDelivery = {
                                        startDate: moment(startDate.startDate).format('MM/DD/YYYY'),
                                        endDate: moment(new Date()).format('MM/DD/YYYY'),
                                        htCounts: htCounts,
                                        tweets: tweetsRes
                                    };

                                    io.sockets.emit('populate-twitter-data', socketDelivery);
                                })
                                .catch((findTweetsErr) => {
                                    console.log('ERROR FINDING TWEETS SEND-TWITTER-DATA: ', findTweetsErr);
                                });
                        }
                    })
                    .catch((findDateErr) => {
                        console.log('ERROR FINDING DATE SEND-TWITTER-DATA: ', findDateErr);
                    });
            })
            .catch((htCountErr) => {
                console.log('ERROR FINDING HT COUNTS SEND-TWITTER-DATA', htCountErr);
            });
    });
});

module.exports = io;