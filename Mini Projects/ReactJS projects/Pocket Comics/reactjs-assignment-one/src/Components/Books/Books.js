import React, { useEffect, useState } from 'react';
import { addToLocalStorageDb, deleteBookCart, getStoredCart, removeFromLocalStorageDB } from '../../utilities/fakedb';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Books.css'

const Books = () => {

    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        // initially load books 

        fetch('books.JSON')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);




    // initial load from local storage after opened the page or refreshed
    useEffect(() => {

        const getStoredCartIds = getStoredCart();

        const newCart = [];
        for (let id in getStoredCartIds) {
            let exist = books.find(book => book.ID === id);
            if (exist) {
                newCart.push(exist);
            }
        }
        setCart(newCart);



    }, [books]);





    // Button event pass as parameter to the book
    const handleAddToCart = (selectedBook) => {

        const exist = cart.find(book => book.ID === selectedBook.ID)
        let newCart = [];

        if (exist) {
            alert("Item already added!");
        }
        else if (cart.length === 4) {
            alert("You can't add more 4 Books");
        }
        else {
            newCart = [...cart, selectedBook];
            setCart(newCart);
            addToLocalStorageDb(selectedBook.ID);
        }

    }



    const chooseItem = () => {

        if (cart.length === 0) return;
        let len = cart.length;
        let chooseIndex = Math.floor(Math.random() * len);

        // console.log("lenth: ", len);
        // console.log("index: ", chooseIndex);
        // console.log(cart[chooseIndex]);
        let newCart = [];
        newCart.push(cart[chooseIndex]);
        setCart(newCart);

        // update local storage
        deleteBookCart();
        addToLocalStorageDb(newCart[0].ID);


    }
    const resetItem = () => {
        // console.log('reset item');
        let newCart = [];
        setCart(newCart);

        deleteBookCart();
    }



    const deleteSingleItem = (selectedBook) => {

        console.log(selectedBook);
        const restCarts = cart.filter(book => book.ID !== selectedBook.ID);

        setCart(restCarts);
        removeFromLocalStorageDB(selectedBook.ID);
    }




    return (
        <div className='books-container'>

            <div className="book-list-container">
                <div className="books-list">
                    {
                        books.map(book => <Book
                            key={book.id}
                            book={book}
                            handleAddToCart={handleAddToCart}
                        ></Book>)
                    }
                </div>

                <div className="cart-details">

                    <Cart

                        cart={cart}
                        chooseItem={chooseItem}
                        resetItem={resetItem}
                        deleteSingleItem={deleteSingleItem}
                    ></Cart>

                </div>

            </div>
        </div>
    );
};



export default Books;