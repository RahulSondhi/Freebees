var username;
var userLocation;

function getEvents() {

    getUserInfo();

    var EventSearch = require("facebook-events-by-location-core");
    var es = new EventSearch();

    es.search({
        "lat": 41.3163,
        "lng": 72.9223
    }).then(function (events) {
        console.log(JSON.stringify(events));
    }).catch(function (error) {
        console.error(JSON.stringify(error));
    });
}


function getUserInfo(){
    FB.api('/me?fields=id,name,location', function (response) {
        username = response["name"];
        userLocation = response.location.name;
    });

    console.log(username);
    console.log(userLocation);
}
