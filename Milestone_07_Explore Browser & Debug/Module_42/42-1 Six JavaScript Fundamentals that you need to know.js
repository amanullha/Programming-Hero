const argument = (...arg) => {
    console.log("\nFrom argument funciton \n\n");
    console.log(arg);


}

const ar = [5, 6, 8, 4, 6, 8, 2, 4, 6];

console.log(ar);

const copyArray = [...ar, 5, 6, 9];

console.log(ar);
console.log(copyArray);

argument(ar);