require('dotenv').config();

const mongoose = require('mongoose');

require('../models/startDate');

const StartDate = mongoose.model('startDate');

module.exports = () => StartDate.findOne();