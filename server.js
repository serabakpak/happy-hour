// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var path = require('path');

var bodyParser = require('body-parser');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// We'll serve jQuery and bootstrap from a local bower cache avoiding CDNs
// We're placing these under /vendor to differentiate them from our own assets
app.use('/vendor', express.static(__dirname + '/bower_components'));
app.use(bodyParser.urlencoded({ extended: true }));
var controllers = require('./app_api/controllers');

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */
 
app.use(express.static(path.join(__dirname, 'app_client')));

app.use(function(req, res) {
 res.sendFile(path.join(__dirname, 'app_client', 'application.html'));
});


/*
 * JSON API Endpoints
 */

// app.get('/api', controllers.api.index);

// app.get('/api/happyHours', controllers.happyHours.index);
// app.get('/api/happyHours/:happyHourId', controllers.happyHours.show);


// app.get('/api/happyHours/:happyHourId/reviews', controllers.reviews.show);
// app.post('/api/happyHours/:happyHourId/reviews', controllers.reviews.create);
// app.put('/api/happyHours/:happyHourId/reviews/:reviewId', controllers.reviews.update);
// app.delete('/api/happyHours/:happyHourId/reviews/:reviewId', controllers.reviews.destroy);

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});

module.exports = app;
