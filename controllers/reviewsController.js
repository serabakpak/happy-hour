var db = require('../models');

// GET /api/reviews
function index(req, res) {
//   // db.HappyHour.findOne({name: }, function(err, user){
//   //   console.log(user.tweets);
//   // });

//   db.HappyHour.review.find({}, function(err, reviews){
//   console.log(reviews);
// });


//   //list all reviews of a specific Happy Hour
//   // db.HappyHour.findById(req.params.happyHourId, function(err, foundHappyHour) {
//   //   console.log('foundHappyHour is', foundHappyHour);
//   //   // console.log(foundHappyHour.review);
//   //   res.json(foundHappyHour);

//   // })



  db.Review.find({})
  .exec(function(err, reviews){
    if (err) {
      return console.log(err);
    }
    console.log(reviews);
    res.json(reviews);
  })

}

function create(req, res) {
  
  // db.HappyHour.findById(req.params.happyHourId, function(err, foundHappyHour) {
  //   console.log('req.body of create',req.body);
  //   var newReview = new db.Review(req.body);  // dangerous, in a real app we'd validate the incoming data
  //   foundHappyHour.reviews.push(newReview);
  //   foundHappyHour.save(function(err, savedHappyHour) {
  //     console.log('newReview created: ', newReview);
  //     res.json(newReview);  // responding with just the Review, some APIs may respond with the parent object (HappyHour in this case)
  //   });
  // });


  db.Review.create(req.body, function(err, review) {
    if (err) { console.log('error', err); }
  console.log(review);
  res.json(review);
  });
}

function show(req, res) {
  // FILL ME IN !
}

function destroy(req, res) {
  db.Review.findOneAndRemove({ _id: req.params.reviewId }, function(err, foundReview){
  // note you could send just send 204, but we're sending 200 and the deleted entity
  res.json(foundReview);
  });
}

function update(req, res) {
  console.log('updating via controller', req.body);
  db.Review.findById(req.params.reviewId, function(err, foundReview){
    if(err){
      console.log('error with updating in controller', err);
    }
    foundReview.userReview = req.body.userReview;
    foundReview.save(function(err, savedReview){
      if(err) {
        console.log('issue with saving updates via controller', err);
      }
      res.json(savedReview);
      });
    });
  }

// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};