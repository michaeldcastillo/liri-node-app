
//node liri.js spotify-this-song '<song name here>'
//node liri.js spotify-this-song,"I Want it That Way"

/*
This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   If no song is provided then your program will default to "The Sign" by Ace of Base.

You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.

To retrieve the data that will power this app, you'll need to send requests using the `axios` package to the Bands in Town, Spotify and OMDB APIs. You'll find these Node packages crucial for your assignment.

   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   * [Axios](https://www.npmjs.com/package/axios)

     * You'll use Axios to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

   * [Moment](https://www.npmjs.com/package/moment)

   * [DotEnv](https://www.npmjs.com/package/dotenv)
*/

//"axios": "^0.18.0",
//"dotenv": "^6.2.0",
//"moment": "^2.24.0",
//"node-spotify-api": "^1.0.7"

//======================= SPOTIFY =====================//
require("dotenv").config();

var keys = require("./keys.js");
//console.log("------------------------------");
//console.log("keys = ", keys);
//console.log("------------------------------");
//console.log("keys.spotify = ", keys.spotify);
//console.log("------------------------------");

var Spotify = require("node-spotify-api");
//console.log("Spotify = ", Spotify);
//console.log("------------------------------");

var spotify = new Spotify(keys.spotify);
console.log("spotify = ", spotify);
console.log("------------------------------");

//??? need to figure out if this is the right way to pass in the user input ???
//var thirdNodeArgument = process.argv[2]; //3rd argument passed into liri.js

//GET Search Endpoint = https://api.spotify.com/v1/search
//??? need to figure out the correct endpoint format for the app requirements ???
//var queryUrl = "https://api.spotify.com/v1/search" + thirdNodeArgument;

var queryUrl = "https://api.spotify.com/v1/search?query=I+Want+it+That+Way&type=track&offset=0&limit=1"

spotify.request(queryUrl).then(function(data) {
   //console.log(data);
   console.log(data.tracks.items[0].artists[0]);
}).catch(function(err) {
   console.error('Error occurred: ' + err);
});







//pass an object with 2 values ("track", "song title") into the search method
/*
spotify.search({type:'track', query: 'I Want it That Way'}).then(function(response) {
      //console.log("response = ", response);
      console.log(response.tracks.items[0]);
   }).catch(function(err) {
   console.log(err);
});
*/

/* response...

{ tracks: 
   { href: 'https://api.spotify.com/v1/search?query=I+Want+it+That+Way&type=track&offset=0&limit=20', items: 
      [ [Object],[Object],[Object],[Object],[Object],[Object],[Object],[Object],[Object],[Object],[Object],[Object],[Object],[Object],[Object],[Object],[Object],[Object],[Object],[Object] ], limit: 20, next: 'https://api.spotify.com/v1/search?query=I+Want+it+That+Way&type=track&offset=20&limit=20', offset: 0, previous: null, total: 545 
   } 
}

response.tracks
response.tracks.href
response.tracks.items[0]
response.tracks.limit
response.tracks.next
response.tracks.offset
response.tracks.previous
response.tracks.total

*/


   

















/* ======================= AXIOS =====================//
var axios = require("axios");

var thirdNodeArgument = process.argv[2]; //passed into liri.js

// Then run a request with axios to the API with the query string search variable specified
var queryUrl = "http://www.omdbapi.com/?t=" + thirdNodeArgument + "&y=&plot=short&apikey=trilogy";
console.log("queryUrl = " + queryUrl);

axios.get(queryUrl).then(function(response) {
    console.log("response = ", response);
  }
);
*/

//======================= MOMENT =====================//
//var Moment = require("moment");

