

// use local storage to manage cart data
const addToLocalStorageDb = id => {
    let booksCart = getStoredCart();


    // add quantity
    const quantity = booksCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        booksCart[id] = newQuantity;
    }
    else {
        booksCart[id] = 1;
    }

    localStorage.setItem('books-cart', JSON.stringify(booksCart));
}


const getStoredCart = () => {

    let booksCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('books-cart');
    if (storedCart) {
        booksCart = JSON.parse(storedCart);
    }

    return booksCart;
}



const removeFromLocalStorageDB = id => {
    const storedCart = localStorage.getItem('books-cart');
    if (storedCart) {
        const booksCart = JSON.parse(storedCart);
        if (id in booksCart) {
            delete booksCart[id];
            localStorage.setItem('books-cart', JSON.stringify(booksCart));
        }
    }
}

const deleteBookCart = () => {
    localStorage.removeItem('books-cart');
}

export {
    addToLocalStorageDb,
    removeFromLocalStorageDB,
    deleteBookCart,
    getStoredCart
}