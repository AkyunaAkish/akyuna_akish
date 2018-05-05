require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

require('../models/startDate');
require('../models/htCount');
require('../models/tweet');

const StartDate = mongoose.model('startDate');

const seedStartDate = () => {

    let startDate = new StartDate({ startDate: new Date });

    startDate.save()
             .then((res) => {
                 console.log('Seed Response(start date): ', res);
             })
             .catch((err) => {
                 console.log('Seed Error(start date): ', err);
             });
};

seedStartDate();

const HTCount = mongoose.model('htCount');

const seedHTCounts = () => {

    let htCountInstances = [
        new HTCount({ ht: '#reactjs', count: 45 }),
        new HTCount({ ht: '#javascript', count: 75 }),
        new HTCount({ ht: '#es6', count: 22 }),
        new HTCount({ ht: '#mongodb', count: 88 }),
        new HTCount({ ht: '#expressjs', count: 33 })
    ];

    let promises = [];

    htCountInstances.forEach((instance) => {
        promises.push(instance.save());
    });

    Promise.all(promises)
           .then((res) => {
               console.log('Seed Response(htCount): ', res);
           })
           .catch((err) => {
               console.log('Seed Error(htCount): ', err);
           });
};

seedHTCounts();

const Tweet = mongoose.model('tweet');

const seedTweets = () => {

    let tweetInstance = new Tweet({ startDate: new Date });

    let tweetInstances = [
            new Tweet({ ht: '#reactjs', tweet_id: 45 }),
            new Tweet({ ht: '#javascript', tweet_id: 75 }),
            new Tweet({ ht: '#es6', tweet_id: 22 }),
            new Tweet({ ht: '#mongodb', tweet_id: 88 }),
            new Tweet({ ht: '#expressjs', tweet_id: 33 })
    ];

    let promises = [];

    tweetInstances.forEach((instance) => {
        promises.push(instance.save());
    });

    Promise.all(promises)
           .then((res) => {
               console.log('Seed Response(tweet): ', res);
           })
           .catch((err) => {
               console.log('Seed Error(tweet): ', err);
           });
};

seedTweets();