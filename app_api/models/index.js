var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/happy-hour");

module.exports.Review = require("./review.js");
module.exports.HappyHour = require("./happyhour.js");


