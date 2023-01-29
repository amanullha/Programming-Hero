function factorial(n) {
    if (n<=2)return n;

    return n * factorial(n - 1)

}

// console.log("factorial : ", factorial(5));
const factval=factorial(5);
console.log(factval);

