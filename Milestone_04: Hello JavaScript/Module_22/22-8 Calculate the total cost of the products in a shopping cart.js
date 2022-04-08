const products = [
    { name: "laptop", price: 5600 },
    { name: 'shirt', price: 600, quantity: 5 },
    { name: 'phone', model: 'aman 2s', price: 60000, brand: 'aman' }
]

console.log(products);

let totalPrice = 0;

for (const product of products) {
    totalPrice += product.price
}
console.log("Total Price : ", totalPrice);