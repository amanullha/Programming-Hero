// const bank = owner => {
//     let balance = 0;

//     return amount => {
//         balance += amount;
//         return balance;
//     }
// }

// const aman = bank("amanullha");

// console.log(aman(12));
// console.log(aman(12));



const bank = owner => {
    let balance = 0;

    return {
        deposit: amount => {
            balance += amount;
            return balance;
        },
        widthdow: amount => {
            balance -= amount;
            return balance;
        }
    }
}

const aman = bank("amanullha");

console.log(aman.deposit(5));
console.log(aman.deposit(5));
console.log(aman.deposit(5));

console.log(aman.widthdow(5));
console.log(aman.widthdow(5));
console.log(aman.widthdow(5));
console.log(aman.widthdow(5));

