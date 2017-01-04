angular
	.module('theBestHour')
	.controller('ShowController', ShowController);

ShowController.$inject = ['$http'];

function ShowController($http){
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
	    url: '/api/happyHours/' + happyHourId
	  }).then(function onHappyHourSuccess(response){
	  		console.log('onHappyHourSuccess in show.controller.js', response);
  			vm.happyHour = response.data;
	  	}, function onHappyHourError(response){
	  		console.log('rendering one error is', response);
	  	});

}