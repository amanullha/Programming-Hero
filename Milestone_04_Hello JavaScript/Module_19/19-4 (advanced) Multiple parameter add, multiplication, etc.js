function arithmeticOperation( val1,val2,val3) {
    
    var sum=val1+val2+val3;
    var sub=val1-val2-val3;
    var mul=val1*val2*val3;
    var div=val1/val2/val3;

    console.log("sum : "+sum);
    console.log("sub : "+sub);
    console.log("mul : "+mul.toFixed(3));
    console.log("div : "+ div.toFixed(5));
    return sum+sub+mul+div;
}

console.log("Operation sum: "+arithmeticOperation(5,3,5));