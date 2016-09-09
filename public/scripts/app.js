/* CLIENT-SIDE JS*/

var allReviews = [];

$(document).ready(function() {
	console.log('app.js loaded!');

	$('.modal-trigger').leanModal();
  
	//render all reviews

	$.ajax({
		method: 'GET',
		url: '/api/reviews',
		success: onSuccess,
		error: onError
	})

	// create review

	$('#form-modal').on('submit', function (e) {
		e.preventDefault();
		var $modal = $('#modal1');
		var $usernameField = $('#username');
		var $userReviewField = $('#user-review');

		$.ajax({
			method: 'POST',
			url: '/api/reviews',
			data: {
			    username: $usernameField.val(),
			    userReview: $userReviewField.val()
			  },
			// data: $(this).serialize(),
			success: onCreateSuccess,
			error: onError
		})

	})


	//update review

	// $('#review-list').on('click', '#updateBtn', function(){
	// 	$(this).parent().find('.collapse').removeClass('collapse');
	// 	console.log('update btn clicked');
	// // $('updateBtn').on('click', function(){
	// // 	console.log('update btn clicked');
	// // 	$('.collapse').slideToggle('slow');
	// // });
	// // $('#review-list').on('click', '#updateBtn', function(event){
	// // 	event.preventDefault();
	// // 	$('.collapse').toggle('visibility', 'visible');
	// 	//find closest id:
	// 	//var reviewId = $('#review-list').closest('.collapse').attr('data-id');
	// });
	// var updateReview = $(this).serialize();
	// $.ajax({
	// 	method: 'PUT',
	// 	url: '/api/reviews/:id',
	// 	data: updatedReview,
	// 	success: onUpdateSuccess,
	// 	error: onError
	// });

	//delete review

  	$('#review-list').on('click', '#delete-btn', function(e) {
	    // console.log('clicked delete button to', '/api/reviews/'+$(this).attr('data-id'));

	    console.log(e);
	    var reviewId = $(this).closest('.delete-button').attr('data-id');
	    console.log('reviewId', reviewId);
	    $.ajax({
	      method: 'DELETE',
	      url: '/api/reviews/'+ reviewId,
	      success: onDeleteSuccess,	
	      error: onError
	      
	    });
	});

  // delete album when its delete button is clicked
  // $('#albums').on('click', '.delete-album', handleDeleteAlbumClick);

});

// // when a delete button for an album is clicked
// function handleDeleteAlbumClick(e) {
//   var albumId = $(this).parents('.album').data('album-id');
//   console.log('someone wants to delete album id=' + albumId );
//   $.ajax({
//     url: '/api/albums/' + albumId,
//     method: 'DELETE',
//     success: handleDeleteAlbumSuccess
//   });
// }





function onSuccess(json) {
	// console.log(json);
	json.forEach(function(review) {
		//console.log(review);
 		renderReview(review);
  	}); 
}

function onCreateSuccess(json) {
	console.log('created', json);
	// allReviews.push(json);
	renderReview(json);
}

function onUpdateSuccess(updatedReview) {
	// var reviewId = updatedReview._id;
	// $('[data-id=' + reviewId + ']').remove();
	// renderReview(updatedReview);
	console.log(updatedReview);
}

// callback after DELETE /api/reviews/:id
function onDeleteSuccess(json) {
  console.log('deleted json', json);
  var deletedReviewId = json._id;
  console.log('removing the following review from the page:', deletedReviewId);
  $('div[data-id=' + deletedReviewId + ']').remove();



}

function onError(error) {
	console.log('error is'+ error);
}

function renderReview(review) {
	// console.log('review:', review);
	var reviewSource = $('#review-template').html();
	// console.log(reviewSource);
	var reviewTemplate = Handlebars.compile(reviewSource);
	var reviewHtml = reviewTemplate(review);
	$('#review-list').append(reviewHtml);
	// console.log(reviewHtml); 
}