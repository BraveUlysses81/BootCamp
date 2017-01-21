"use strict";

var preparePage = function () {

    //declare an array of the images we want to swap
    var imageArray = ["background1.jpg", "background2.jpg", "background3.jpg"];

    var imageIndex = 0;

    //the function that cheks the image and rotates to the new one
    function imageSwap() {

        imageIndex++;
        if (imageIndex >= imageArray.length) {
            imageIndex = 0;
        }

        //access the body element and then modify the backround image to take
        //the url result of a function that rotates it.
        document.getElementsByTagName("body").style.backgroundImage = "url(imageArray[imageIndex])";

    }

    //assign the setInterval function, which takes our image swap function, to a var currentImage
    setInterval(imageSwap, 1000);

};

document.onload = preparePage();




//function rotateImage(time) {
//    /*get a holder on the image node that we want to isolate*/
//    var image = document.getElementById("imageRotate");
//
//    /*declare an array of the images we want to swap*/
//    var imageArray = ["background1.jpg", "background2.jpg", "background3.jpg"];
//
//    var imageIndex = 0;
//
//    /*the function that cheks the image and rotates to the new one*/
//    function imageSwap() {
//        image.setAttribute("src", imageArray[imageIndex]);
//        imageIndex++;
//        if (imageIndex >= imageArray.length) {
//            imageIndex = 0;
//        }
//    }
//
//    /*we run the function "imageSwap" every 3 seconds*/
//    setInterval(imageSwap, (time * 1000));
//}
//
///*the rotate function in affect with the passing of a parameter of x seconds*/
//window.onload = function () {
//    rotateImage(3)
//};