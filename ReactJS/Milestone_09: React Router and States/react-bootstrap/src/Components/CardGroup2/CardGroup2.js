import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const CardGroup2 = () => {

    const products = [

        { id: 1, name: "aman1", phone: "019" },
        { id: 2, name: "aman2", phone: "018" },
        { id: 3, name: "aman3", phone: "017" },
        { id: 4, name: "aman4", phone: "015" },
        { id: 5, name: "aman5", phone: "014" },
        { id: 6, name: "aman6", phone: "013" }

    ];

    return (

        <CardGroup>
            {
                products.map(product => <Card2
                    key={product.id}
                    product={product}
                ></Card2>)
            }


        </CardGroup>
    );
};

export default CardGroup2;