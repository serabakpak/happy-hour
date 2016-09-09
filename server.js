// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();

var bodyParser = require('body-parser');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// We'll serve jQuery and bootstrap from a local bower cache avoiding CDNs
// We're placing these under /vendor to differentiate them from our own assets
app.use('/vendor', express.static(__dirname + '/bower_components'));
app.use(bodyParser.urlencoded({ extended: true }));
var controllers = require('./controllers');

/**********
 * ROUTES *
 **********/

// var sampleReviews = [{
//   username: 'SeraController',
//   userReview: 'Awesome place!'
//   },
//   {
//   username: 'Abby',
//   userReview: 'Cool drinks!'
//   },
//   {
//   username: 'Lily',
//   userReview: 'Best Happy Hour EVER!'
//   }
// ];


/*
 * HTML Endpoints
 */

//will need to change to index.html if get initial homepage up:
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/show.html');
});

/*
 * JSON API Endpoints
 */

app.get('/api', controllers.api.index);

app.get('/api/reviews', controllers.reviews.index);

app.post('/api/reviews', controllers.reviews.create);

app.delete('/api/reviews/:reviewId', controllers.reviews.destroy);

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
