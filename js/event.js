var username;
var userLocation;

function getEvents() {

    getUserInfo();

    window.setTimeout(function(){
        getUserInfo();
    }, 2000);

}


function getUserInfo(){
    FB.api('/me?fields=id,name,location', function (response) {
        username = response["name"];
        userLocation = response;
    });

    console.log(username);
    console.log(userLocation);
}
