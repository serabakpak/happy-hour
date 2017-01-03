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

	  
	 
}


