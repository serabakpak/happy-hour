var db = require('../models');

// GET /api//happyHours/:happyHourId/reviews
// get all the reviews of each happy hour
function show(req, res) {
  console.log(req.params);
  var happyHourId = req.params.happyHourId;
  console.log('happyHourId ', happyHourId);
  // find happyHour in db by id
  db.HappyHour.findOne({ _id: happyHourId }, function (err, foundHappyHour) {
    if (err || foundHappyHour ===  null) {
      res.send(404);
    } else {
      console.log('one HH ',foundHappyHour);
      res.json(foundHappyHour.review);
    }
  });
}


// POST /api//happyHours/:happyHourId/reviews
// post a review to a specific happy hour
function create(req, res) {
  
  db.HappyHour.findById(req.params.happyHourId, function(err, foundHappyHour) {
    console.log('req.body of create',req.body);
    var newReview = new db.Review(req.body);  // dangerous, in a real app we'd validate the incoming data
    foundHappyHour.review.push(newReview);
    foundHappyHour.save(function(err, savedHappyHour) {
      console.log('newReview created: ', newReview);
      res.json(newReview);  // responding with just the Review, some APIs may respond with the parent object (HappyHour in this case)
    });
  });

}


function destroy(req, res) {
  // console.log(req.params.happyHourId)
  db.HappyHour.findOne({ _id: req.params.happyHourId }, function(err, foundHappyHour){
    // note you could send just send 204, but we're sending 200 and the deleted entity
    if (err) {
      console.log("error deleting ", err);
      res.send(404);
    } else {
      console.log('foundHappyHour for delete in reviewsController', foundHappyHour);
      var correctReview = foundHappyHour.review.id(req.params.reviewId);
      console.log('correct review from destroy reviews controller', correctReview);
      // res.json({ reviewDeleted: correctReview });

      if (correctReview) {
        correctReview.remove();    
        foundHappyHour.save(function(err, saved) {
          console.log('REMOVED', correctReview.username, 'FROM', saved.reviews);
          res.json(correctReview);
        });
      }
      else {
        console.log('destroy error is 404')
        res.send(404);
      }
    }
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
      if (err) {
        console.log('issue with saving updates via controller', err);
      }
      res.json(savedReview);
    });
  });
}

// export public methods here
module.exports = {
  // index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};