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

//    //delete review

//      $('#review-list').on('click', '#delete-btn', function(e) {
//        // console.log('clicked delete button to', '/api/reviews/'+$(this).attr('data-id'));

//        console.log('delete event in show.controller.js',e);
//        var reviewId = $(this).closest('.delete-button').attr('data-id');
//        console.log('deleted reviewId', reviewId);
//        var deleteUrl = '/api/happyHours/' + happyHourId + '/reviews/'+ reviewId;
//        console.log (deleteUrl);
//        $.ajax({
//          method: 'DELETE',
//          url: deleteUrl,
//          success: onDeleteSuccess, 
//          error: deleteError
          
//        });
//    });

// // callback after DELETE /api/reviews/:id
// function onDeleteSuccess(json) {
//   console.log('deleted json', json);
//   var deletedReviewId = json._id;
//   console.log('removing the following review from the page:', deletedReviewId);
//   $('div[data-id=' + deletedReviewId + ']').remove();
// }

// function deleteError(error) {
//  console.log('delete error is', error);
// }




