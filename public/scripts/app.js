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

//event handlers:
$('#review-list').on('click', '#update-btn', function(){
	$('.update-delete-btn').toggleClass('hidden');
	$('.save-cancel-btn').toggleClass('hidden');
});

$('#review-list').on('click', '#cancel-btn', function(){
	$('.update-delete-btn').toggleClass('hidden');
	$('.save-cancel-btn').toggleClass('hidden');
});

//update review
	$('#review-list').on('click', '#save-btn', function(event){
		var reviewId = $(this).closest('.save-button').attr('data-id');
		var updatedReview = $('[data-id=' + reviewId + ']');

		var data = {
			userReview: updatedReview.find('#updateInput').val()
		};

		console.log('Putting data for review', reviewId, data);

	$.ajax({
		method: 'PUT',
		url: '/api/reviews/' + reviewId,
		data: data,
		success: onUpdateSuccess,
		error: onError
	});
});




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
});

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

function onUpdateSuccess(updatedReview){
	console.log('response to update', updatedReview);
	var updatedReviewId = updatedReview._id;
	$('[data-id=' + updatedReviewId + ']').remove();
	renderReview(updatedReview);
}


// callback after DELETE /api/reviews/:id
function onDeleteSuccess(json) {
  console.log('deleted json', json);
  var deletedReviewId = json._id;
  console.log('removing the following review from the page:', deletedReviewId);
  $('div[data-id=' + deletedReviewId + ']').remove();
}

function onError(error) {
	console.log('error is', error);
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