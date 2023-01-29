import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../img/logo.jpg'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer py-5'>
            <Container>
                <div className='d-lg-flex justify-content-between align-items-center'>
                    {/*==================== 1st part ================================*/}
                    <div>
                        <div className='d-flex align-items-center'>
                            <img src={logo} alt="" width='50px' />
                            <h2 className='ms-3'>Random University</h2>
                        </div>
                        <p >A perfect way for your stable future.</p>
                        <div className='d-flex'>
                            <p className='foo-icon'><i className="fab fa-facebook"></i></p>
                            <p className='foo-icon'><i className="fab fa-instagram-square"></i></p>
                            <p className='foo-icon'><i className="fab fa-twitter-square"></i></p>
                        </div>
                    </div>
                    {/*==================== 2nd part ================================*/}
                    <div>
                        <h3>Contact us</h3>
                        <h5><i className="fas fa-phone"></i> +8801943475</h5>
                        <h5><i className="far fa-envelope"></i> university@random.edu.bd</h5>
                        <h5><i className="fas fa-globe"></i> web@random.com</h5>
                    </div>
                </div>

            </Container>
            <p className='copyright text-secondary mb-0 pb-0'> &copy; copyright 2021 Random University. All rights reserved</p>
        </footer>
    );
};

export default Footer;