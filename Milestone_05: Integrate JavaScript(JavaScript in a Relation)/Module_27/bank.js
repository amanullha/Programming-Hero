const submitButton = document.getElementById('login-submit');


submitButton.addEventListener('click', function () {

    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const warning = document.getElementById('warning');
    if (email.value.length <= 0 || password.value.length <= 0) {

        warning.innerText = "Please Enter valid email and password";
    }
    else if (email.value == "admin@gmail.com" || password.value == "admin") {
        warning.innerText = "";
        email.value = "";
        password.value = "";

        // go ot banking.html page
        window.location.href = 'banking.html';
    }
    else {
        warning.innerText = "Invalid Email and Password";

    }


});


