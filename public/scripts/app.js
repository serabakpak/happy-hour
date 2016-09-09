/* CLIENT-SIDE JS*/

var allReviews = [];

$(document).ready(function() {
	console.log('app.js loaded!');

	//render all reviews
	$.ajax({
		method: 'GET',
		url: '/api/reviews',
		success: onSuccess,
		error: onError
	})

	//update review
	$('#one-review').on('click', '.save-button', function(event){
		event.preventDefault();
		console.log($(this));
		var reviewId = $(this).closest('.save-button').attr('data-id');
		console.log(reviewId);
		var reviewToUpdate = allReviews.find(function(review){
			return review._id == reviewId;
		});
		var updatedReview = $(this).serialize();
		console.log('update review', reviewId);

	$.ajax({
		method: 'PUT',
		url: '/api/reviews/' + reviewId,
		data: updatedReview,
		success: function onUpdateSuccess(json) {
			reviewId = updatedReview._id;
			$('[data-id=' + reviewId + ']').remove(allReviews);
			renderReviews(updatedReview);
			console.log(updatedReview);
		},
		error: onError
	});
	})
})

function onSuccess(json) {
	console.log(json);
	allReviews = json;
	renderReviews(allReviews);
}

function renderReviews(reviews) {
	var reviewSource = $('#review-template').html();
	var reviewTemplate = Handlebars.compile(reviewSource);
	var reviewHtml = reviewTemplate({reviews: allReviews});
	$('#one-review').append(reviewHtml);
	console.log(reviewHtml); 
}

// function onUpdateSuccess(updatedReview) {
// 	var reviewId = updatedReview._id;
// 	$('[data-id=' + reviewId + ']').remove();
// 	renderReviews(updatedReview);
// 	console.log(updatedReview);
// }


function onError(error) {
	console.log('error is'+ error);
}