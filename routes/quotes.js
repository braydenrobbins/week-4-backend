var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/lists");
var db = mongoose.connection;

db.on('error', function(msg) {
    console.log("mongoose connection error %s", msg);
});

db.once("open", function() {
    console.log("mongoose connection established");
});

var Quotes = require('../models/quotes');

module.exports = router;