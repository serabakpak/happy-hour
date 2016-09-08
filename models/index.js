var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/happy-hour");

module.exports.Review = require("./review.js");