// input validation section start

const inputList = document.getElementsByTagName('input');
var due = false;

for (const typeingInput of inputList) {
    typeingInput.addEventListener('keyup', function
        (event) {
        const clickedId = event.target.id;

        if (clickedId == 'income-input') {

            inputCheck(clickedId, "income-check");

        }
        else if (clickedId == 'rent-input') {
            inputCheck(clickedId, "rent-check");

        }
        else if (clickedId == 'foods-input') {
            inputCheck(clickedId, "foods-check");

        }
        else if (clickedId == 'clothes-input') {
            inputCheck(clickedId, "clothes-check");

        }
        else if (clickedId == 'utilities-input') {
            inputCheck(clickedId, "utilities-check");

        }



    })
}



function inputCheck(inputId, checkId) {


    const inputField = document.getElementById(inputId);
    const inputCheckMark = document.getElementById(checkId)
    while (inputCheckMark.firstChild) {
        inputCheckMark.removeChild(inputCheckMark.lastChild);
    }


    if ((parseFloat(inputField.value)) < 0 || inputField.value.length == 0) {
        // console.log("worng");
        const wrongIcon = document.createElement('i');
        wrongIcon.classList.add("fa");
        wrongIcon.classList.add("fa-times");
        wrongIcon.style.fontSize = "36px";
        wrongIcon.style.color = "red";
        wrongIcon.style.marginLeft = "5px";
        wrongIcon.title = "Your have to enter a number \n between 0 to infinify";

        inputCheckMark.append(wrongIcon);

    }
    else {
        // console.log("right");
        const wrongIcon = document.createElement('i');
        wrongIcon.classList.add("fa");
        wrongIcon.classList.add("fa-check");
        wrongIcon.style.fontSize = "30px";
        wrongIcon.style.color = "green";
        wrongIcon.style.marginLeft = "5px";

        inputCheckMark.append(wrongIcon);
    }
}
// input validation section ends 


// expanse calculation start 


const expenseCalculateButton = document.getElementById('expense-calculate-button');

function totalExpenses() {
    let sum = 0;
    for (const input of inputList) {
        if (input.id != "income-input" && input.id != "saveing-input")
            sum += parseFloat(input.value);
    }
    return sum.toFixed(2);
}

function isAllValidInput() {

    const checkMarkLists = document.getElementsByClassName("isValidInput");
    let greenCount = 0;
    for (const ck of checkMarkLists) {
        if (ck.lastChild && (ck.lastChild.style)) {
            if (ck.lastChild.style.color == 'green') greenCount++;
        }
    }
    return greenCount == checkMarkLists.length;
}
function isExpenseWarningShowing(isShow, warningId) {
    const expenseWarning = document.getElementById(warningId);
    if (isShow)
        expenseWarning.classList.add("invisible");
    else
        expenseWarning.classList.remove("invisible");
}

expenseCalculateButton.addEventListener('click', function
    (params) {

    if (isAllValidInput()) {
        const totalExp = totalExpenses();

        document.getElementById('total-expense').innerText = totalExp;

        const totalBalance = parseFloat(document.getElementById('income-input').value) - totalExp;


        if (totalBalance < 0) {

            savingWarning.innerText = "You can't save the money. \nYou are already in debt";
            due = true;
        }
        else {
            savingWarning.innerText = " ";
            due = false;

        }


        document.getElementById('total-balance').innerText = totalBalance;

        isExpenseWarningShowing(true, "expense-warning")

    }
    else {

        isExpenseWarningShowing(false, "expense-warning")

    }




})


// expanse calculation ends



// Saving part js start



const savingInput = document.getElementById('saveing-input');
const savingWarning = document.getElementById('saving-warning');
savingInput.addEventListener('keyup', function
    (params) {

    let savingInputVal = parseFloat(savingInput.value);

    if (savingInputVal < 0 || savingInputVal > 100 || savingInput.value.length == 0) {
        savingWarning.innerText = "Please Enter a number 0 to 100";
    }
    else {
        savingWarning.innerText = " ";
    }

});

const savingButton = document.getElementById('saving-button');






savingButton.addEventListener('click', function
    (params) {

    // check the due is clear or not .means income is greater than expense or not. expense>income=due=true(have some due) else not.

    if (!due) {

        const totalBalance = document.getElementById('total-balance');

        const incomeBalance = document.getElementById('income-input');

        let parcentage = parseFloat(savingInput.value);

        let totalSaving = (parcentage / 100) * parseFloat(incomeBalance.value);


        if (parseFloat(totalBalance.innerText) < totalSaving) {


            savingWarning.innerText = `You can't save ${savingInput.value} of your income\nTry less`;

            document.getElementById('remaining-balance').innerText = totalBalance.innerText;

        }
        else {

            savingWarning.innerText = " ";
            document.getElementById('total-saving').innerText = (totalSaving).toFixed(2);

            document.getElementById('remaining-balance').innerText = (parseFloat(totalBalance.innerText) - totalSaving).toFixed(2);


        }
    }
})










// Saving part js ends