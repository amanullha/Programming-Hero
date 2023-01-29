import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body flex flex-col gap-5">
                <p>{review.review}</p>
                <div className='flex gap-5 items-center'>
                    <div className='border-4 border-primary rounded-full'>
                        <img src={review.img} alt="" />
                    </div>
                    <div>
                        <h1 className='text-xl'>{review.name}</h1>
                        <h1 className='text-lg'>{review.area}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;