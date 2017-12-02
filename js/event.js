function getEvents() {

    FB.getLoginStatus(function(response) {
        console.log("getEvents")
        if (response.status === 'connected') {
            FB.api(
                "/{event-id}",
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);
                    }
                }
            );
        }
        }
    );
}