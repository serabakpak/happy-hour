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

	$('#one-review').on('click', '#updateBtn', function(){
		$(this).parent().find('.collapse').removeClass('collapse');
		console.log('update btn clicked');
	// $('updateBtn').on('click', function(){
	// 	console.log('update btn clicked');
	// 	$('.collapse').slideToggle('slow');
	// });
	// $('#one-review').on('click', '#updateBtn', function(event){
	// 	event.preventDefault();
	// 	$('.collapse').toggle('visibility', 'visible');
		//find closest id:
		//var reviewId = $('#one-review').closest('.collapse').attr('data-id');
	});
	var updateReview = $(this).serialize();
	$.ajax({
		method: 'PUT',
		url: '/api/reviews/:id',
		data: updatedReview,
		success: onUpdateSuccess,
		error: onError
	});

});

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

function onUpdateSuccess(updatedReview) {
	// var reviewId = updatedReview._id;
	// $('[data-id=' + reviewId + ']').remove();
	// renderReviews(updatedReview);
	console.log(updatedReview);
}


function onError(error) {
	console.log('error is'+ error);
}