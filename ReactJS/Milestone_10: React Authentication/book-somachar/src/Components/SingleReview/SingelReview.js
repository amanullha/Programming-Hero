import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

import React, { useState } from 'react';

const SingelReview = ({ review }) => {

    const { Id, Name, Image, Rating, Time, Review } = review;
    let rt = parseInt(Rating);

    let star = "";

    while (rt--) {
        star += '*';
    }

    const [less, setLess] = useState(0);
    const [command, setCommand] = useState("Read More..");

    const lessClicked = () => {
        setLess(less ^ 1);
        less ? setCommand('Read More...') : setCommand('Read Less..');
        console.log(less);
    }


    return (
        <div className=' m-3 border-2 p-3 rounded-lg'>
            <div className=" flex items-center gap-2">
                <img width={80} src={Image} alt="" />
                <sub className='text-gray-500'>By</sub>

                <div className="reviewer ">
                    <h3 className='text-2xl text-yellow-800'>{Name}</h3>
                    <h5 className='pl-2 text-red-400 font-bold text-3xl'>{star}</h5>
                </div>

            </div>
            <div className="review-section pl-2 mt-3">
                <p>{less ? Review : Review.slice(0, 100)}</p>
                <button onClick={lessClicked}>{command}</button>
            </div>
            <div className="comment pl-2 mt-3">
                <span className='text-gray-700'>Was this Review helpful for you?</span>
                <div className='flex items-center gap-5'>

                    <FontAwesomeIcon className='border p-2 rounded-full active:bg-green-400' icon={faThumbsUp} />
                    <FontAwesomeIcon className='border p-2 rounded-full active:bg-red-400' icon={faThumbsDown} />
                </div>

            </div>
        </div>
    );
};

export default SingelReview;