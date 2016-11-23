angular
  .module('theBestHour')
  .controller('IndexReviewsController', IndexReviewsController);

IndexReviewsController.$inject = ['$http', '$routeParams'];

function IndexReviewsController($http, $routeParams){
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
        console.log('rendering all reviews error is', error);
      });

    vm.updateReview = function(review) {
      console.log(review);
      var reviewId = review._id;
      $http({
        method: 'PUT',
        url: '/api/happyHours/' + happyHourId + '/reviews/' + reviewId,
        data: {
          userReview : review.userReview
        }
      }).then(function onUpdateSuccess(correctReview){
          console.log('onUpdateSuccess in show.review.controller.js', correctReview);
          vm.review = correctReview;
          // var index = vm.reviews.indexOf(data);
          // vm.reviews.splice(index, 1, data);
      }, function onUpdateError(error){
          console.log('updating one review error is', error);
      });
    }


  vm.deleteReview = function(id) {
      console.log(id);
        $http({
            method: 'DELETE',
            url: '/api/happyHours/' + happyHourId + '/reviews/'+ id
        }).then(function deleteReview(response){
            console.log('deleting a review in index.reviews.controller.js', response);
            var index = vm.reviews.indexOf(id);
            vm.reviews.splice(index, 1);
        }, function renderMultipeError(error){
            console.log('rendering error is', error);
        });
      }
      
}