/************
 * DATABASE *
 ************/
var db = require('../models');

// GET /api/reviews
function index(req, res) {
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