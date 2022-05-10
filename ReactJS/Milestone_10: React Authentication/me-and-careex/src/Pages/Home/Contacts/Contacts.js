import React from 'react';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const Contacts = () => {




    const handleFormSubmit = (e) => {

        e.preventDefault();

        toast('Thanks! I have got your message')

    }

    return (
        <div>




            <div className=' mx-auto w-3/4 gap-10 sm:w-full flex justify-evenly flex-col sm:flex-row my-20 '>
                <div >
                    <h1 className='text-3xl'>Contact info</h1>
                    <hr className='mb-3' />

                    <h1>Oposite of xyz</h1>
                    <h1>19,Dhanmondi,Dhaka, Bangladesh</h1>

                    <br></br>
                    <br></br>


                    <h1>Email: me@gmail.com</h1>
                    <h1>Phone: 897-9879856</h1>
                    <h1>Website: localhost://3000/</h1>
                </div>

                <div>


                    <h1 className='text-3xl '>Let's Keep in touch</h1>
                    <hr className='mb-3' />


                    <div>
                        <form onSubmit={handleFormSubmit}>
                            <div>
                                <div>
                                    <label htmlFor='name'>Name</label>
                                    <input
                                        type='text'
                                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                        id='name'
                                        placeholder='Your Name'

                                    />
                                </div>

                                <div>
                                    <label htmlFor='email'>Email</label>
                                    <input
                                        type='email'
                                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                        id='email'
                                        placeholder='Your Email'

                                    />
                                </div>


                                <div>
                                    <label htmlFor='address'>Address</label>
                                    <input
                                        type='address'
                                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                        id='address'
                                        placeholder='Your address'

                                    />
                                </div>

                                <div>
                                    <label htmlFor='message'>Message</label>


                                    <textarea

                                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                                        id='message'
                                        placeholder='Your message'
                                    >

                                    </textarea>
                                </div>
                            </div>
                            <div className=' flex justify-center '>
                                <input className=' w-full bg-green-700 text-yellow-400 px-4 py-1 font-bold tracking-wider rounded-lg  active:bg-green-400' type="submit" value="Send your message" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <ToastContainer />


        </div>
    );
};

export default Contacts;