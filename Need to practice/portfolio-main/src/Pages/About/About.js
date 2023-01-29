import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import img from '../../image/about.png'

const About = () => {
    return (
        <Container className='d-flex align-items-center mt-5' id="about">
            <Row xs={1} md={2} >
                <Col className='d-flex align-items-center justify-content-center'>
                    <Fade right>
                        <div>
                            <h3 className='component-headings pb-2'>About me</h3>
                            <p>Assalamualaikum. It's Khurshida Jahan Meem. I am walking on a road to be a quality developer. I have done several projects using the MERN stack. I participated in many programming contests including ICPC 2019 and solved problems in different online judges. I found my happiness in web development that's why I choose this. Besides I have done debates on National Television five times being the best speaker twice. I love challenges and I am always dedicated to what I am doing. </p>
                        </div>
                    </Fade>
                </Col>
                <Col className='d-flex align-items-center justify-content-center'>
                    <Fade left>
                        <img src={img} alt="" className='img-fluid' />
                    </Fade>
                </Col>

            </Row>
        </Container>
    );
};

export default About;