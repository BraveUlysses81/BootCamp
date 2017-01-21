"use strict";

var validateForm = function () {

    var mail = document.signIn.email.value;
    var pass = document.signIn.password.value;

    if (email.length < 8) {
        alert("That is not an appropriate email");
        return false;
    }

    if (pass.length < 6) {
        alert("That is not an appropriate password");
        return false;
    }

}

document.getElementById("submit").onclick = validateForm();




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