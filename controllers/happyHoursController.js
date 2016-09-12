/************
 * DATABASE *
 ************/
//var db = require('../models');

// var mongoose = require('mongoose');


var happyHourList = [{
  _id: 0,
  name: 'Bar Crudo',
  image: "https://media-cdn.tripadvisor.com/media/photo-s/01/1a/19/87/open-kitchen-at-bar-crudo.jpg",
  location: 'NoPa',
  price: '$$$',
  review: [],
  daysOfWeek: 'Everyday',
  hours: '5PM-6:30PM',
  alcoholType: [
      '$7 cocktails',
      '$1 off beers',
      '1/2 off wine'
      ],
  address: '655 Divisadero Street',
  website: "http://barcrudo.com/"
  },
  {
  _id: 1,
  name: 'Palm House',
  image: "http://www.palmhousesf.com/images/1-7.jpg?crc=256437448",
  location: 'Marina/Cow Hollow',
  price: '$$',
  review: [],
  daysOfWeek: 'Tuesday-Friday',
  hours: '5PM-6:30PM',
  alcoholType: [
      '$7 cocktails',
      '$1 off beers',
      '1/2 off wine'
      ],
  address:'2032 Union Street',
  website: 'http://www.palmhousesf.com/palm-house-san-francisco-menus.html'
  },
  {
  _id: 2,
  name: 'Reed & Greenough',
  image: "https://s3-media3.fl.yelpcdn.com/bphoto/lTfKYVgtKaQZExK8nC3cIA/o.jpg",
  location: 'Marina',
  price: '$$',
  review: [],
  daysOfWeek: 'Tuesday-Friday, Sunday',
  hours: '5PM-7PM',
  alcoholType: [
    '1/2 off wine'
    ],
  address: '3251 Scott Street',
  website: "http://reedandgreenough.com/"
  }]

var db = require('../models');
//0921fc8ab674bbd5acddb54f044045a6ef89955d

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
