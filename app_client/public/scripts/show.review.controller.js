angular
	.module('theBestHour')
	.controller('ShowReviewController', ShowReviewController);

ShowReviewController.$inject = ['$http', '$routeParams'];

function ShowReviewController($http, $routeParams){
	var vm = this;
	// var reviewId = $routeParams.id;


	var pathname;
	var happyHourId;
	var reviews;


 	//render 1 listing for show.html:
	  // Get the ID from the URL 
	  //i.e. get '/happyHours/0'
	  pathname = window.location.pathname;

	  //replace '/happyHours/' with empty string so '/happyHours/0' --> '0'
	  happyHourId = pathname.replace("/happyHours/",""); 
	
		// $http({
	 //    method: 'GET',
	 //    url: '/api/happyHours/' + happyHourId + '/reviews/'+ review._id
		//     }).then(function renderOneReview(response) {
		//       console.log('getting one review in ShowReviewController', response);
		//       vm.review = response.data;
		//     }, function renderOneReviewError(error) {
		//       console.log('There was an error getting a review in ShowReviewController', error);
	 //    });


}


