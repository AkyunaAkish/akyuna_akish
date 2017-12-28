const mongoose = require('mongoose');
const { Schema } = mongoose;

const TweetSchema = new Schema({
    tweet_id: {
        type: String
    },
    created_at: {
        type: Date
    }
});

mongoose.model('tweet', TweetSchema);