import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Reviews = () => {


    const [reviews, setReviews] = useReviews();


    // const [reviews, setReviews] = useState([]);

    // useEffect(() => {
    //     axios.get('Reviews.json')
    //         .then(data => setReviews(data.data))
    // }, [])






    return (
        <div>
            <div className=" p-5">



                <div className=''>
                    <ReviewDetails
                        reviews={reviews}
                    />
                </div>


            </div>
        </div>
    );
};

export default Reviews;