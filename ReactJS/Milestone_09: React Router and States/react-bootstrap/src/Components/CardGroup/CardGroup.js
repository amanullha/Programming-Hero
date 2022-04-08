import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [

        { id: 1, name: "aman1", phone: "019" },
        { id: 2, name: "aman2", phone: "018" },
        { id: 3, name: "aman3", phone: "017" },
        { id: 4, name: "aman4", phone: "015" },
        { id: 5, name: "aman5", phone: "014" },
        { id: 6, name: "aman6", phone: "013" }

    ];
    return (
        <div>
            <h2>This is my card</h2>
            <div className="card-group">
                {
                    products.map(product => <Card 
                        key={product.id}
                        product={product}
                        ></Card>)
                }

            </div>
        </div>
    );
};

export default CardGroup;