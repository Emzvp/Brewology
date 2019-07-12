var url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search`;
var key =
  "Mkvzgj8Vt_NhJJHmP7s5yNOYpOB5P6NgLK6ev6O8HyrhXvhn9nisG3WvUovYSz1PHe3cqnhK8LUThY4AoXJ1O17QoBlD-S4IlovdzhUX2BB0j5RCO3kp4w-R1WknXXYx";

$.ajax({
  type: "GET",
  url: url,
  headers: {
    Authorization: "Bearer " + key
  },
  data: {
    location: "NYC", //variable for random locations
    term: "brewery"
  }
}).then(function(response) {
  console.log(response);
  //create a variable to temporarily store a variable
  //onclick function so that response appears only when viewer clicks on the zip code or finishes the personality test
});