/* CLIENT-SIDE JS*/

var allReviews = [];

$(document).ready(function() {
	console.log('app.js loaded!');


	$.ajax({
		method: 'GET',
		url: '/api/reviews',
		success: onSuccess,
		error: onError
	})

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



function onError(error) {
	console.log('error is'+ error);
}