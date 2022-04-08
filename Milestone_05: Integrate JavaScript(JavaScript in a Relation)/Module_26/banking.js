
// Handle deposit button 

const depositButton = document.getElementById('deposit-submit')

const depositAmount = document.getElementById('deposit-amount');

const depositWarning = document.getElementById('deposit-warning');

const depositTotal = document.getElementById('deposit-total');

// Balance total
const totalAmount = document.getElementById('total-amount');

depositButton.addEventListener('click', function () {

    if (depositAmount.value <= 0) {
        depositWarning.innerText = "Please enter a valid amount";
    }
    else {
        // update deposit amount
        const previousDepositAmount = parseFloat(depositTotal.innerText);

        depositTotal.innerText = parseFloat(depositAmount.value) + previousDepositAmount;

        // update total amount/ account balance
        totalAmount.innerText = parseFloat(totalAmount.innerText) + parseFloat(depositAmount.value);


        // clear input field
        depositWarning.innerText = "";
        depositAmount.value = null;
    }


})



//  Handle withdrow button


const withdrowButton = document.getElementById('withdrow-submit');


const withdrowAmount = document.getElementById('withdrow-amount');


const withdrowWarning = document.getElementById('withdrow-warning');


const withdrowTotal = document.getElementById('withdrow-total');

withdrowButton.addEventListener('click', function () {
    // console.log('withdrow button clicked');
    // console.log(withdrowAmount.value);
    if (withdrowAmount.value <= 0) {
        withdrowWarning.innerText = "Please enter a valid amount";
    }
    else if (parseFloat(withdrowAmount.value) > parseFloat(totalAmount.innerText)) {
        withdrowWarning.innerText = "You haven't that much amount for Withdrow";
    }
    else {

        // update deposit amount
        const previousWithdrowAmount = parseFloat(withdrowTotal.innerText);

        withdrowTotal.innerText = parseFloat(withdrowAmount.value) + previousWithdrowAmount;

        // update total amount/ account balance
        totalAmount.innerText = parseFloat(totalAmount.innerText) - parseFloat(withdrowAmount.value);


        // clear input field
        withdrowWarning.innerText = "";
        withdrowAmount.value = null;
    }
})