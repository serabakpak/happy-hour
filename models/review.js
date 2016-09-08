var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReviewSchema = new Schema ({
	username: String,
	userReview: String
});

var Review = mongoose.model('Review', ReviewSchema);

module.exports = Album;