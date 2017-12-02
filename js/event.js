var username;
var userLocation;

function getEvents() {

    FB.getLoginStatus(function(response) {
        console.log("getEvents")
        if (response.status === 'connected') {
            FB.api('/me?fields=id,name,location', function(response) {
                username = response["name"];
                userLocation = response.location.name;
            });
        }
        }
    );

    console.log(username);
    console.log(userLocation);
}