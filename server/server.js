require('dotenv').config();

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const helpers = require('../helpers');
const dev = process.env.NODE_ENV === 'development';

const contact = require('./components/contact/contact');

const app = express();

// If you want to be pre-connected to mongoose before entering API routes add these lines:
// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGO_URI);
// mongoose.Promise = global.Promise; // tells mongoose to use promises
// require('../models/htCount');
// require('../models/startDate');
// require('../models/tweet');

app.use(cors());
app.use(logger('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(dev ? helpers.root('client') : helpers.root('dist')));
app.use(cookieParser());

app.use('/api/contact', contact);

app.all('*', (req, res, next) => {
    res.sendFile('index.html', {
        root: dev ? helpers.root('client') : helpers.root('dist')
    });
});

module.exports = app;