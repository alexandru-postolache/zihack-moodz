/**
 * Created by george.calcea on 10/28/2016.
 */

var DIFFERENCE_IN_MINUTES = 10;

var DEFAULT_THRESHOLD = 50;

var MoodStatus = function () {
    this.init();
};

MoodStatus.prototype.browserNotification = null;
MoodStatus.prototype.notificationWasShown = false;

MoodStatus.prototype.init = function () {
    this.browserNotification = new BrowserAlert();
    this.run();
};

MoodStatus.prototype.makeRequest = function (successCallback, errorCallback) {
    $.ajax({
        url: '/get-summary',
        success: function (emotionsData) {
            if (typeof successCallback == "function") {
                successCallback(emotionsData);
            }
        },
        error: function (data) {
            if (typeof errorCallback == "function") {
                errorCallback(data);
            }
        }
    });
};

MoodStatus.prototype.run = function () {
    var _this = this;
    setInterval(function () {
        _this.makeRequest(function (emotionData) {
                _this.successCallback(emotionData);
            },
            function (emotionData) {
                _this.errorCallback(emotionData);
            });
    }, 5000);
};

MoodStatus.prototype.successCallback = function (emotionData) {
    var data = [];
    for (var i in emotionData) {
        if (emotionData[i]['timeDifference'] <= DIFFERENCE_IN_MINUTES) {
            data.push(emotionData[i]);
        }
    }
    var angerMean = getMean(data, 'anger');
    var fearMean = getMean(data, 'fear');
    var sadnessMean = getMean(data, 'sadness');

    if ((angerMean >= DEFAULT_THRESHOLD || fearMean >= DEFAULT_THRESHOLD || sadnessMean >= DEFAULT_THRESHOLD) && !this.notificationWasShown) {
        this.browserNotification.showMessage("It's time for break!", "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTlXT0viASqdomAh_2bT-CDMmAirPhGmQjxfXkO6XjtM9HNNTmeFbSV-tQ");
        this.notificationWasShown = true;
        var _this = this;
        setTimeout(function(){
            _this.notificationWasShown = false;
        }, 50000);
    }
};

MoodStatus.prototype.errorCallback = function (emotionData) {

};

var moodStatusObject = new MoodStatus();