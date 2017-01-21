$("document").ready(function(){

    $("#signIn").submit(function(evt){

        evt.preventDefault();

        var check = /[a-zA-Z0-9\.]@\w+\.[a-zA-Z]{3,}$/;
        var attempt = $("#email").val();

        if (!(check.test(attempt))){
            $("#message").append("<p>You must enter a valid email</p>");
        }

        if( $("#password").val().length < 6){
            $("#message").append("<p>Your password is too short</p>");
        }
    });
});

/*var emailValid = function(email){
    var attemp = /^\w+@\w+\.[a-zA-Z]{3,}$/;
    return attemp.test(email);
};*/

/*$("document").ready(function(){
    $("#emailer").append("<p>The page is loaded</p>");
})*/

/*
var validateForm = function () {

    var mail = document.signIn.email.value;
    var pass = document.signIn.password.value;

    if (emailValid()) {
        alert("That is not an appropriate email");
        return false;
    }

    if (password.length < 6) {
        alert("That is not an appropriate password");
        return false;
    }

}

document.getElementById("submit").onclick = validateForm();*/
