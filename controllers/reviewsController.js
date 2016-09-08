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
  // FILL ME IN !
}



// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};