import React from 'react';

const InfoCart = ({ img, cardTitle, bgColor }) => {
    return (
        <div class={`p-5 card lg:card-side bg-base-100 shadow-xl ${bgColor}`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

            </div>
        </div>
    );
};

export default InfoCart;