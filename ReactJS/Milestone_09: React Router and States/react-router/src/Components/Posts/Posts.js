import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {


    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(data => setPosts(data.data))
    }, []);


    return (
        <div>
            <h1>All post following Users: {posts.length}</h1>
            {

                posts.map(post => <Link
                    key={post.id}
                    to={`/posts/${post.id}`}
                > {post.id} </Link>)

            }
            <Outlet></Outlet>
        </div>
    );
};

export default Posts;