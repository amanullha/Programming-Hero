import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './NotFound.css'
import lostImage from '../../img/notFound.jpg'

const NotFound = () => {

    const history = useHistory();
    const handleClick = () => {
        history.push('/home');
    }

    return (
        <Container>
            <div className='d-lg-flex justify-content-evenly align-items-center ms-4'>
                <div classname='notfound-container'>
                    <h1 className='ntf-header'>404</h1>
                    <h3 className='dark-text'>Seems You are Lost</h3>
                    <p className='dark-text'>The page you are looking for was not found.</p>
                    <button className='secondary-btn px-3 py-2' onClick={handleClick}>Back to Home</button>
                </div>
                <div>
                    <img src={lostImage} alt="" />
                </div>
            </div>

        </Container>

    );
};

export default NotFound;