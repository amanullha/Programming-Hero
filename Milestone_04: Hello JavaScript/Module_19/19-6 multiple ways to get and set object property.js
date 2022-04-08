console.log("\n");

var computerObject = {
    price: 0.0,
    ram: "5gb",
    rom: "228gb",
    processor: "QualCom snapeDragon"
}

console.log(computerObject.processor);
var processor = computerObject.processor;
console.log(processor);

// 3 way to access object property


var price = computerObject.price
console.log(" price : " + price);

// change object key value
computerObject.price = 500

price = computerObject.price
console.log(" price : " + price);

price = computerObject['price']
console.log("'price' : " + price);

var propertyName = "price"
price = computerObject[propertyName]
console.log(" propertyName : " + price + "\n\n");

// object copy
copyObj = computerObject
console.log(copyObj);




















console.log('\n');