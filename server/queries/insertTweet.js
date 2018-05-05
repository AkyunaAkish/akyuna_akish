require('dotenv').config();

const mongoose = require('mongoose');

require('../models/tweet');

const Tweet = mongoose.model('tweet');

module.exports = (tweetConfig) => {
    return new Tweet(tweetConfig)
                    .save()
                    .then(() => Tweet.find({}).sort('-created_at'));
};