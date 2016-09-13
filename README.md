# Happy Hour

Here we created our first full stack web application designed to allow users to view happy hours in San Francisco.  Users are able to read reviews, add their own, update and delete their reviews.

Feel free to fork / star / watch for your own personal use.

See the published project at [Happy Hour](https://morning-spire-17654.herokuapp.com "Happy Hour")

##Technologies Used

- jQuery and Javascript to add interactivity and display data on the client side
- AJAX to make requests asynchronously
- Handlebars to render templated JSON data on the front end
- Node.js and Express for connecting our database to our client-side
- MongoDB and Mongoose to persist our resources
- Materialize framework to create a unified baseline structure
- HTML and CSS for the basic structure of our app

##Code We're Proud Of



```
function update(req, res) {
  db.HappyHour.findById(req.params.happyHourId, function(err, foundHappyHour) {
    console.log(foundHappyHour);
    // we've got the happy hour, now find the review within it
    var correctReview = foundHappyHour.review.id(req.params.reviewId);
    if (correctReview) {
      console.log('req.body from update function in reviewsController',req.body);
      correctReview.userReview = req.body.userReview;
      foundHappyHour.save(function(err, saved) {
        console.log('UPDATED', correctReview, 'IN ', saved.reviews);
        res.json(correctReview);
      });
    } 
    else {
      res.send(404);
    }
  }); 

```

```
// Get the ID from the URL 
//i.e. get '/happyHours/0'
pathname = window.location.pathname;
//replace '/happyHours/' with empty string so '/happyHours/0' --> '0'
happyHourId = pathname.replace("/happyHours/",""); 
```	  

##Screenshots
![Home Page Screenshot](public/images/Screenshot1.png?raw=true)
![Happy Hour Listings Screenshot](public/images/Screenshot2.png?raw=true)
![Individual Happy Hour Screenshot](public/images/Screenshot4.png?raw=true)
![Happy Hour Info Screenshot](public/images/Screenshot3.png?raw=true)
![Happy Hour Reviews Screenshot](public/images/Screenshot5.png?raw=true)
![Happy Hour Add Review Modal Screenshot](public/images/Screenshot6.png?raw=true)