"use strict";

/*declare a function to run on when the window loads*/
var mathProg = function () {

    /*get three variables from prompts*/
    var name = prompt("Tell me your name", "");
    var number1 = parseInt(prompt("Give me a number", ""));
    var number2 = parseInt(prompt("Give me another number", ""));

    /*our function to diplay the greeting with the name variable*/
    var greet = function (person) {
        if (person != "") {
            document.getElementById("maths").innerHTML = "You are going to have a wonderful day, " + person + ".";
        } else {
            document.getElementById("maths").innerHTML = "Please enter your name";
        }
    };


    /*call the greet function*/
    greet(name);

    /*a function to add two numbers together*/
    var addNum = function (num1, num2) {
        if (num1 == NaN) {
            document.getElementById("maths").innerHTML = "Your first number is not a number";
        }
        if (num2 == NaN) {
            document.getElementById("maths").innerHTML = "Your second number is not a number";
        } else {
            document.getElementById("maths").innerHTML = "By the way, the sum of your numbers is " + (num1 + num2) + ".";
        }
    };

    document.getElementById("maths").onclick = function () {
        addNum(number1, number2)
    };

};

/*running the script when the window opens*/
window.onload = mathProg;