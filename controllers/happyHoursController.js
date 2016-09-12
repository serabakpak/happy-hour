var db = require('../models');

// GET /api/happyHours
function index(req, res){
  db.HappyHour.find({})
  .exec(function(err, happyHours){
    if (err) {
      return console.log(err);
    };
    console.log(happyHours);
    res.json(happyHours);
  });
};

// GET /api/happyHours/:happyHourId
function show(req, res) {
  console.log(req.params);
	var happyHourId = req.params.id;

	// find happyHour in db by id
	db.HappyHour.findOne({ _id: happyHourId }, function (err, foundHappyHour) {
	  res.json(foundHappyHour);
 });
};


module.exports = {
  index: index,
   show: show,
};
