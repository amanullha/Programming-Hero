

function inputToValue(inputId) {

    const amountText = document.getElementById(inputId);
    const amount = parseFloat(amountText.value);

    amountText.value = '';
    return amount;
}

function updateAmount(idName, newAmount) {
    const text = document.getElementById(idName);

    const prevAmount = parseFloat(text.innerText);
    text.innerText = prevAmount + newAmount
}

const totatAmount = () =>
    parseFloat(document.getElementById('total-amount').innerText);

function success(warningId, f) {

    const text = document.getElementById(warningId);
    if (f)
        text.innerText = "Process success";
    else
        text.innerText = "";
}


//deposit
const depositButton = document.getElementById('deposit-submit');


depositButton.addEventListener('click', function () {
    const depositAmount = inputToValue('deposit-amount');

    if (depositAmount > 0) {
        updateAmount('deposit-total', depositAmount);

        updateAmount('total-amount', depositAmount);

        success("deposit-warning", true);
    }
    else {
        success("deposit-warning", false);
    }

})

//withdrow

const withdrowButton = document.getElementById('withdrow-submit');


withdrowButton.addEventListener('click', function () {

    const withdrowAmount = inputToValue('withdrow-amount');

    if (withdrowAmount > 0 && totatAmount() >= withdrowAmount) {
        updateAmount('withdrow-total', withdrowAmount);

        updateAmount('total-amount', -withdrowAmount);

        success("withdrow-warning", true);
    }
    else {
        success("withdrow-warning", false);
    }

})



