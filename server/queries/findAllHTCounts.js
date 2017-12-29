require('dotenv').config();

const mongoose = require('mongoose');

require('../models/htCount');

const HTCount = mongoose.model('htCount');

module.exports = () => {
    return HTCount.find({})
                  .then((counts) => {
                    if(!counts || !counts.length) {
                        return { categories: [], data: [] };
                    } else {
                        return counts.reduce((final, count) => {
                            final.categories.push(count.ht);
                            final.data.push(count.count);
                            return final;
                        }, { categories: [], data: [] });
                    }
                  });
};