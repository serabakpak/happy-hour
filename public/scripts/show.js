var pathname;
var happyHourId;

$(document).ready(function() {
	console.log('app.js loaded!');


 //render 1 listing for show.html:
  // Get the ID from the URL 
  //i.e. get '/happyHours/0'
  pathname = window.location.pathname;

  //replace '/happyHours/' with empty string so '/happyHours/0' --> '0'
  happyHourId = pathname.replace("/happyHours/",""); 

  $.ajax({
    method: 'GET',
    url: '/api/happyHours/' + happyHourId,
    success: onHappyHourSuccess,
    error: onHappyHourError
  }); 
   

	$('.modal-trigger').leanModal();

	//render all reviews
	$.ajax({
		method: 'GET',
		url: '/api/happyHours/' + happyHourId + '/reviews',
		success: renderMultipleReviews,
		error: renderMultipleError
	})

	// create review

	$('#form-modal').on('submit', function (e) {
		e.preventDefault();
		var $modal = $('#modal1');
		var $usernameField = $('#username');
		var $userReviewField = $('#user-review');
		// var happyHourId = $modal.data('happyhour-id');
		// console.log(happyHourId);

		$.ajax({
			method: 'POST',
			url: '/api/happyHours/' + happyHourId + '/reviews',
			data: {
			    username: $usernameField.val(),
			    userReview: $userReviewField.val()
			  },
			success: onCreateSuccess,
			error: createError
		})
		



		$(this).trigger('reset');
		$modal.closeModal();
	})

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
				url: '/api/happyHours/' + happyHourId + '/reviews/'+ reviewId,
				data: data,
				success: onUpdateSuccess,
				error: updateError
			});
		});



		//delete review

	  	$('#review-list').on('click', '#delete-btn', function(e) {
		    // console.log('clicked delete button to', '/api/reviews/'+$(this).attr('data-id'));

		    console.log('delete event in show.js',e);
		    var reviewId = $(this).closest('.delete-button').attr('data-id');
		    console.log('deleted reviewId', reviewId);
		    var deleteUrl = '/api/happyHours/' + happyHourId + '/reviews/'+ reviewId;
		    console.log (deleteUrl);
		    $.ajax({
		      method: 'DELETE',
		      url: deleteUrl,
		      success: onDeleteSuccess,	
		      error: deleteError
		      
		    });
		});
});

function onHappyHourSuccess(json){
  console.log('onhappyhoursuccess',json)
  renderOneListing(json);
  	//parallax effect:
  $('.parallax').parallax();
}

function onHappyHourError(error) {
  console.log('on happy hour error is', error);
}

function renderOneListing(listing) {
   console.log('listing:', listing);
  var listingSource = $('#listing-template').html();
  // console.log(reviewSource);
  var listingTemplate = Handlebars.compile(listingSource);
  var listingHtml = listingTemplate(listing);
  $('#listing-section').append(listingHtml);
  // console.log(reviewHtml); 
}

function renderMultipleReviews(json) {
	console.log('rendering multiple reviews in show.js',json);
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
	//hide save and cancel buttons
	$('.save-cancel-btn').toggleClass('hidden');
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

function renderReview(review) {
	console.log('renderReview in show.js:', review);
	var reviewSource = $('#review-template').html();
	// console.log(reviewSource);
	var reviewTemplate = Handlebars.compile(reviewSource);
	var reviewHtml = reviewTemplate(review);
	$('#review-list').append(reviewHtml);
	// console.log(reviewHtml); 
}

function renderMultipleError(error) {
	console.log('rendering error is', error);
}


function createError(error) {
	console.log('creating error is', error);
}

function deleteError(error) {
	console.log('delete error is', error);
}

function updateError(error) {
	console.log('update error is', error);
}