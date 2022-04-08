import './PostDetails.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {

    const { postId } = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(data => setPost(data.data))
    }, [postId]);

    return (
        <div className='post'>
            <h1>Post Details of {post.id}</h1>
            <h3>User Id : {post.userId}</h3>
            <h3>Title : {post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;