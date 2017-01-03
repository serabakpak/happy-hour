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

  //    vm.createSong = function () {
  //   $http({
  //     method: 'POST',
  //     url: '/api/albums/'+ $routeParams.id + '/songs',
  //     data: vm.newSong
  //   }).then(function successCallback(json) {
  //     vm.album.songs.push(json.data);
  //     vm.newSong = {};
  //   }, function errorCallback(response) {
  //     console.log('There was an error creating the data', response);
  //   });
  // }

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

    //  vm.createReview = function(happyHour) {
   //  // vm.deferred = $q.defer();
   //  $http({
   //    method: 'POST',
   //    url: '/api/happyHours/' + happyHourId +'/reviews',
   //    data: vm.review
   //  }).then(function addReview(response){
   //    // vm.deferred.resolve()
   //    console.log('success creating a new review', response.data);
   //    vm.reviews.push(response.data);
   //    vm.newReview = {};
   //  }, function errorCallback(response){
   //      // deferred.reject()
   //    console.log('There was an error creating the review', response);
   //  });
   //  // return vm.deferred.promise;
   // } 


    //   vm.updateReview = function(review){
    //     console.log(review);
    //     ReviewService.getReview(review)
    //       .then(function onUpdateSuccess(correctReview){
    //       console.log('onUpdateSuccess in index.review.controller.js', correctReview);
    //       vm.review = correctReview;
    //       // var index = vm.reviews.indexOf(correctReview);
    //       // vm.reviews.splice(index, 1, correctReview);
    //   }, function onUpdateError(error){
    //       console.log('updating one review error is', error);
    //   });
    // }


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


  // vm.deleteReview = function(id) {
  //     console.log(id);
  //       $http({
  //           method: 'DELETE',
  //           url: '/api/happyHours/' + happyHourId + '/reviews/'+ id
  //       }).then(function deleteReview(response){
  //           console.log('deleting a review in index.reviews.controller.js', response);
  //           var index = vm.reviews.indexOf(id);
  //           vm.reviews.splice(index, 1);
  //       }, function renderMultipeError(error){
  //           console.log('rendering error is', error);
  //       });
  //     }

   
      
}