import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import tech1 from '../../img/tech-1.jpg'
import tech2 from '../../img/tech-2.jpg'
import tech3 from '../../img/tech-3.jpeg'
import tech4 from '../../img/cultural-4.jpg'
import './Event.css'
const Events = () => {
    return (
        // added four hardcoded card events
        <div>
            {/* ====================== event banner area ================== */}
            <div className='event-banner container-banner'>
                <Container>
                    <div className='p-5 text-center'>
                        <h1 className='light-bg display-2 p-5 mt-5 fw-bold animate__animated animate__fadeInLeft'>Let's Have a Look at Our all Events</h1>
                    </div>

                </Container>

            </div>

            <Container>
                {/* ============ admission area ========================== */}
                <div className='mt-5 pt-2'>
                    <div className='text-center light-bg m-5 p-5 animate__animated animate__flash'>
                        <h1>Admission is Going on </h1>
                        <button className='secondary-btn px-3 py-2'>Contact us</button>
                    </div>
                </div>
                {/* ================= hard coded events area ====================== */}
                <h6 className='secondary-text mt-5 pt-4'>Upcoming Events</h6>
                <hr className='separator' />
                <h1 className='secondary-text'>Check out our exiting events</h1>
                <Row xs={1} md={2} className="g-4 mt-3">
                    {/*========================== card 1 =================================*/}
                    <Col className='animate__animated animate__zoomIn'>
                        <Card className='card-top-img'>
                            <div className='img-cont'>
                                <Card.Img variant="top" src={tech1} height='300px' />
                            </div>

                            <Card.Body>
                                <h2 className='secondary-text'>Learn Latex</h2>
                                <p className='dark-text'>
                                    LaTeX is a high-quality typesetting system; it includes features designed for the production of technical and scientific documentation.
                                </p>
                                <p className='calender'><i className="far fa-calendar-alt secondary-text"></i> <span className='bg-light p-2 dark-text'>Wednesday, 6 October,2021</span></p>
                                <p className='dark-text'><strong><i className="far fa-clock secondary-text"></i> at 3:00 pm</strong> </p>
                                <small className='dark-text'>Hosted by: John Doe</small>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/*========================== card 2 =================================*/}
                    <Col className='animate__animated animate__zoomIn'>
                        <Card className='card-top-img'>
                            <div className='img-cont'>
                                <Card.Img variant="top" src={tech2} height='300px' />
                            </div>

                            <Card.Body>
                                <h2 className='secondary-text'>Learn Machine Learning</h2>
                                <p className='dark-text'>
                                    LaTeX is a high-quality typesetting system; it includes features designed for the production of technical and scientific documentation.
                                </p>
                                <p className='calender'><i className="far fa-calendar-alt secondary-text"></i> <span className='bg-light p-2 dark-text'>Friday, 8 October,2021</span></p>
                                <p className='dark-text'><strong><i className="far fa-clock secondary-text"></i> at 6:00 pm</strong> </p>
                                <small className='dark-text'>Hosted by: Professor Someone</small>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/*========================== card 3 =================================*/}
                    <Col className='animate__animated animate__zoomIn'>
                        <Card className='card-top-img'>
                            <div className='img-cont'>
                                <Card.Img variant="top" src={tech3} height='300px' />
                            </div>

                            <Card.Body>
                                <h2 className='secondary-text'>Intra University Programming Contest</h2>
                                <p className='dark-text'>
                                    LaTeX is a high-quality typesetting system; it includes features designed for the production of technical and scientific documentation.
                                </p>
                                <p className='calender'><i className="far fa-calendar-alt secondary-text"></i> <span className='bg-light p-2 dark-text'>Monday, 13 October,2021</span></p>
                                <p className='dark-text'><strong><i className="far fa-clock secondary-text"></i> at 9:00 am</strong> </p>
                                <small className='dark-text'>Hosted by: Random University</small>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/*========================== card 4 =================================*/}
                    <Col className='animate__animated animate__zoomIn'>
                        <Card className='card-top-img'>
                            <div className='img-cont'>
                                <Card.Img variant="top" src={tech4} height='300px' />
                            </div>

                            <Card.Body>
                                <h2 className='secondary-text'>Intra University Annual Culturul Fest</h2>
                                <p className='dark-text'>
                                    LaTeX is a high-quality typesetting system; it includes features designed for the production of technical and scientific documentation.
                                </p>
                                <p className='calender'><i className="far fa-calendar-alt secondary-text"></i> <span className='bg-light p-2 dark-text'>ThursDay, 15 October,2021</span></p>
                                <p className='dark-text'><strong ><i className="far fa-clock secondary-text"></i> 10:00 am</strong> </p>
                                <small className='dark-text'>Hosted by: Cultural club of Random University</small>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>


    );
};

export default Events;