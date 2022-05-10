import React from 'react';

import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify';

const AddService = () => {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        const large = data.large;
        const small = data.small;
        delete data.large;
        delete data.small;
        const price = { large, small };
        data.price = price;
        console.log(data);

        fetch('https://calm-hollows-18504.herokuapp.com/services', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                toast("New service added ")
                console.log(data);
            })











    }





    return (
        <div className='bg-gray-100 p-5'>


            <h1 className='text-4xl text-center my-5 '>Add new service </h1>
            <hr className='w-1/2 mx-auto text-black h-1' />

            <form className='text-xl py-5 flex gap-5 flex-col mx-auto w-3/4 md:w-1/2 lg:w-1/4' onSubmit={handleSubmit(onSubmit)}>

                <input placeholder='Enter service name' className='pl-2 border-b-2' {...register('name', { required: true })} />
                {errors.name && <p>Please your a service name.</p>}

                <textarea placeholder='Enter service description' className='pl-2 border-b-2' {...register('description', { required: true })} />
                {errors.description && <p>Enter service description.</p>}


                <input type="number" placeholder='Enter Small car charge' className='pl-2 border-b-2' {...register('small', { required: true })} />
                {errors.small && <p>Enter small car charge.</p>}


                <input type="number" placeholder='Enter Large car charge' className='pl-2 border-b-2' {...register('large', { required: true })} />
                {errors.large && <p>Enter large car charge.</p>}



                <input type="text" placeholder='Photo URL' className='pl-2 border-b-2' {...register('img', { required: true })} />
                {errors.img && <p>Enter large car charge.</p>}




                <input className='bg-blue-700 text-white rounded-lg py-1' type='submit' value="Add user" />
            </form>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddService;