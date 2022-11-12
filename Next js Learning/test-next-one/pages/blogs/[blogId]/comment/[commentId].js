import { useRouter } from 'next/router';
import React from 'react';

const commentId = () => {

    const { commentId, blogId } = useRouter().query;

    return (
        <div>
            <h1>blog id is : {blogId}</h1>
            <h1>comment id is : {commentId}</h1>
        </div>
    );
};

export default commentId;