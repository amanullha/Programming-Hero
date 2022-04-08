/*
 Meteor Method allows us to call server-side code from the client.

 Method is just a function that we define on the server and call to from the client using a remote procedure call (RPC)

 */

import { Meteor } from 'meteor/meteor';
import { Books } from './books';

Meteor.methods({
    addBook(book) {
        return Books.insert(book);
    }
});