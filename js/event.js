function getEvent() {

    FB.getLoginStatus(function(response) {
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