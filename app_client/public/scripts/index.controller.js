
$(document).ready(function() {
	console.log('index.controller.js loaded!');

  // render multiple listings for homepage
  $.ajax({
  method: 'GET',
  url: '/api/happyHours',
  success: renderMultipleListings,
  error: renderMultipleError
  }); 

});


function renderMultipleError(error) {
  console.log('render multiple error is', error);
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
  console.log('renderMultListings in index.controller.js', listings);
  listings.forEach(function(listing) {
    renderListing(listing);
  });
}


function onError(error) {
	console.log('error is', error);
}

