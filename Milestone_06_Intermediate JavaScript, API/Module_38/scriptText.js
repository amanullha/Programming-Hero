// click "Run and Debug then see browser console into the vs code"
console.log("1111");

setTimeout(() => { console.log("hii") }, 500);

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));


console.log("222");
console.log("333");
console.log("334");
