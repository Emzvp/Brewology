$(document).ready(function() {

//ajax call for Yelp Fusion API with work around for CORS

var url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search`;
var yelpKey =
  'Mkvzgj8Vt_NhJJHmP7s5yNOYpOB5P6NgLK6ev6O8HyrhXvhn9nisG3WvUovYSz1PHe3cqnhK8LUThY4AoXJ1O17QoBlD-S4IlovdzhUX2BB0j5RCO3kp4w-R1WknXXYx';

$.ajax({
  type: "GET",
  url: url,
  headers: {
    Authorization: "Bearer " + yelpKey
  },
  data: {
    term: "brewery",
    location: "NYC" //variable for user input for their location
  }

}).then(function(response) {
  // console.log(response.businesses[0].name);
  console.log(response);

  $("#yelpResult0").append(response.businesses[0].name);
  $("#yelpResult1").append(response.businesses[1].name);
  $("#yelpResult2").append(response.businesses[2].name);
  $("#yelpResult3").append(response.businesses[3].name);

  // $("#yelpAddress0").append(response.businesses[0].location.address1, location.city, location.state, location.zip_code);
  // $("#yelpAddress0").append(response.businesses[0].location.display_address);
  // $("#yelpAddress1").append(response.businesses[1].location.display_address);
  // $("#yelpAddress2").append(response.businesses[2].location.display_address);
  // $("#yelpAddress3").append(response.businesses[3].location.display_address);

  var address1 = response.businesses[0].location.address1;
  var city = response.businesses[0].location.city;
  var state = response.businesses[0].location.state;
  var zip = response.businesses[0].location.zip_code

    $("#yelpAddress0").append(address1 + ", " + city + ", " + state + " " + zip)
    
    $("#yelpAddress1").append(response.businesses[1].location.address1 + ", " + response.businesses[1].location.city
     + ", " + response.businesses[1].location.state + " " + response.businesses[1].location.zip_code);

    $("#yelpAddress2").append(response.businesses[2].location.address1 + ", " + response.businesses[2].location.city
     + ", " + response.businesses[2].location.state + " " + response.businesses[2].location.zip_code);

    $("#yelpAddress3").append(response.businesses[3].location.address1 + ", " + response.businesses[3].location.city
     + ", " + response.businesses[3].location.state + " " + response.businesses[3].location.zip_code);

    var yelpImage0 = $("<img>");
    yelpImage0.attr("src", response.businesses[0].image_url)
    $("#yelp-image0").append(yelpImage0)

    var yelpImage1 = $("<img>");
    yelpImage1.attr("src", response.businesses[1].image_url)
    $("#yelp-image1").append(yelpImage1)

  // $("#yelpAddress0").append(response.businesses[0].location.address1 + " " + response.businesses[0].location.city
  //  + " " + response.businesses[0].location.state + " " + response.businesses[0].location.zip_code);
  // $("#yelpAddress0").append(response.businesses[0].location.city);
  // $("#yelpAddress0").append(response.businesses[0].location.state);

  console.log(response.businesses[0].location.address1)
  console.log(response.businesses[0].location.city)


   for (var i = 0; i < 4; i++) {
    console.log(response.businesses[i].name);
    console.log(response.businesses[i].location)
   }
  
});

// Beers: Light beers, Sours, Ciders, Porters, IPA


// Giphy API
// $(document).on("click", "#cheersButton", function() {

$("#cheersButton").on("click", function() {

// })  
  var idLite= 'lz4APvJRdLxLBwZOG9';
  var queryUrl = "https://api.giphy.com/v1/gifs/" + idLite + "?api_key=2bWMtTcIEwQIgbcCIAOXnhGFI9XyklEZ"
  
  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function(response) {
    var results = response.data.images.fixed_height.url;
    var gifImage = $("<img>");
    gifImage.attr("src", results);
    gifImage.attr("alt", "Cheers");
    console.log(results);
    $("#gif-image").prepend(gifImage);
  })

})

});
