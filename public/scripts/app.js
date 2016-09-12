
$(document).ready(function() {
	console.log('app.js loaded!');
	//parallax effect:
  // $('.parallax').parallax();



  // render multiple listings for homepage
  $.ajax({
  method: 'GET',
  url: '/api/happyHours',
  success: renderMultipleListings,
  error: renderMultipleError
  }); 

  //render 1 listing for show.html:
  // Get the ID from the URL 
  //i.e. get '/happyHours/0'
  var pathname = window.location.pathname;

  //replace '/happyHours/' with empty string so '/happyHours/0' --> '0'
  var id = pathname.replace("/happyHours/",""); 

  $.ajax({
    method: 'GET',
    url: '/api/happyHours/' + id,
    success: onHappyHourSuccess,
    error: onHappyHourError
  }); 
   

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
			success: onCreateSuccess,
			error: onError
		})
		$(this).trigger('reset');
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
			url: '/api/reviews/' + reviewId,
			data: data,
			success: onUpdateSuccess,
			error: onError
		});
	});



	//delete review

  	$('#review-list').on('click', '#delete-btn', function(e) {
	    console.log('clicked delete button to', '/api/reviews/'+$(this).attr('data-id'));

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

function onHappyHourSuccess(json){
  renderOneListing(json);
}

function onHappyHourError(error) {
  console.log('on happy hour error is', error);
}

function renderMultipleError(error) {
  console.log('render multiple error is', error);
}

function renderOneListing(listing) {
   console.log('review:', listing);
  var listingSource = $('#listing-template').html();
  // console.log(reviewSource);
  var listingTemplate = Handlebars.compile(listingSource);
  var listingHtml = listingTemplate(listing);
  $('#listing-section').append(listingHtml);
  // console.log(reviewHtml); 
}

function renderListing(happyHour) {
   console.log('happyHour:', happyHour);
  var happyHourSource = $('#happy-hour-template').html();
  console.log(happyHourSource);
  var happyHourTemplate = Handlebars.compile(happyHourSource);
  var happyHourHtml = happyHourTemplate(happyHour);
  $('#happy-hour-section').append(happyHourHtml);
  // console.log(reviewHtml); 
}

function renderMultipleListings(listings) {
  // console.log(listings);
  listings.forEach(function(listing) {
    renderListing(listing);
  });
}

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