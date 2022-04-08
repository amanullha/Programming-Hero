import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './HomeAbout.css'
import Culturul2 from '../../img/cultural-2.jpg'
import Culturul3 from '../../img/cultural-3.jpg'
import Culturul4 from '../../img/cultural-4.jpg'

const HomeAbout = () => {
    // handle about section button click
    const history = useHistory();
    const handleClick = () => {
        history.push('/about');
    }
    return (
        // about section of home
        <Container>
            <div className='mt-5 d-lg-flex'>
                {/*==================== About Section ================================*/}
                <div className='mt-5 pt-5 pe-3 animate__animated animate__fadeInLeft'>
                    <div>
                        <h3 className='secondary-text'>About us</h3>
                        <hr className='separator' />
                        <h1 className='secondary-text'>Welcome to Random University</h1>
                        <p className='dark-text'>A university is a higher learning institution.The word university comes from the Latin <br /> universitas magistrorum et scholarium, roughly meaning "community of teachers and scholars".Students <br />  can go to university to get an academic degree.Unlike the schooling they have done before, the courses at university are specialised. <br /> A person studying biology at university has many courses about biology and fewer courses in other fields such as <br />  languages or history.To get a higher degree, people must do some research.</p>
                        <button className='primary-btn fw-bold px-5 py-2 animate__animated animate__fadeInRight' onClick={handleClick}>Learn More</button>
                    </div>

                </div>
                {/* ======================Events section ==================================== */}
                <div className='mt-5 pt-5 animate__animated animate__fadeInRight'>
                    <h3 className='secondary-text'>Recent Events</h3>
                    <hr className='separator' />
                    <h1 className='secondary-text'>Check out our exiting events</h1>
                    <div>
                        <div className=' m-2 d-flex'>
                            <img src={Culturul2} height='100px' width='150px' alt="" />
                            <div className='ms-3'>
                                <h5>Sing Fastival</h5>
                                <p>A university is a higher learning institution.The word university comes from the Latin universitas magistrorum</p>
                            </div>
                        </div>
                        <hr />
                        <div className='d-flex m-2'>
                            <img src={Culturul3} height='100px' width='150px' alt="" />
                            <div className='ms-3'>
                                <h5>Bijoy Dibos</h5>
                                <p>A university is a higher learning institution.The word university comes from the Latin universitas magistrorum</p>
                            </div>
                        </div>
                        <hr />
                        <div className='d-flex m-2'>
                            <img src={Culturul4} height='100px' width='150px' alt="" />
                            <div className='ms-3'>
                                <h5>Programming Contest</h5>
                                <p>A university is a higher learning institution.The word university comes from the Latin universitas magistrorum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Container >
    );
};

export default HomeAbout;