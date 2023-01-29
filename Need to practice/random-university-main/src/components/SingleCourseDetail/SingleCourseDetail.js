import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';

const SingleCourseDetail = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/home');
    }
    return (

        <Container>
            <div className='text-center light-bg m-5 p-5'>
                <h1 className='py-5'> To be Continued....</h1>
                <button className='secondary-btn px-3 py-2' onClick={handleClick}>Back to Home</button>
            </div>
        </Container>
    );
};

export default SingleCourseDetail;