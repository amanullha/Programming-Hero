"use strict";
let cal;
cal = (a, b, c) => {
    if (c === 'add')
        return a + b;
    else
        return a - b;
};
console.log(cal(4, 5, 'addd'));
