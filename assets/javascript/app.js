$(document).ready(function() {
  //ajax call for Yelp Fusion API with work around for CORS

  //api function
  //click function to call api function
  //api function has parameter called location
  //click function will pull user choice to var location
  //var location stores user choice input
  //location will be passed to the api function

  var userLocation = "NYC"; //variable for user input for their location

  var url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search`;
  var yelpKey =
    "Mkvzgj8Vt_NhJJHmP7s5yNOYpOB5P6NgLK6ev6O8HyrhXvhn9nisG3WvUovYSz1PHe3cqnhK8LUThY4AoXJ1O17QoBlD-S4IlovdzhUX2BB0j5RCO3kp4w-R1WknXXYx";

  $.ajax({
    type: "GET",
    url: url,
    headers: {
      Authorization: "Bearer " + yelpKey
    },
    data: {
      term: "brewery",
      location: userLocation
    }
  }).then(function(response) {
    console.log(response);

    // looping through all of the yelp businesses to display the name, address, and image
    for (var i = 0; i < response.businesses.length; i++) {
      var name = response.businesses[i].name;
      $("#yelpResult" + [i]).append(name);

      var yelpImage = $("<img>");
      yelpImage.attr("src", response.businesses[i].image_url);
      yelpImage.addClass("yelp-images");

      $("#yelp-image" + [i]).append(yelpImage);

      var address = response.businesses[i].location.address1;
      var city = response.businesses[i].location.city;
      var state = response.businesses[i].location.state;
      var zip = response.businesses[i].location.zip_code;

      $("#yelpAddress" + [i]).append(
        address + ", " + city + ", " + state + " " + zip
      );
    }
  });

  // Beers: Light beers, Sours, Ciders, Porters, IPA

  // Giphy API
  // $(document).on("click", "#cheersButton", function() {

  $("#cheersButton").on("click", function() {
    // })
    var idLite = "lz4APvJRdLxLBwZOG9";
    var queryUrl =
      "https://api.giphy.com/v1/gifs/" +
      idLite +
      "?api_key=2bWMtTcIEwQIgbcCIAOXnhGFI9XyklEZ";

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
    });
  });
});
