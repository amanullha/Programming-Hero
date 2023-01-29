import React from 'react';
import { Container } from 'react-bootstrap';
import './Notes.css'

const Notes = () => {
    return (
        <Container>
            {/*============ experimental sticky notes on bottom of banner =============================*/}
            <div className='d-lg-flex justify-content-evenly'>
                <div className='note1 notes text-center animate__animated animate__fadeInLeft'>
                    <h3 className='p-5'>Artists</h3>
                </div>
                <div className='note2 notes text-center animate__animated animate__fadeIn'>
                    <h3 className='p-5'>Thinkers</h3>
                </div>
                <div className='note3 notes text-center animate__animated animate__fadeInRight'>
                    <h3 className='p-5'>Leaders</h3>
                </div>
            </div>
        </Container>
    );
};

export default Notes;