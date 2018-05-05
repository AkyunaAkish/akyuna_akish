const mongoose = require('mongoose');
const { Schema } = mongoose;

const HTCountSchema = new Schema({
    ht: {
        type: String
    },
    count: {
        type: Number
    }
});

mongoose.model('htCount', HTCountSchema);

