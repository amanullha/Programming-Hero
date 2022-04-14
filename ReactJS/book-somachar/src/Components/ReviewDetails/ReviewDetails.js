import React from 'react';
import SingelReview from '../SingleReview/SingelReview';
import './ReviewDetails.css'

const ReviewDetails = ({ reviews }) => {
    console.log(reviews);
    return (
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
            {
                reviews.map(review => <SingelReview
                    key={review.Id}
                    review={review}
                />)
            }

        </div>
    );
};

export default ReviewDetails;