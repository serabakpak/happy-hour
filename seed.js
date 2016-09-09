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


db.Review.remove({}, function(err, reviews){

  db.Review.create(reviewsList, function(err, reviews){
    if (err) { return console.log('ERROR', err); }
    console.log("all reviews:", reviews);
    console.log("created", reviews.length, "reviews");
    process.exit();
  });

});