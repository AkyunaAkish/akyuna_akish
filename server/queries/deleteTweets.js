require('dotenv').config();

const mongoose = require('mongoose');

require('../models/tweet');

const Tweet = mongoose.model('tweet');

module.exports = (tweetIDs) => Tweet.remove({ _id: { $in: tweetIDs } });