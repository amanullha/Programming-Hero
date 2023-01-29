import React from 'react';
import usePosts from '../../hooks/usePosts';

const DeletePost = () => {

    const [posts, setPosts] = usePosts();

    const handleDelete = (_id) => {
        console.log(_id);

        fetch(`http://localhost:5000/posts/${_id}`, {
            method: "DELETE",

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })








    }

    return (
        <div>
            <div>
                {
                    posts.map(post => <div
                        key={post._id}>
                        <h2>{post.title} <span>{post.userId}</span>  <button onClick={() => handleDelete(post._id)}>x</button></h2>



                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default DeletePost;