// function callbackfunction(name, funParams) {
//     console.log(name);
//     console.log(funParams);

//     funParams(name);

// }

// function demoFun(name) {

//     console.log("Demo function Name : " + name);
// }

// callbackfunction('aman', demoFun);




function callbackfunction(name, funParams) {
    console.log(name);
    console.log(funParams);

    funParams(name);

}

function demoFunA(name) {

    console.log("Demo function Name : " + name);
}
function demoFunB(name) {

    console.log("Demo function Name : " + name);
}

callbackfunction('aman', demoFunA);
callbackfunction('ullha', demoFunB);