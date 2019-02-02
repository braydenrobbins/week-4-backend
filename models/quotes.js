var mongoose = require('mongoose');

var schema = mongoose.Schema({
    quote: String,
    author: String
});

var Quote = mongoose.model('quotes', schema);

module.exports = Quote;