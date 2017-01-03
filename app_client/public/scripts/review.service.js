// angular
//   .module('theBestHour')
//   .factory('ReviewService', function($http, $q){

//   	function ReviewService(review){
//   		var self = this;
//         console.log(review);
//   		self.getReview = function(){
//   			var deferred = $q.defer();
//   			console.log('by line 10 of review.service the review says: ', self.review);
//   			if (self.review !== null){
//   				deferred.resolve(self.review + 'New Review');
//   			} else {
//   				$http.post('/api/happyHours/' + happyHourId + '/reviews/' + review._id)
//   				.success(function(response){
//   					self.review = response.review;
//   					deferred.resolve(response.review + 'From server!');
//   				})
//   				.error(function(response){
//   					deferred.reject(response);
//   				});
//   			}
//   			return deferred.promise;
//   		};
//    	}
//    	return new ReviewService();
//   });

// 	