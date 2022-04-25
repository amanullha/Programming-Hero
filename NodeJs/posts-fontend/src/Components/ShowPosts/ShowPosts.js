import React from 'react';
import usePosts from '../../hooks/usePosts';

const ShowPosts = () => {


    const [posts, setPosts] = usePosts();


    return (
        <div>

            <div>
                {
                    posts.map(post => <div
                        key={post._id}>
                        <h2>{post.title} <span>{post.userId}</span></h2>
                        <h4>{post.body}</h4>
                        
                        <br />
                        <br />
                    </div>
                    )
                }
            </div>

        </div>
    );
};

export default ShowPosts;