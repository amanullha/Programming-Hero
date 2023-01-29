import React, { useState } from 'react';
import { Card, Carousel, Col, Modal } from 'react-bootstrap';
import './MyProject.css';
import { Fade } from 'react-reveal';



const MyProject = (props) => {

    const { name, thumb1, thumb2, thumb3, thumb4, thumb5, technology, desc, liveSite, clientCode, serverCode } = props.project;

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const projectDetails = desc.split(":");
    const techs = technology.split(",");

    return (
        <Col>
            <div>
                <Fade up>
                    <div className='text-center'>
                        <img src={thumb1} alt="" className='w-100' />
                        <h3>{name}</h3>
                        <button onClick={handleShow} className="animated-button1 py-2 px-3 rounded-pill border-0" >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <strong className='text-dark'>More Details</strong>
                        </button>
                        <a href={liveSite} target="blank" className="text-decoration-none  ">
                            <button className="animated-button1 py-2 px-3 rounded-pill border-0 ms-2">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <strong className='text-dark'>Live Preview</strong>
                            </button>
                        </a>
                    </div>
                </Fade>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <div style={{ "backgroundColor": "#161616", "color": "white" }}>
                    <div>
                        <div className="d-flex align-items-center justify-content-center">
                            <Carousel variant="dark" controls={false} indicators={false} className='w-50'>
                                <Carousel.Item>
                                    <img
                                        className="p-2 w-100"
                                        src={thumb2}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="p-2 w-100"
                                        src={thumb3}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="p-2 w-100"
                                        src={thumb4}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="p-2 w-100"
                                        src={thumb5}
                                        alt="Fourth slide"
                                    />
                                </Carousel.Item>

                            </Carousel>
                        </div>
                        <div>
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter"
                                    style={{ "color": "white", "fontWeight": "600", "fontSize": "30px" }}
                                >
                                    {name}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="text-start">
                                    <span className="fw-bold">Project Details</span>
                                    <br />
                                    <ul>
                                        {projectDetails.map(projectDetail => <li>{projectDetail}</li>)}
                                    </ul>
                                </div>
                                <Card.Text className="text-start">
                                    <span className="fw-bold text-white"> Technologies </span>
                                    <div className='mt-2'>
                                        {techs.map(tech => <button className='border-0 orange-border rounded-pill px-3 me-2 mb-2 bg-white fw-bold'>{tech}</button>)}
                                    </div>
                                </Card.Text>

                            </Modal.Body>

                            <Modal.Footer className='text-center'>

                                <a href={liveSite} target="blank" className="text-decoration-none">
                                    <button className="border-0 modal-btn text-dark fw-bold">
                                        Live Preview
                                    </button>
                                </a>
                                <a href={clientCode} target="blank" className="text-decoration-none">
                                    <button className='border-0 modal-btn text-dark fw-bold'>
                                        Client Code
                                    </button>
                                </a>

                                {serverCode && <a href={serverCode} target="blank" className="text-decoration-none">
                                    <button className='border-0 modal-btn fw-bold text-dark'>
                                        Server Code
                                    </button>
                                </a>
                                }

                            </Modal.Footer>
                        </div>
                    </div>
                </div>

            </Modal>
        </Col>
    );
};

export default MyProject;