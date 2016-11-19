angular
  .module('theBestHour')
  .controller('IndexReviewsController', IndexReviewsController);

IndexReviewsController.$inject = ['$http'];

function IndexReviewsController($http){
  var vm = this;

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
        console.log('rendering error is', error);
      });

}
