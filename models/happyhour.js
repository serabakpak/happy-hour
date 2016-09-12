var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Review = require('./review.js');

var HappyHourSchema = new Schema ({
  name: String,
  image: String,
  location: String,
  price: String,
  review: [Review.schema],
  daysOfWeek: String,
  hours: String,
  alcoholType: String,
  address: String,
  website: String
});

var HappyHour = mongoose.model('HappyHour', HappyHourSchema);

module.exports = HappyHour;
