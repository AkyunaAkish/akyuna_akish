require('dotenv').config();

const mongoose = require('mongoose');

require('../models/tweet');

const Tweet = mongoose.model('tweet');

module.exports = (tweetConfig) => new Tweet(tweetConfig).save();