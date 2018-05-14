/**
 * Created by george.calcea on 10/28/2016.
 */

var BrowserAlert = function () {
    // request permission on page load
    document.addEventListener('DOMContentLoaded', function () {
        if (!Notification) {
            alert('Desktop notifications not available in your browser. Try Chromium.');
            return;
        }

        if (Notification.permission !== "granted")
            Notification.requestPermission();
    });
};

BrowserAlert.prototype.showMessage = function (message, iconUrl) {

        if (Notification.permission !== "granted")
            Notification.requestPermission();
        else {
            var notification = new Notification('Mood Alert!', {
                icon: iconUrl,
                body: message
            });

            // notification.onclick = function () {
            //     window.open("http://stackoverflow.com/a/13328397/1269037");
            // };
        }
};


var obj = new BrowserAlert();