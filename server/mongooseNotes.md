## MONGODB/MONGOOSE NOTES

- reference repo: https://github.com/MSturges/MongoDB_CourseWork

#### if you want to create relationships between models:

```js
const mongoose = require('mongoose');
const { Schema } = mongoose


const CoinSchema = new Schema({
    coinName: {
        type: String,
        validate: {
            validator: (coinName) => coinName.length > 2,
            message: 'Name must be longer than 2 characters.'
        },
        required: [true, 'Name is required.']
    },
    siteName: String,
    siteLink: String,
    timeSeries: [{
        type: Schema.Types.ObjectId,
        ref: 'timeSeries',
    }],
});
```

```js
const mongoose = require('mongoose');
const { Schema } = mongoose;


const TimeSeriesSchema = new Schema({
    date: {
      type: Date,
      default: Date.now
    },
    price: Number,
    volume: Number
});


mongoose.model('timeSeries', TimeSeriesSchema);
```

#### finding by a specific property: (you need to use populate to get the values of timeSeries otherwise you just get the id)

```js
const mongoose = require('mongoose');
require('../../../models/coin');
require('../../../models/timeSeries');
const Coin = mongoose.model('coin');

module.exports = (coinName) => {

    return Coin.find({ coinName })
        .populate({
            path: 'timeSeries'
        });
};
```