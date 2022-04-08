import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import project1 from '../../image/hotel-ressort.png';
import project2 from '../../image/random-hospital.png';
import project3 from '../../image/random-university.png';
import project4 from '../../image/plan-to-tour.png';
import './Project.css';

const Projects = () => {
    return (
        <Container className='my-5 pt-5'>
            <div className='mb-3'>
                <h1 className='component-headings pb-2 '>Recent Projects</h1>
            </div>

            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card className='card-container rounded border-0'>
                        <div className="img-container">
                            <Card.Img variant="top rounded" src={project1} height="300px" />
                        </div>
                        <Card.Body>
                            <Card.Title> <h2 className='text-dark mb-3'>Hotel Ressort</h2></Card.Title>
                            <Card.Text>
                                <div className='mb-4'>
                                    <a className='a-pink px-3 py-2 mb-3' href="https://hotel-ressort.web.app/" target="_blank" rel="noreferrer">Live Site</a>
                                    <a className='a-orange px-3 py-2 mb-3' href="https://github.com/Khurshida-Meem/hotel-ressort-client" target="_blank" rel="noreferrer">Client Code</a>
                                    <a className='a-pink px-3 py-2 mb-3' href="https://github.com/Khurshida-Meem/hotel-ressort-server" target="_blank" rel="noreferrer">Server Code</a>
                                </div>
                                <button className='orange-border rounded-pill px-3 me-2 mb-2 bg-white fw-bold'>React</button>
                                <button className='pink-border rounded-pill px-3 me-2 mb-2 bg-white fw-bold'>Mongodb</button>
                                <button className='green-border rounded-pill px-3 me-2 mb-2 bg-white fw-bold'>React Bootstrap</button>
                                <br />
                                <button className='sky-border rounded-pill px-3 me-2 mb-2 bg-white fw-bold'>Firebase</button>
                                <button className='purple-border rounded-pill px-3 me-2 mb-2 bg-white fw-bold'>React Router</button>
                                <ul className='text-black mt-2'>
                                    <li>dynamic service add and make booking</li>
                                    <li>show own bookings, show all bookings, delete bookings</li>
                                    <li>firebase authentication , react router, private route</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='card-container rounded border-0'>
                        <div className="img-container">
                            <Card.Img variant="top rounded" src={project2} height="300px" />
                        </div>
                        <Card.Body>
                            <Card.Title> <h2 className='text-dark mb-3'>Random Health Care</h2></Card.Title>
                            <Card.Text>
                                <div className='mb-4'>
                                    <a className='a-pink px-3 py-2 mb-3' href="https://random-health-care.web.app/home" target="_blank" rel="noreferrer">Live Site</a>
                                    <a className='a-orange px-3 py-2 mb-3' href="https://github.com/Khurshida-Meem/random-health-care" target="_blank" rel="noreferrer">Client Code</a>

                                </div>
                                <button className='orange-border rounded-pill px-3 me-2 mb-2 bg-white fw-bold'>React</button>
                                <button className='pink-border rounded-pill px-3 me-2 mb-2 bg-white fw-bold'>React Hook Form</button>
                                <button className='green-border rounded-pill px-3 me-2 mb-2 bg-white fw-bold'>React Bootstrap</button>
                                <br />
                                <button className='sky-border rounded-pill px-3 me-2 mb-2 bg-white fw-bold'>Firebase</button>
                                <button className='purple-border rounded-pill px-3 me-2 mb-2 bg-white fw-bold'>React Router</button>
                                <ul className='text-black mt-2'>
                                    <li>firebase authentication , react router, private route</li>
                                    <li>email password validation using react hook form</li>
                                    <li>animation with react reaveal</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='card-container rounded border-0'>
                        <div className="img-container">
                            <Card.Img variant="top rounded" src={project3} height="300px" />
                        </div>
                        <Card.Body>
                            <Card.Title> <h2 className='text-dark mb-3'>Random University</h2></Card.Title>
                            <Card.Text>
                                <div className='mb-4'>
                                    <a className='a-pink px-3 py-2 mb-3' href="https://random-university.netlify.app/" target="_blank" rel="noreferrer">Live Site</a>
                                    <a className='a-orange px-3 py-2 mb-3' href="https://github.com/Khurshida-Meem/random-university" target="_blank" rel="noreferrer">Client Code</a>

                                </div>
                                <button className='orange-border rounded-pill px-3 me-2 mb-2 bg-white fw-bold'>React</button>
                                <button className='green-border rounded-pill px-3 me-2 mb-2 bg-white fw-bold'>React Bootstrap</button>
                                <button className='purple-border rounded-pill px-3 me-2 mb-2 bg-white fw-bold'>React Router</button>
                                <ul className='text-black mt-2'>
                                    <li>use of react router dom</li>
                                    <li>Dynamic data load using JSON</li>
                                    <li>used react-bootstrap</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='card-container rounded border-0'>
                        <div className="img-container">
                            <Card.Img variant="top rounded" src={project4} height="300px" />
                        </div>
                        <Card.Body>
                            <Card.Title> <h2 className='text-dark mb-3'>Plan to Tour</h2></Card.Title>
                            <Card.Text>
                                <div className='mb-4'>
                                    <a className='a-pink px-3 py-2 mb-3' href="https://tourplan-km.netlify.app/" target="_blank" rel="noreferrer">Live Site</a>
                                    <a className='a-orange px-3 py-2 mb-3' href="https://github.com/Khurshida-Meem/plan-to-tour" target="_blank" rel="noreferrer">Client Code</a>

                                </div>
                                <button className='orange-border rounded-pill px-3 me-2 mb-2 bg-white fw-bold'>React</button>
                                <button className='green-border rounded-pill px-3 me-2 mb-2 bg-white fw-bold'>Css</button>
                                <button className='purple-border rounded-pill px-3 me-2 mb-2 bg-white fw-bold'>React Router</button>
                                <ul className='text-black mt-2'>
                                    <li>used pure react</li>
                                    <li>add a place</li>
                                    <li>you can see how many places you added and your total cost</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
};

export default Projects;