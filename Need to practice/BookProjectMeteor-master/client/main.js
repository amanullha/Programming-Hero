
import React from 'react';
import { render } from 'react-dom';
//import Books from '../imports/ui/components/Books';
import Books from '../imports/ui/containers/Books';

import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    render(
        <Books
            firstName="Forhad"
            readBooks={[
                {title: 'Liminal Thinking', author: 'Dave Gray'},
                {title: 'Personal History', author: 'Katharine Graham'},
                {title: 'Born Standing Up', author: 'Steve Martin'},
            ]}
            unreadBooks={[
                {title: 'The Course of Love', author: 'Alain De Botton'},
                {title: 'Too Soon Old, Too Late Smart', author: 'Gordon Livingston'},
                {title: 'Servant Leadership', author: 'Robert K. Greenleaf'},
            ]}
        />,
        document.getElementById('react-root')
    );
});