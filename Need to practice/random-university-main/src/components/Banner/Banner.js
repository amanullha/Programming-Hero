import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Banner.css'

const Banner = () => {

    // handle click for about
    const history = useHistory();
    const handleClick = () => {
        history.push('/about');
    }

    return (
        <div className='banner-container'>
            <Container>
                <div className='banner-container d-flex align-items-center'>
                    <div className='text-container p-5 animate__animated animate__fadeIn'>
                        <h1 className='display-2 fw-bold animate__animated animate__fadeInLeft'>Start The Beginning <br /> You Want</h1>
                        <p className='animate__animated animate__fadeInUp'><strong>Shift</strong> the <strong>Ctrl</strong> to us we will <strong>Alt</strong> your World. <br /> We assure to provide best education for your future</p>
                        <button className='primary-btn fw-bold px-5 py-2 animate__animated animate__fadeInRight' onClick={handleClick}>About us</button>
                    </div>
                </div>
            </Container>
        </div>


    );
};

export default Banner;