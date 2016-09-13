// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.
 var db = require('./models');

var happyHoursList = [{    
    name: 'Bar Crudo',
    indexImage: 'https://media-cdn.tripadvisor.com/media/photo-s/01/1a/19/87/open-kitchen-at-bar-crudo.jpg',
    showImage: 'http://i.imgur.com/iEgv74g.jpg',
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
    website: 'http://barcrudo.com/'
  },
  {
    name: 'Palm House',
    indexImage: 'https://cdn2.vox-cdn.com/thumbor/NM7zJSvCiZvOd5jxo__-90GaZHM=/899x600/cdn0.vox-cdn.com/uploads/chorus_asset/file/771162/IMG_4196-3260434216-O.0.jpg',
    showImage: 'http://i.imgur.com/cU5mIuC.jpg',
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
    daysOfWeek: 'Tuesday-Friday',
    hours: '5PM-6:30PM',
    alcoholType: '$7 cocktails, $1 off beers, 1/2 off wine',
    address:'2032 Union Street',
    website: 'http://www.palmhousesf.com/palm-house-san-francisco-menus.html'
  },
  {   
    name: 'Reed & Greenough',
    indexImage: 'https://cdn2.vox-cdn.com/uploads/chorus_image/image/49253693/6093536605_2dd5daae84_o.0.0.jpg',
    showImage: 'http://i.imgur.com/yTjBaEp.jpg',
    location: 'Marina',
    price: '$$',
    review: [],
    daysOfWeek: 'Tuesday-Friday, Sunday',
    hours: '5PM-7PM',
    alcoholType: [
      '1/2 off wine'
      ],
    address: '3251 Scott Street',
    website: 'http://reedandgreenough.com/'
  }
];

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

// add all the same reviews to each Happy Hour in our Happy Hours List:
happyHoursList.forEach(function(happyHour){
  happyHour.review = reviewsList;
  console.log('happyHour is ', happyHour);
});

db.HappyHour.remove({}, function(err, happyHours){
  db.HappyHour.create(happyHoursList, function(err, happyHours){
    if (err) { return console.log('ERROR', err); }
    console.log("all happyHours:", happyHours);
    console.log("created", happyHours.length, "happyHours");
    process.exit();
    
    db.HappyHour.review.remove({}, function(err, reviews){
      db.HappyHour.review.create(happyHoursList.review, function(err, reviews){
        if (err) { return console.log('ERROR', err); }
        console.log("all reviews:", reviews);
        console.log("created", reviews.length, "reviews");
        process.exit();
      });

    });
  });

});
 