var UI = require('ui');
var ajax = require('ajax');

// Construct URL
var cityName = 'San Francisco';
var myAPIKey = '0ebd9329ed0b36321894d0934857f781';
var URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + myAPIKey;

// Make the request
ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    // Success!
    console.log('Successfully fetched weather data!');
    
    //extract data
    var location = data.name;
    var temperature = Math.round(data.main.temp - 273.15);
    console.log(temperature);
    temperature = Math.round(temperature * 1.8) + 32.0;
    console.log("Farenheight: ", temperature);
    
    // Always upper-case first letter of description
    var description = data.weather[0].description;
    description = description.charAt(0).toUpperCase() + description.substring(1);
    
    // Apply to UI
    card.subtitle(location + ', ' + temperature);
    card.body(description);
  },
  function(error) {
    // Failure!
    console.log('Failed fetching weather data: ' + error);
  }
);


// Create a Card with title and subtitle
var card = new UI.Card({
  title:'Weather',
  subtitle:'Fetching...'
});

// Display the Card
card.show();
