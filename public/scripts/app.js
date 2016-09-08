/* CLIENT-SIDE JS*/


/* hard-coded data! */
var sampleReviews = [{
	username: 'Laura',
	userReview: 'Awesome place!'
	},
	{
	username: 'Abby',
	userReview: 'Cool drinks!'
	},
	{
	username: 'Lily',
	userReview: 'Best Happy Hour EVER!'
	}
	];

/* end of hard-coded data */


$(document).ready(function() {
	console.log('app.js loaded!');

	var reviewSource = $('#review-template').html();
	var reviewTemplate = Handlebars.compile(reviewSource);
	var reviewHtml = reviewTemplate({reviews: sampleReviews});
	$('#one-review').append(reviewHtml);
	console.log(reviewHtml); 



});
