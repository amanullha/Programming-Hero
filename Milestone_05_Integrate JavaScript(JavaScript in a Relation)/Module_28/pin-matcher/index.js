
const tryLeft = document.getElementById('try-left');

// button disable after 3 tryed

function buttonDisable(flag) {
    document.getElementById('submit-btn').disabled = flag;

}

// generate pin

function generatePin() {

    let pin = "";
    let pinLen = 4;
    while (pinLen--) {
        const digit = (Math.random() * 100) % 10;
        pin += parseInt(digit);
    }
    return pin;
}

const generatePinButton = document.getElementById('generate-pin');
const generatePinDisplay = document.getElementById('generate-pin-display');

generatePinButton.addEventListener('click', () => {
    generatePinDisplay.value = generatePin();
    errorMessage(false, false);
    tryLeft.innerText = 3;
    buttonDisable(false);
})



// // update user input field after typed numbers

// const numbers = document.querySelectorAll(".button");
// const userInput = document.getElementById('user-input');

// for (const number of numbers) {
//     number.addEventListener('click', function (event) {

//         const text = number.innerText;

//         if (text == 'C') userInput.value = "";

//         else if (text == '<') {
//             let updatedText = userInput.value;
//             updatedText = updatedText.slice(0, updatedText.length - 1);
//             // updated iput text without last index 
//             userInput.value = updatedText;
//         }
//         else {
//             userInput.value += text;
//         }
//     })
// }




// update user input field after typed numbers with bubble(parent node)

userInput = document.getElementById('user-input');

document.getElementById('key-pad').addEventListener('click', function (event) {

    const text = event.target.innerText;

    if (text == 'C') userInput.value = "";

    else if (text == '<') {
        let updatedText = userInput.value;
        updatedText = updatedText.slice(0, updatedText.length - 1);
        // updated iput text without last index 
        userInput.value = updatedText;
    }
    else if (text != "Submit") {
        userInput.value += text;
    }
})


// error Message display

function errorMessage(display, isSuccess) {

    const successMessage = document.getElementById("notify-success");

    const failError = document.getElementById("notify-falid");
    if (!display) {
        successMessage.style.display = "none";
        failError.style.display = "none";
    }
    else if (isSuccess) {
        successMessage.style.display = "block";
        failError.style.display = "none";
    }
    else {
        successMessage.style.display = "none";
        failError.style.display = "block";
    }

}


// veryfy the pin with user input

function pinVerify() {


    if (userInput.value == generatePinDisplay.value) {

        errorMessage(true, true);
    }
    else {

        errorMessage(true, false);
        tryLeft.innerText = parseInt(tryLeft.innerText) - 1;
        if (parseInt(tryLeft.innerText) <= 0) {
            buttonDisable(true);

        }
    }
}

document.getElementById('submit-btn').addEventListener('click', function () {
    pinVerify()
})



