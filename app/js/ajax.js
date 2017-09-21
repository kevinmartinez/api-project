'use strict';
(function() {

  // using openweathermap API, awesome
  var url = "http://api.openweathermap.org/data/2.5/weather?";
  var apiKey = '714a8ed3da6acd2ef07ce2daf9392aab';
  // select form and form input field
  var $searchInput = $(".search__input");
  var $searchForm = $(".search");
  // select form search btn
  var $searchButton = $(".search__btn");

  // Submit input fields if clicked
  $searchButton.click(function(event) {
    console.log('clicked');

    // Test return from form inputs
    var $textReturn = $searchInput.serialize();
    var $formReturn = $searchForm.serialize();
    console.log("from searchInput(): " + $textReturn);
    console.log("from 'formInput()'" + $formReturn);

    // jQuery GET request send query and apikey to openweathermap API
    $.get(url + $formReturn + "&appid=" + apiKey).done(function(response) {
      //console.log(response);
      // Call the updateWeather function
      updateWeather(response);
    });
    event.preventDefault();
  })

  // Get successful response and update the UI
  function updateWeather(response) {
    var condition = response.weather[0].main; // Returns a string, e.g 'Clouds' from API
    var description = response.weather[0].description; // A description of the current condition from the API
    var icon = response.weather[0].icon; // Return a string of icon code that can be referenced with a url
    console.log("Description: " + description);
    // Calvin to Celsius
    // Call to temp key in the API returns Calvin, so  to calculate celcius we need to subtract 274.15
    var degC = response.main.temp - 274.15;
    var degCInt = Math.floor(degC); // Round degrees C to floor

    // Select the weather output test box :)
    var $weather = $("#weather");
    // Append test output to screen
    $weather.append("<p>" + degCInt + '&#176 C </p>' + '<p>' + condition + "Icon: " + "<img src=\"http://openweathermap.org/img/w/"+ icon + ".png\"" + "</p><br><p>" + description + "</p>");

    // Selecto the header
    // Change background according to API 'condition'
    var $headerSky = $(".header--sky");
    console.log(typeof condition); // check if string, do a better function?

    // if condition returns clouds change the headers background to change accordingly
    // TODO!
    if (condition === 'Clouds') {
      console.log('testing clouds');
      $headerSky.addClass("sky");
    } else if (condition === 'Clear') {
      console.log('testing clear');
      $headerSky.css("backgroundColor", "red");
    } else if (condition === '') {
    }
  }
  //var body = document.getElementsByTagName('body')[0];
  //console.log(condition);
})();
