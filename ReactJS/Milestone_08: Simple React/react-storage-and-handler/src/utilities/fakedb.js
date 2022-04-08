// use local storage to manage card data

const addToLocal = (id) => {

    let shoppingCart = {};

    // get the quantity

    const storedCart = localStorage.getItem('shopping-cart');

    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }


    // add quantity
    const isHave = shoppingCart[id];

    if (isHave)
        shoppingCart[id] = parseInt(isHave) + 1;
    else
        shoppingCart[id] = 1;


    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromLocal = (id) => {

    let shoppingCart = {};

    // get the quantity

    const storedCart = localStorage.getItem('shopping-cart');

    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }


    // add quantity
    const isHave = shoppingCart[id];

    if (isHave)
        delete shoppingCart[id];

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}








export { addToLocal, removeFromLocal, deleteShoppingCart };