"use strict";

/*throw our logic in a function called at window load*/
function array() {

    /*get the three numbers through prompts*/
    var number1 = parseInt(prompt("Give a number", ""));
    var number2 = parseInt(prompt("Give another number", ""));
    var number3 = parseInt(prompt("Give a number again", ""));

    var numbers = [number1, number2, number3];

    /*function to add the numbers together*/
    function addLoop(passed) {
        var num = 0;
        for (var i = 0; i < passed.length; i++) {
            num += passed[i];
        }
        return num;
    };

    var total = addLoop(numbers);

    /*call the adding loop*/
    document.getElementById("arrayTime").innerHTML = "The sum of all your numbers is " + total + ".";

}

/*call the main function when the window loads*/
//window.onload = array;