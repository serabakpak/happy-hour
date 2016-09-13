var db = require('../models');

// GET /api/happyHours
function index(req, res){
  db.HappyHour.find({})
  .exec(function(err, happyHours){
    if (err) {
      return console.log(err);
    };
    console.log('get all happyhours on index',happyHours);
    res.json(happyHours);
  });
  // res.json(happyHoursList);


};

// GET /api/happyHours/:happyHourId
function show(req, res) {
  console.log(req.params);
	var happyHourId = req.params.happyHourId;
  console.log('happyHourId ', happyHourId);
	// find happyHour in db by id
	db.HappyHour.findOne({ _id: happyHourId }, function (err, foundHappyHour) {
	  
    console.log('one HH ',foundHappyHour);
    res.json(foundHappyHour);
 });
  // var id = req.params.happyHourId;
  //  for (var i = 0; i < happyHoursList.length; i++) {
  //    if (happyHoursList[i]._id == id) {
  //      var result = happyHoursList[i];
  //    }
 
  //  }
  //  res.json(result);  
};



module.exports = {
  index: index,
   show: show,
};
