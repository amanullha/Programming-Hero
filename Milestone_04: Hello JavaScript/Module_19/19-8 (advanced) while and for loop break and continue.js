console.log("\n");




var i = 0;
while (i < 15) {
    console.log("i " + (i++));

}

var arr = [];
for (var i = 0; i < 10; i++) {
    arr.unshift(i);
}
console.log("len : " + arr.length);

var l = 0;
console.log("\narr: ");
while (l < arr.length) {
    console.log(arr[l++]);

}

if (arr.indexOf(34) == -1) {
    console.log("\n not found");
}
 if (arr.indexOf(5) > 0) {
    console.log("\n found");
}