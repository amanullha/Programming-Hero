import React from 'react';

const Footer = () => {

    let year = new Date().getFullYear();




    return (
        <div className='p-10 text-white bg-black text-center'>
            <small>Copyright @{year}</small>
        </div>
    );
};

export default Footer;