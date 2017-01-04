angular
  .module('theBestHour')
  .controller('IndexReviewsController', IndexReviewsController);

IndexReviewsController.$inject = ['$http', '$routeParams', '$scope'];

function IndexReviewsController($http, $routeParams){
  var vm = this;
  vm.newReview = {};
  
  var pathname;
  var happyHourId;
  //render 1 listing for show.html:
  // Get the ID from the URL 
  //i.e. get '/happyHours/0'
  pathname = window.location.pathname;

  //replace '/happyHours/' with empty string so '/happyHours/0' --> '0'
  happyHourId = pathname.replace("/happyHours/",""); 

  $http({
      method: 'GET',
      url: '/api/happyHours/' + happyHourId + '/reviews'
    }).then(function renderMultipleReviews(response){
        console.log('rendering multiple reviews in index.reviews.controller.js', response);
        vm.reviews = response.data;
      }, function renderMultipeError(error){
        console.log('rendering all reviews error is', error);
      });


    vm.createReview = function(newReview){
      console.log(happyHourId);
      console.log(vm.newReview);
      $http({
        method: 'POST',
        url: '/api/happyHours/' + happyHourId + '/reviews',
        data: vm.newReview 
      }).then(function addReviewSuccess(response){
        console.log('reaching the addReview Success function', response.data);
        vm.reviews.push(response.data);
        vm.newReview = {};
      }, function addReviewError(response){
        console.log('There was an error while creating a new review', response);
      });
    }


    // vm.updateReview = function(review) {
    //   console.log(review);
    //   $http({
    //     method: 'PUT',
    //     url: '/api/happyHours/' + happyHourId + '/reviews/' + review._id,
    //     data: review
    //   }).then(function onUpdateSuccess(correctReview){
    //       console.log('onUpdateSuccess in show.review.controller.js', correctReview);
    //       // vm.review = correctReview;
    //       // var index = vm.reviews.indexOf(correctReview);
    //       // vm.reviews.splice(index, 1, correctReview);
    //   }, function onUpdateError(error){
    //       console.log('updating one review error is', error);
    //   });
    // }


  
   
      
}