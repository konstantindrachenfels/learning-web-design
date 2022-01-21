// parameters Object for our query
var parameters = {
  query: "Daniel+Kahneman", // what we want to search on giphy
  number: 3 // number of gifs we want
};

// url that returns JSON
var jsonURL = "https://www.goodreads.com/search?utf8=✓&q=" + parameters.query + "&search_type=books";

// the callback function to execute once we get JSON data
function myCallback( json ) {

  var gallery = $( "#gallery" );
  $.each( json.data, function( index, author ) {
      var img = $( "<img>" );
      img.attr( "src", author.images.fixed_height.url );
      gallery.append( img );
  } );
}

// now that everything is defined, we can request JSON data
$.getJSON( jsonURL, myCallback );





var parameters = {
  query: "beesandbombs", // what we want to search on giphy
  number: 3 // number of gifs we want
};

// url that returns JSON
var jsonURL = "https://givemegifs.glitch.me/?query=" + parameters.query + "&number=" + parameters.number;

// the callback function to execute once we get JSON data
function myCallback2( json ) {
  console.log( json ); // first we check the structure of the json in our browser's console and look for images urls

  // gifs are in an Array of Objects: "json.data"
  // let's log the number of gifs in our array and only the first Object to browse its structure more easily
  console.log( "length:" + json.data.length, json.data[ 0 ] );

  // from here we can see that our Object contains a property "images", that itself contains different properties
  // we can consult https://developers.giphy.com/docs/#rendition-guide to understand what they are used for.
  // I'm going to use "fixed_height" which is again an Object with finally an "url" property: the url for this first gif "fixed_height":
  console.log( "fixed_height url:" + json.data[ 0 ].images.fixed_height.url );
    // now that we know how to access the information we want (gifs urls)
  // let's add them to our page using "$.each()" see https://api.jquery.com/jQuery.each/#jQuery-each-array-callback :

  var gallery = $( "#gallery2" );
  $.each( json.data, function( index, gifObject ) {
      var img = $( "<img>" );
      img.attr( "src", gifObject.images.fixed_height.url );
      gallery.append( img );
  } );
}

// now that everything is defined, we can request JSON data
$.getJSON( jsonURL, myCallback2 );

  
  
  





var parameters = {
  query: "beesandbombs", // what we want to search on giphy
  number: 3 // number of gifs we want
};

// url that returns JSON
var jsonURL = "https://givemegifs.glitch.me/?query=" + parameters.query + "&number=" + parameters.number;

// the callback function to execute once we get JSON data
function myCallback3( json ) {
  console.log( json ); // first we check the structure of the json in our browser's console and look for images urls

  // gifs are in an Array of Objects: "json.data"
  // let's log the number of gifs in our array and only the first Object to browse its structure more easily
  console.log( "length:" + json.data.length, json.data[ 0 ] );

  // from here we can see that our Object contains a property "images", that itself contains different properties
  // we can consult https://developers.giphy.com/docs/#rendition-guide to understand what they are used for.
  // I'm going to use "fixed_height" which is again an Object with finally an "url" property: the url for this first gif "fixed_height":
  console.log( "fixed_height url:" + json.data[ 0 ].images.fixed_height.url );
    // now that we know how to access the information we want (gifs urls)
  // let's add them to our page using "$.each()" see https://api.jquery.com/jQuery.each/#jQuery-each-array-callback :

  var gallery = $( "#gallery3" );
  $.each( json.data, function( index, gifObject ) {
      var img = $( "<img>" );
      img.attr( "src", gifObject.images.fixed_height.url );
      gallery.append( img );
  } );
}

// now that everything is defined, we can request JSON data
$.getJSON( jsonURL, myCallback3 );
