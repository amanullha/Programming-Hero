import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from '../Review/Review';



const Testimonials = () => {


    const reviews = [
        {
            _id: 1,
            name: 'name1',
            area: 'dhaka',
            review: 'review1',
            img: people1
        },
        {
            _id: 2,
            name: 'name2',
            area: 'dhaka',
            review: 'review2',
            img: people1
        },
        {
            _id: 3,
            name: 'name3',
            area: 'dhaka',
            review: 'review3',
            img: people1
        }
    ]









    return (
        <div className='my-16 '>
            <section className='p-5' >


                <div className='flex justify-between gap-5'>
                    <div>
                        <h1 className='text-lg font-bold text-primary'>Testimonial</h1>
                        <h1 className='text-2xl mt-4'>What Our Patients Says</h1>

                    </div>


                    <div>
                        <img className='w-24 lg:w-48' src={quote} alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        />)
                    }
                </div>


            </section>

        </div>
    );
};

export default Testimonials;