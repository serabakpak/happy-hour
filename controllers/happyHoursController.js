var db = require('../models');

// var happyHoursList = [{    
//   _id: 0,
//   name: 'Bar Crudo',
//   image: 'https://media-cdn.tripadvisor.com/media/photo-s/01/1a/19/87/open-kitchen-at-bar-crudo.jpg',
//   location: 'NoPa',
//   price: '$$$',
//   //review: [],
//   daysOfWeek: 'Everyday',
//   hours: '5PM-6:30PM',
//   alcoholType: [
//     '$4 beer',
//     '$6 wine'
//     ],
//   address: '655 Divisadero Street',
//   website: 'http://barcrudo.com/'
//   },
//   {
//   _id: 1,  
//   name: 'Palm House',
//   image: 'https://cdn2.vox-cdn.com/thumbor/NM7zJSvCiZvOd5jxo__-90GaZHM=/899x600/cdn0.vox-cdn.com/uploads/chorus_asset/file/771162/IMG_4196-3260434216-O.0.jpg',
//   location: 'Marina/Cow Hollow',
//   price: '$$',
//   //review: [],
//   daysOfWeek: 'Tuesday-Friday',
//   hours: '5PM-6:30PM',
//   alcoholType: [
//       '$7 cocktails',
//       '$1 off beers',
//       '1/2 off wine'
//       ],
//   daysOfWeek: 'Tuesday-Friday',
//   hours: '5PM-6:30PM',
//   alcoholType: '$7 cocktails, $1 off beers, 1/2 off wine',
//   address:'2032 Union Street',
//   website: 'http://www.palmhousesf.com/palm-house-san-francisco-menus.html'
//   },
//   { 
//   _id: 2,  
//   name: 'Reed & Greenough',
//   image: 'https://cdn2.vox-cdn.com/uploads/chorus_image/image/49253693/6093536605_2dd5daae84_o.0.0.jpg',
//   location: 'Marina',
//   price: '$$',
//   //review: [],
//   daysOfWeek: 'Tuesday-Friday, Sunday',
//   hours: '5PM-7PM',
//   alcoholType: [
//     '1/2 off wine'
//     ],
//   address: '3251 Scott Street',
//   website: 'http://reedandgreenough.com/'
//   }
// ];


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
