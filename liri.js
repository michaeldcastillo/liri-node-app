
/* GRADERS... I thought it meant to make it so that the app does ONLY ONE of the examples listed below. I now see that it means ANY ONE of the examples listed (as clarified in today's Saturday 3/2/19 class). I was only able to complete the Spotify example. -Mike Castillo

9. Make it so liri.js can take in one of the following commands:

   * `concert-this`

   * `spotify-this-song` <-- ONLY THIS ONE WORKS

   * `movie-this`

   * `do-what-it-says`
*/

/*
This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   If no song is provided then your program will default to "The Sign" by Ace of Base.
   */

//======================= SPOTIFY =====================//
require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);
//console.log("spotify = ", spotify);
//console.log("------------------------------");


var search = process.argv[2]; //"spotify-this-song"

var term = process.argv.slice(3).join(" "); //"I Want it That Way"


//by default if "spotify-this-song" is not provided, do this...
if (!search) {
   //provide instructions to the user
   console.log("\n"); //new blank line
   console.log("ERROR: Command line argument missing. Please specify 'spotify-this-song' (followed by a song title) when running this app.");
   console.log("EXAMPLE: node liri spotify-this-song 'song title'");
   console.log("\n"); //new blank line

} else if(!term) { //default to Ace of Base "The Sign"

      console.log(` 
      --------------------------------------
      search: ${search}     
      term: ${term} (not provided)
      --------------------------------------
      `);

      //For example: The query q=album:gold%20artist:abba&type=album returns only albums with the text “gold” in the album name and the text “abba” in the artist name.
      var queryUrl = 'https://api.spotify.com/v1/search?offset=0&limit=1&market=US&type=track&query=artist%3A%22Ace+of+Base%22%2Btrack%3A%22The+Sign%22';
                                                                                                 //=artist:"Ace of Base"+track:"The Sign"

      spotify.request(queryUrl).then(function(data) {
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Title: " + data.tracks.items[0].name);
            console.log("Album: " + data.tracks.items[0].album.name);
            console.log("Preview: " + data.tracks.items[0].preview_url);
            console.log("\n"); //new blank line

         }).catch(function(err) {
            console.error('Error occurred: ' + err);

      });

} else { 

      console.log(` 
      --------------------------------------
      search: ${search}     
      term: ${term} 
      --------------------------------------
      `);
      //base API URL... https://api.spotify.com/v1/search
      // q, type, market "US", limit, offset
      var queryUrl = 'https://api.spotify.com/v1/search?offset=0&limit=1&market=US&type=track&query=track:'+term; //"I Want it That Way"
                                                                                                
      spotify.request(queryUrl).then(function(data) {
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Title: " + data.tracks.items[0].name);
            console.log("Album: " + data.tracks.items[0].album.name);
            console.log("Preview: " + data.tracks.items[0].preview_url);
            console.log("\n"); //new blank line

         }).catch(function(err) {
            console.error('Error occurred: ' + err);

      });
}









