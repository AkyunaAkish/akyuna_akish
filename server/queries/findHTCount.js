require('dotenv').config();

const mongoose = require('mongoose');

require('../models/htCount');

const HTCount = mongoose.model('htCount');

module.exports = (ht) => HTCount.findOne({ ht: ht.ht });