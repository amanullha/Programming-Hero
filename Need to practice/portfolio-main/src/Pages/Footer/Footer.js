import React from 'react';
import img from '../../image/footer.png';
import { Container } from 'react-bootstrap';


const Footer = () => {
    return (
        <Container className='pt-5'>
            <div>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={img} alt="" className='w-25' />
                </div>
                <div className='d-flex justify-content-center align-items-center text-center pt-3'>
                    <div>
                        <p className='text-light'><i className="fas fa-envelope"></i> meemrumi59@gmail.com</p>
                        <a target='_blank' rel="noreferrer" href='https://github.com/Khurshida-Meem' className='text-light'><i className="fab fa-github linkicon"></i></a>
                        <a target='_blank' rel="noreferrer" href='https://www.facebook.com/khurshida.meem/' className='text-light'><i className="fab fa-facebook linkicon"></i></a>
                        <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/khurshida-meem-383488154/' className='text-light'><i className="fab fa-linkedin linkicon"></i></a>
                    </div>
                </div>
            </div>

            <div className="text-center p-3 text-light">
                &copy; 2022 | All rights reserved by Khurshida Jahan Meem
            </div>
        </Container>

    );
};

export default Footer;