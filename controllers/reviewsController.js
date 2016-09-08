/************
 * DATABASE *
 ************/
//var db = require('../models');
/* hard-coded data */
var sampleReviews = [{
  username: 'SeraController',
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


// GET /api/reviews
function index(req, res) {
  res.json(sampleReviews);
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