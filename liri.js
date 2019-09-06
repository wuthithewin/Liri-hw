require("dotenv").config();

var axios = require('axios');
var keys = require("./key.js");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
function spotifyThis() {
    spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data);
    });
}
function concertThis(artist) {
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    axios.get(queryURL)
        .then(function (response) {
            // * Name of the venue

            //     * Venue location

            //         * Date of the Event(use moment to format this as "MM/DD/YYYY")
            console.log(response)
            console.log("Name of the venue: ", response.data[0].venue.name, response.data[0].datetime);
        })
}
concertThis("Iron Maiden")