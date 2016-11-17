angular
  .module('theBestHour')
  .controller('IndexController', IndexController);

IndexController.$inject = ['$http'];

function IndexController($http){
  var vm = this;

  $http({
    method: 'GET',
    url: '/api/happyHours'
  }).then(function renderMultipleListings(response){
      console.log('renderMultListings in index.controller.js', response);
      vm.happyHours = response.data;
  }, function renderMultipleError(response){
      console.log('render multiple error is', response);
  });

}



