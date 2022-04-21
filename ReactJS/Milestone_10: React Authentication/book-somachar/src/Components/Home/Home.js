import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import MyCarousel from '../MyCarousel/MyCarousel';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './Home.css'
const Home = () => {

    const [reviews, setReviews] = useReviews();


    // const [reviews, setReviews] = useState([]);

    // useEffect(() => {
    //     axios.get('Reviews.json')
    //         .then(data => setReviews(data.data))
    // }, [])

    const demoReviews = reviews.slice(0, 3);


    return (
        <div className="home-container mb-12 xl:mt-40 lg:mt-40 md:mt-40 mt-5">

            {/* <div className='home-info grid md:grid-cols-6 sm:grid-cols-1  gap-5 '> */}
            <div className='home-info flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col'>

                <div className="xl:lg:w-3/4 lg:w-3/4 md:w-3/4 sm:w-4/4 w-full xl:order-1 lg:order-1 md:order-1 sm:order-2 order-2 info p-5 ">

                    <div className='info-items pl-8 leading-9'>
                        <h1 className='text-4xl font-bold text-yellow-700 tracking-wider		'>আমরা যখন বই সংগ্রহ করি, তখন আমরা আনন্দকেই সংগ্রহ করি</h1>
                        <p className=' my-5 tracking-wider leading-9		'>
                            বই পড়া শব্দভাণ্ডার বৃদ্ধিতে অনেক বেশি সাহায্য করে। যত বেশি বই পড়বে তত বেশি তোমার শব্দভাণ্ডারে প্রতিনিয়ত নতুন নতুন শব্দ যোগ হতে থাকবে। এবং এক সময় লক্ষ্য করবে তুমি তোমার কথাবার্তায় প্রায়ই সেসব শব্দ ব্যবহার করছো। এসব শব্দ ব্যবহার করে তুমি খুব সহজেই এবং স্পষ্টভাবে নিজেকে অন্যের কাছে তুলে ধরতে পারছো। নিজেকে স্পষ্টভাবে প্রকাশ করা তোমার চাকুরিজীবনে এমনকি বাক্তিগত জীবনেও কী পরিমাণ সহায়ক হবে তা অবশ্যই তোমার অজানা নয়। এমনকি তোমার আত্মবিশ্বাস জোগাতেও অনেক সাহায্য করবে।


                        </p>
                        <button className='bg-blue-600 text-white px-10 py-2 rounded-full'>Explore...</button>
                    </div>
                </div>

                <div className=" xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-4/4 w-full image xl:order-2 lg:order-2 md:order-2 sm:order-1 order-1 books">
                    {/* <img src="https://qph.fs.quoracdn.net/main-qimg-1aa00c7fa79a9522cb27dafcafaab1ad-lq" alt="" /> */}

                    <MyCarousel className='w-full'></MyCarousel>

                </div>
            </div>

            <div className="comment-section p-5  xl:mt-40 lg:mt-40 md:mt-40 mt-5">

                <h2 className=' p-2 text-center  text-3xl text-yellow-700 tracking-widest	'>REVIEWS</h2>

                <ReviewDetails
                    reviews={demoReviews}
                />


            </div>

            <div className='flex justify-center'>
                <Link to="/reviews" className='bg-blue-600 text-white px-20 py-3 rounded-full'>See All Reviews
                </Link>
            </div>



        </div>
    );
};

export default Home;