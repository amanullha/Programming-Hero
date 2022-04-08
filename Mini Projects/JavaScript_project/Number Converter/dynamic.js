const input = document.getElementById('input');
const type = document.getElementById('type');



input.addEventListener('keyup', calculate)

function calculate() {

    let input_text = input.value;
    if (input_text.length == 0) return;

    let anyToDecmal = 0;

    if (type.value == 'Decimal') anyToDecmal = parseInt(input_text, 10)
    else if (type.value == 'Binary') anyToDecmal = parseInt(input_text, 2);
    else if (type.value == 'Octal') anyToDecmal = parseInt(input_text, 8);
    else if (type.value == 'Hex') anyToDecmal = parseInt(input_text, 16);
    

    showDisplay(anyToDecmal);
}

const showDisplay = decmalNbr => {

    let decimalNbr = decmalNbr;
    let binaryNbr = decmalNbr.toString(2);
    let octalNbr = decmalNbr.toString(8);
    let hexNbr = decmalNbr.toString(16).toUpperCase();


    setVal('decimal', decimalNbr);
    setVal('Binary', binaryNbr);
    setVal('Octal', octalNbr);
    setVal('Hex', hexNbr);
}

const setVal = (id, val) => {
    document.getElementById(id).innerText = val;
}

const changeSelect = () => {
    calculate();
}



