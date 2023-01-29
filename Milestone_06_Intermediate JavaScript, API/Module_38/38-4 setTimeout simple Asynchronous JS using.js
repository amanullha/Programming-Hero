function A() {
    console.log("from A");
}

console.log("pos 1");

// setTimeout(() => {
//     console.log("from arrow function");
// }, 50);

console.log("pos 2");

setTimeout(A(), 4000);