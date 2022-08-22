const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

const email = document.getElementById("email");
const errorEmail = document.getElementById("errorEmail");
const phone = document.getElementById("phone");
const errorPhone = document.getElementById("errorPhone");

const password = document.getElementById("password");
const errorPassword = document.getElementById("errorPassword");
const passwordConfirm = document.getElementById("passwordConfirm");
const errorPasswordConfirm = document.getElementById("errorPasswordConfirm");
const error = document.getElementsByClassName("error");

const submit = document.getElementById("button");

//hides error message until error arises
Array.from(error).forEach(function(element) {
    element.style.visibility = "hidden";
});


function passwordValidation() {
    if(password.value !== passwordConfirm.value) {
        errorPasswordConfirm.style.visibility = "visible";
    }else if(password.value == "" || passwordConfirm.value == "") {
        errorPasswordConfirm.style.visibility = "hidden";
    } else {
        errorPasswordConfirm.style.visibility = "hidden";
    }
}



passwordConfirm.addEventListener("input", function() {
    passwordValidation();
})



