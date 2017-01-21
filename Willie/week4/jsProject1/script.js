"use strict";

/*create a function that we will call when the window loads*/
function greetings() {
    /*declare variables to get from prompts*/
    var name = prompt("Please enter your name", "");
    var snack = prompt("Please enter your name", "");
    var drink = prompt("Please enter your name", "");

    /*quick data sanity checks*/
    if (name != "" && snack != "" && drink != "") {
        document.getElementById("greeting").innerHTML = "Hi there " + name + ", it seems like you enjoy eating " + snack + " and drinking " + drink + "!";
    } else {
        document.getElementById("greeting").innerHTML = "Please enter all the fields";
    }
}

/*the actual running of the script*/
window.onload = greetings;