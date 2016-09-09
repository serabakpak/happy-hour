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
    res.json(reviews);
  })
}


function create(req, res) {
	//FILL ME IN!
}

function show(req, res) {
  // FILL ME IN !
}

function destroy(req, res) {
  // FILL ME IN !
}

function update(req, res) {
  console.log('updating via controller', req.body);
  db.Review.findById(req.params.reviewId, function(err, foundReview){
    if(err){
      console.log('error with updating in controller' + err);
    } else {
      foundReview.userReview = req.body.userReview;
      foundReview.save(function(err, savedReview){
        if(err) {
          console.log('issue with saving updates via controller' + err);
        } else {
          res.json(savedReview);
        }
      });
    }
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