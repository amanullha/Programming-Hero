import React from 'react';

const Link = (props) => {

    const { name, link } = props.route;


    return (
        <div>
            <li className='ml-5'>
                <a href={link}>{name}</a>
            </li>
        </div>
    );
};

export default Link;