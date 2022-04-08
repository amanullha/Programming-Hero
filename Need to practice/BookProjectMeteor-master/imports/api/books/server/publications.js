
// Publication allows us to specify what data we want to expose to the client.
import { Meteor } from 'meteor/meteor';
import { Books } from '../books';

Meteor.publish('books', function() {
    return Books.find();
});