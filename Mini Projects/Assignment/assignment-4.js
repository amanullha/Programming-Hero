//Problem: 01

function anaToVori(ana) {

    //check Wrong parameter types
    if (typeof (ana) != 'number') return "Input type does not exist!";

    // used "parseFloat()" for not divisibled number like 1-15,17-31,33-63
    else return parseFloat(ana / 16.0);
}

console.log(anaToVori(16));


//Problem: 02

function pandaCost(quantityOfSinggara, quantityOfSumucha, quantityOfJilapi) {

    // check Wrong parameter types
    if (typeof (quantityOfSinggara) != 'number' || typeof (quantityOfSumucha) != 'number' || typeof (quantityOfJilapi) != 'number') return "Input type does not exist!";

    // Check negative Quantity
    if (quantityOfSinggara < 0 || quantityOfSumucha < 0 || quantityOfJilapi < 0)
        return "Input type does not exist!";

    const perSinggaraPrice = 7;
    const perSumuchaPrice = 10;
    const perJilapiPrice = 15;

    let total = (perSinggaraPrice * quantityOfSinggara) + (perSumuchaPrice * quantityOfSumucha) + (perJilapiPrice * quantityOfJilapi);
    return total;

}
console.log(pandaCost(3, 4, 5));

//Problem: 03

function picnicBudget(numberOfStudents) {

    //check Wrong parameter types and Check negative Quantity
    if (typeof (numberOfStudents) != 'number' || numberOfStudents < 0) return "Input type does not exist!";

    let totalCost = 0;

    if (numberOfStudents >= 100) {
        numberOfStudents -= 100;
        totalCost += (100 * 5000);
    }
    else {
        totalCost += (numberOfStudents * 5000);
        numberOfStudents = 0;
    }
    if (numberOfStudents >= 100) {
        numberOfStudents -= 100;
        totalCost += (100 * 4000);
    }
    else {
        totalCost += (numberOfStudents * 4000);
        numberOfStudents = 0;
    }
    if (numberOfStudents > 0) {

        totalCost += (numberOfStudents * 3000);
    }


    return totalCost;

}

console.log(picnicBudget(205));


//Problem: 04

function oddFriend(ar) {

    if (!ar.length) return "Invalid!!!   Enter your friends Name please again!";
    for (x of ar) if (x.length & 1) return x;
}

console.log(oddFriend(["kudo", "alu", "laoo", "hubla", "baula"]));







