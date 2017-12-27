require('dotenv').config();

const io = require('socket.io')();
const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const skills = [
                '#javascript',
                '#reactjs',
                '#nodejs',
                '#expressjs',
                '#socket.io',
                '#redux',
                '#es6',
                '#webpackjs',
                '#gulpjs',
                '#REST API',
                '#sql',
                '#postgresql',
                '#mongodb',
                '#html',
                '#redis',
                '#css',
                '#scss',
                '#bootstrap',
                '#jquery',
                '#angularjs',
                '#stripe API',
                '#heroku',
                '#git',
                '#github'
];

const stream = client.stream('statuses/filter', { 
    track: skills.join(',')
});

const hts = {};
const countStartDate = new Date();
let newestTweet;
let newestHT;

function getHTCounts() {
    const htCounts = [];

    for (let key in hts) {
        let countObj = {};
        countObj.ht = key;
        countObj.count = hts[key];

        htCounts.push(countObj);
    }

    return htCounts;
}

stream.on('data', (event) => {
    // increment gathered hashtags based on matches in any event/tweet 
    // that comes through
    event.entities.hashtags.forEach((ht) => {
        const htFormatted = `#${ht.text.toLowerCase()}`;

        if (skills.indexOf(htFormatted) > -1) {
            newestHT = htFormatted;
            hts[htFormatted] ? hts[htFormatted]++ : hts[htFormatted] = 1;
        }
    });

    newestTweet = event.id_str;

    let socketDelivery = { 
        htCounts: getHTCounts(), 
        countStartDate, 
        countEndDate: new Date(), 
        newestHT, 
        newestTweet: event.id_str 
    };

    io.sockets.emit('skill-tweet', socketDelivery);
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
    // send back an event with the latest twitter data
    socket.on('send-twitter-data', () => {
        let socketDelivery = {
            htCounts: getHTCounts(),
            countStartDate,
            countEndDate: new Date()
        };

        if (newestHT && newestTweet) {
            socketDelivery.newestHT = newestHT;
            socketDelivery.newestTweet = newestTweet;
        }

        socket.emit('populate-twitter-data', socketDelivery);
    });
});

module.exports = io;