"use strict";

/*var colorIndex;

var clock = function (colorIndex) {

    var now = new Date();
    var hour = now.getHours();
    var mins = now.getMinutes();
    var secs = now.getSeconds();

    if (mins < 10) {
        mins = "0" + mins;
    }

    if (secs < 10) {
        secs = "0" + mins;
    }

    var print = hour + ":" + mins + ":" + secs;

    //assign the "clock" header the value of the result of the time function   
    document.getElementById("clock").innerHTML = print;

    //declare an array of the colors we want to use
    var colorArray = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'];

    //the function that rotates the background color
    function BGColor() {
        if (colorIndex == null) {
            colorIndex = 0;
        }
        document.body.style.backgroundColor = colorArray[colorIndex];
        /!*document.getElementsByTagName("body").style.backgroundColor = colorArray[colorIndex];*!/
        colorIndex++;
        if (colorIndex >= colorArray.length) {
            colorIndex = 0;
        }
    };

    BGColor();
    return colorIndex;
};

setInterval(clock, 1000);*/


/*var colorIndex = function (colorIndex) {
    if (colorIndex == null) {
        colorIndex = 0
    } else colorIndex += 1;
    return colorIndex;
}*/

/*assign the setInterval function, which takes our clock function, and in it
our BGColor function, to a one second interval*/



//var preparePage = function () {

var colorIndex = 0;

    var clocker = function () {

            var now = new Date();
            var hour = now.getHours();
            var mins = now.getMinutes();
            var secs = now.getSeconds();

            if (mins < 10) {
                mins = "0" + mins;
            }

            if (secs < 10) {
                secs = "0" + mins;
            }

            var print = hour + ":" + mins + ":" + secs;

        document.getElementById("clock").innerHTML = print;

        //declare an array of the colors we want to use
        var colorArray = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'];

            colorIndex += 9;
            if (colorIndex >= colorArray.length) {
                colorIndex = 0;
            }

        //the function that rotates the background color
        document.body.style.backgroundColor = colorArray[colorIndex];

        //assign the "clock" header the value of the result of the time function   
        //document.getElementById("clock").innerHTML = time();

        //access the body element and then modify the color to take
        //the result of a function that rotates it.

    }

    //assign the setInterval function, which takes our image swap function, to a var currentImage
    setInterval(clocker, 1000);

//document.onload = preparePage();