import React from 'react';
import { Container } from 'react-bootstrap';
import './Facilities.css'

const Facilities = () => {
    return (
        <Container>
            {/* =================== homme page we offer area =============== */}
            <h3 className='secondary-text mt-5 pt-5 animate__animated animate__fadeIn'>We Offer</h3>
            <hr className='separator' />
            <h1 className='secondary-text animate__animated animate__fadeIn'>Our Top Most Priority is to Provide</h1>
            <div className='d-lg-flex'>
                <div className='animate__animated animate__fadeInLeft'>
                    {/* ==================================== security ========================================*/}
                    <div className='d-flex align-items-center'>
                        <p className='dark-bg text-white p-4 m-3 rounded-circle display-4'><i className="fas fa-shield-alt"></i></p>
                        <span>
                            <h3 className='dark-text fw-bold'>Security</h3>
                            <p className='dark-text'>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits.</p>
                        </span>
                    </div>
                    {/* ==================================== teachers ========================================*/}
                    <div className='d-flex align-items-center'>
                        <p className='dark-bg text-white p-3 m-3 rounded-circle display-4'><i className="fas fa-users"></i></p>
                        <span>
                            <h3 className='dark-text fw-bold'>Amazing Teachers</h3>
                            <p className='dark-text'>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits.</p>
                        </span>
                    </div>
                    {/* ==================================== regular class ========================================*/}
                    <div className='d-flex align-items-center'>
                        <p className='dark-bg text-white p-4 m-3 rounded-circle display-4'><i className="fas fa-book-reader"></i></p>
                        <span>
                            <h3 className='dark-text fw-bold'>Regular Clases</h3>
                            <p className='dark-text'>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits.</p>
                        </span>
                    </div>
                </div>

                <div className='animate__animated animate__fadeInRight'>
                    {/* ==================================== sufficient classroom ========================================*/}
                    <div className='d-flex align-items-center'>
                        <p className='dark-bg text-white p-4 m-3 rounded-circle display-4'><i className="fas fa-door-open"></i></p>
                        <span>
                            <h3 className='dark-text fw-bold'>Sufficient Classroom</h3>
                            <p className='dark-text'>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs.</p>
                        </span>
                    </div>
                    {/* ==================================== Skill Development ========================================*/}
                    <div className='d-flex align-items-center'>
                        <p className='dark-bg text-white p-4 m-3 rounded-circle display-4'><i className="fas fa-skiing-nordic"></i></p>
                        <span>
                            <h3 className='dark-text fw-bold'>Skill Development</h3>
                            <p className='dark-text'>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits.</p>
                        </span>
                    </div>
                    {/* ==================================== sports ========================================*/}
                    <div className='d-flex align-items-center'>
                        <p className='dark-bg text-white p-4 m-3 rounded-circle display-4'><i className="fas fa-table-tennis"></i></p>
                        <span>
                            <h3 className='dark-text fw-bold'>Sports Facilities</h3>
                            <p className='dark-text'>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits.</p>
                        </span>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Facilities;