import React from 'react';
import { useForm } from 'react-hook-form';

const AddPost = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);

        fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    console.log(watch("example"));


    return (
        <div>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>




                    <input type="number" placeholder='user id' {...register("userId", { required: true })} />
                    <br />
                    <input placeholder='post title' {...register("title", { required: true })} />
                    <br />
                    <textarea placeholder='post' {...register("body", { required: true })} />
                    <br />

                    <input type="submit" value="Add Post" />
                </form>
            </div>

        </div>
    );
};

export default AddPost;