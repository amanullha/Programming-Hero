import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import achive1 from '../../image/achive1.jpg';
import achive2 from '../../image/achive2.jpg';
import achive3 from '../../image/achive3.JPG';
import './Blogs.css';

const Blogs = () => {
    return (
        <Container className='mb-5' id="achivements">
            <div className='mb-3'>
                <h1 className='component-headings pb-2 '>Achivements</h1>
            </div>
            <div className='text-center'>
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col className='d-flex align-items-stretch'>
                        <Card className='card-container rounded'>
                            <div className="m-2 img-container">
                                <Card.Img variant="top rounded" src={achive2} height="230px" />
                            </div>
                            <Card.Body>
                                <Card.Title>1<sup>st</sup> Runners-Up</Card.Title>
                                <Card.Text>
                                    Programming Combat 2022
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex align-items-stretch'>
                        <Card className='card-container rounded'>
                            <div className="m-2 img-container">
                                <Card.Img variant="top rounded" src={achive3} height="230px" />
                            </div>
                            <Card.Body>
                                <Card.Title>Champion</Card.Title>
                                <Card.Text>
                                    MLH Hackathon-2019
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex align-items-stretch'>
                        <Card className='card-container rounded'>
                            <div className="m-2 img-container">
                                <Card.Img variant="top rounded" src={achive1} height="230px" />
                            </div>
                            <Card.Body>
                                <Card.Title>First Problem Solver</Card.Title>
                                <Card.Text>
                                    Inter University Girls' Programming Contest-2019
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Blogs;