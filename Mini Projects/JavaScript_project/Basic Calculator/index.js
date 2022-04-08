let screen = document.getElementById('screen');

let buttons = document.querySelectorAll('button');
let screenValue = "";

for (let button of buttons) {
    button.addEventListener('click', function (event) {


        let buttonText = event.target.innerText;
        console.log(buttonText);

        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;

        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;

        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            screenValue = screen.value;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }


    })
}