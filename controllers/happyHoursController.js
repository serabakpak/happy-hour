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

// GET /api/happyHours
function index(req, res){
    res.json(happyHourList);
}

function show(req, res) {
  console.log(req.params);
  var id = req.params.happyHourId;
  for (var i = 0; i < happyHourList.length; i++) {
    if (happyHourList[i]._id == id) {
      var result = happyHourList[i];
    }

  }
  res.json(result);  
 };


// function create(req, res) {

// }

// function show(req, res) {
//   // FILL ME IN !
// }

// function destroy(req, res) {
  
// }

// function update(req, res) {
  
//   }

// export public methods here
module.exports = {
  index: index,
  // create: create,
   show: show,
  // destroy: destroy,
  // update: update
};
