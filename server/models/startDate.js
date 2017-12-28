const mongoose = require('mongoose');
const { Schema } = mongoose;

const StartDateSchema = new Schema({
    startDate: {
        type: Date,
        default: new Date()        
    }
});

mongoose.model('startDate', StartDateSchema);