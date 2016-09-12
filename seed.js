// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var reviewsList = [{
  username: 'Sera',
  userReview: 'Awesome place!'
  },
  {
  username: 'Abby',
  userReview: 'Cool drinks!'
  },
  {
  username: 'Lily',
  userReview: 'Best Happy Hour EVER!'
  }
];

var happyHoursList = [{
  name: 'Bar Crudo',
  image: String,
  location: 'NoPa',
  price: '$$$',
  review: [],
  daysOfWeek: 'Everyday',
  hours: '5PM-6:30PM',
  alcoholType: [
    '$4 beer',
    '$6 wine'
    ],
  address: '655 Divisadero Street',
  website: "http://barcrudo.com/"
  },
  {
  name: 'Palm House',
  image: String,
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
  name: 'Reed & Greenough',
  image: String,
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


db.Review.remove({}, function(err, reviews){

  db.Review.create(reviewsList, function(err, reviews){
    if (err) { return console.log('ERROR', err); }
    console.log("all reviews:", reviews);
    console.log("created", reviews.length, "reviews");
    process.exit();
  });

});