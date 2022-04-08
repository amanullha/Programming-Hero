
function updateProductNumber(itemCountIncreaseBy, itemName) {
    let productInput = document.getElementById(itemName + "-number");
    let productNumber = parseInt(productInput.value);

    if (productNumber + itemCountIncreaseBy >= 0) {
        productNumber += itemCountIncreaseBy;
        productInput.value = productNumber;
    }
    // update case total

    const caseTotal = document.getElementById(itemName + '-total');
    if (itemName == "phone")
        caseTotal.innerText = productNumber * 1219;
    else
        caseTotal.innerText = productNumber * 59;

    calculateTotal();

}

function individualProductPrice(productName) {

    let price = document.getElementById(productName + "-total").innerText;
    return parseFloat(price);
}

// calculate total

function calculateTotal() {
    // debugger;

    const subTotal = document.getElementById('sub-total');
    const taxTotal = document.getElementById('tax-total');
    const totalPrice = document.getElementById('total');

    // calculate total cost
    let totalSubTotal = individualProductPrice('phone') + individualProductPrice('case');
    subTotal.innerText = totalSubTotal.toFixed(2);

    // calculate tax
    let totalTaxTotal = (5 / 100) * totalSubTotal;
    taxTotal.innerText = totalTaxTotal.toFixed(2);

    // updata total cost with cost+tax
    totalPrice.innerText = (totalSubTotal + totalTaxTotal).toFixed(2);

}

// phone
document.getElementById('phone-minus').addEventListener('click', function (params) {

    updateProductNumber(-1, "phone");

})
document.getElementById('phone-plus').addEventListener('click', function (params) {

    updateProductNumber(1, "phone");

})

// case

document.getElementById('case-minus').addEventListener('click', function (params) {

    updateProductNumber(-1, "case");

})
document.getElementById('case-plus').addEventListener('click', function (params) {

    updateProductNumber(1, "case");

})