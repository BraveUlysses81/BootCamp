"use strict";

//declare an array of the images we want to swap
var imageArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

var imageIndex = 0;

/*var image = document.getElementsByTagName("img");*/
var image = document.getElementById("shuffle");

//the function that moves the image forward one array index
var imageForward = function () {
    //image.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
    image.setAttribute("src", imageArray[imageIndex]);
};

//the function that moves the image back one array index
function imageBack() {
    //image.setAttribute("src", imageArray[imageIndex]);
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = (imageArray.length - 1);
    }
    image.setAttribute("src", imageArray[imageIndex]);
}

document.getElementById("forward").onclick = function(){imageForward()};

document.getElementById("back").onclick = imageBack();