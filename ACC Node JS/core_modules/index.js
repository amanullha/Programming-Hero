const { add, name } = require('./others')
// console.log(name);

// import third party module

const _ = require('underscore');



// // Node core modules

// const http = require('http');
// const server = http.createServer(function (req, res) {

//     //write code here
//     console.log("server is running");

// });

// server.listen(5000);

// console.log(add(9, 8));



// Node js Third party Module 

const ar = [
    {
        name: 'aman1',
        age: '25'
    },
    {
        name: 'aman2',
        age: '45'
    },
    {
        name: 'aman3',
        age: '15'
    },
    {
        name: 'aman4',
        age: '21'
    },
    {
        name: 'aman5',
        age: '10'
    },
]




const nameVals = _.max(ar, (ob) => ob.adge) ;
console.log(nameVals);












