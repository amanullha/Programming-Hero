import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import cpp from '../../image/c.png';
import html from '../../image/html-5.png';
import css from '../../image/css.png';
import js from '../../image/javascript.png';
import react from '../../image/react.png';
import bootstrap from '../../image/bootstrap.png';
import express from '../../image/ExpressJS.png';
import firebase from '../../image/firebase.png';
import mongodb from '../../image/mongodb.png';
import mui from '../../image/mui.png';
import node from '../../image/nodejs.png'
import tailwind from '../../image/tailwindcss.svg';
import { Zoom } from 'react-reveal';
import './Skills.css';

const Skills = () => {
    return (
        <Container className='my-5 py-5' id="skills">
            <div className='mb-4'>
                <h1 className='component-headings pb-2 '>Skills</h1>
            </div>
            <Zoom left cascade>
                <Row xs={2} md={3} lg={5} className="g-4">
                    <Col className='d-flex justify-content-center text-center'>
                        <span className='single-skill'>
                            <img src={cpp} alt="" height="50px" width="50px" />
                            <h5 className='mt-2'>C++</h5>
                        </span>
                    </Col>
                    <Col className='d-flex justify-content-center text-center'>
                        <span className='single-skill'>
                            <img src={html} alt="" height="50px" width="50px" />
                            <h5 className='mt-2'>HTML</h5>
                        </span>
                    </Col>
                    <Col className='d-flex justify-content-center text-center'>
                        <span className='single-skill'>
                            <img src={css} alt="" height="50px" width="50px" />
                            <h5 className='mt-2'>CSS</h5>
                        </span>
                    </Col>
                    <Col className='d-flex justify-content-center text-center'>
                        <span className='single-skill'>
                            <img src={bootstrap} alt="" height="50px" width="50px" />
                            <h5 className='mt-2'>Bootstrap</h5>
                        </span>
                    </Col>
                    <Col className='d-flex justify-content-center text-center'>
                        <span className='single-skill'>
                            <img src={js} alt="" height="50px" width="50px" />
                            <h5 className='mt-2'>Javascript</h5>
                        </span>
                    </Col>
                    <Col className='d-flex justify-content-center text-center'>
                        <span className='single-skill'>
                            <img src={react} alt="" height="50px" width="50px" />
                            <h5 className='mt-2'>React.js</h5>
                        </span>
                    </Col>
                    <Col className='d-flex justify-content-center text-center'>
                        <span className='single-skill'>
                            <img src={firebase} alt="" height="50px" width="50px" />
                            <h5 className='mt-2'>Firebase</h5>
                        </span>
                    </Col>
                    <Col className='d-flex justify-content-center text-center'>
                        <span className='single-skill'>
                            <img src={mui} alt="" height="50px" width="50px" />
                            <h5 className='mt-2'>Material UI</h5>
                        </span>
                    </Col>
                    <Col className='d-flex justify-content-center text-center'>
                        <span className='single-skill'>
                            <img src={tailwind} alt="" height="50px" width="50px" />
                            <h5 className='mt-2'>Tailwind</h5>
                        </span>
                    </Col>
                    <Col className='d-flex justify-content-center text-center'>
                        <span className='single-skill'>
                            <img src={express} alt="" height="50px" width="50px" />
                            <h5 className='mt-2'>Express.js</h5>
                        </span>
                    </Col>
                    <Col className='d-flex justify-content-center text-center'>
                        <span className='single-skill'>
                            <img src={node} alt="" height="50px" width="50px" />
                            <h5 className='mt-2'>Node.js</h5>
                        </span>
                    </Col>
                    <Col className='d-flex justify-content-center text-center'>
                        <span className='single-skill'>
                            <img src={mongodb} alt="" height="50px" width="50px" />
                            <h5 className='mt-2'>MongoDB</h5>
                        </span>
                    </Col>
                </Row>
            </Zoom>
        </Container>
    );
};

export default Skills;