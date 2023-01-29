const phones = [
    { name: "samsung s5", price: 5000, camera: " 10 pxel", storage: "32 gb" },
    { name: "apple ", price: 400, camera: " 12 pxel", storage: "8 gb" },
    { name: "Oppo", price: 444, camera: " 10 pxel", storage: "64 gb" },
    { name: "Nokia", price: 50200, camera: " 16 pxel", storage: "8 gb" },
    { name: "Lanova", price: 888, camera: " 15 pxel", storage: "64 gb" },
    { name: "Huawei", price: 999, camera: " 11 pxel", storage: "32 gb" },
    { name: "One plus", price: 5522, camera: " 8 pxel", storage: "32 gb" }
]

let chepestPhone = "";

let chepestPhonePrice = phones[0].price;

for (let phone of phones) {
    // console.log(phone);

    if (chepestPhonePrice > phone.price) {
        chepestPhonePrice = phone.price;
        chepestPhone = phone.name;
    }

    // chepestPhonePrice=Math.min(phone.price,chepestPhonePrice)


}

console.log("Chepest phone name is : ", chepestPhone);
console.log("Chepest phone price is : ", chepestPhonePrice);