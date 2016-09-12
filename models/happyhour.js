var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var HappyHourSchema = new Schema ({
  name: String,
  image: String,
  location: String,
  price: String,
  //review: Array,
  daysOfWeek: String,
  hours: String,
  alcoholType: String,
  address: String,
  website: String
});

var HappyHour = mongoose.model('HappyHour', HappyHourSchema);

module.exports = HappyHour;
