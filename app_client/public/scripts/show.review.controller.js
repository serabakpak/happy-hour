angular
	.module('theBestHour')
	.controller('ShowReviewController', ShowReviewController);

ShowReviewController.$inject = ['$http', '$routeParams'];

function ShowReviewController($http, $routeParams){
	var vm = this;
	// var reviewId = $routeParams.id;


	var pathname;
	var happyHourId;
	var reviewId;
	var reviews;


 	//render 1 listing for show.html:
	  // Get the ID from the URL 
	  //i.e. get '/happyHours/0'
	  pathname = window.location.pathname;

	  //replace '/happyHours/' with empty string so '/happyHours/0' --> '0'
	  happyHourId = pathname.replace("/happyHours/",""); 
	  reviewId = pathname.replace("/reviews/","");

	  vm.updateReview = function(review){
      console.log(vm.correctReview);
      console.log(happyHourId);
      console.log(review._id);
      $http({
      	method: 'PUT',
      	url: '/api/happyHours/' + happyHourId + '/reviews/' + review._id,
      	data: vm.correctReview
      }).then(function onUpdateSuccess(review){
        console.log('onUpdateSuccess in index.review.controller.js', review);
        vm.review = review.data;
        var index = vm.reviews.indexOf(correctReview);
        vm.reviews.splice(index, 1, correctReview);
    }, function onUpdateError(error){
        console.log('updating one review error is', error);
      });
    }


   vm.deleteReview = function(review) {
   		var happyHourId;
   		var happyHour;
   		pathname = window.location.pathname;

	  //replace '/happyHours/' with empty string so '/happyHours/0' --> '0'
	  happyHourId = pathname.replace("/happyHours/","");
      console.log(review);
      console.log(review._id);
        $http({
            method: 'DELETE',
            url: '/api/happyHours/' + happyHourId + '/reviews/'+ review._id
        }).then(function deleteReview(response){
            console.log('deleting a review in show.review.controller.js', response);
            var data = response.data;
            console.log('review: ', review, 'response: ', data);
            var index = vm.HappyHour.reviews.indexOf(data);
            vm.HappyHour.reviews.splice(index, 1);
        }, function renderMultipeError(error){
            console.log('rendering error is', error);
        });
      }

	 
}


