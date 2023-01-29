import React, { useState } from 'react';
import { Card, Carousel, Col, Modal } from 'react-bootstrap';
import './AllProject.css';

const Project = (props) => {

    const [hover, setHover] = useState(false);



    const { name, thumb6, thumb2, thumb3, thumb4, thumb5, technology, desc, liveSite, clientCode, serverCode } = props.project;

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const projectDetails = desc.split(":");
    const techs = technology.split(",");

    const boxStyle = ({ hover }) => ({
        background: `url(${thumb6})`,
        backgroundSize: 'cover',
        backgroundPosition: hover ? 'bottom' : 'top',

    })

    return (
        <Col>

            <div
                className='bg-dark background box'
                style={boxStyle({ hover })}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <div className='div-container d-flex justify-content-end'>
                    <div className='color-overlay'>
                        <div className='my-2 text-center'>

                            <a href={liveSite} target="blank" className="text-decoration-none  ">
                                <button className='modal-btn border-0 project-btn fw-bold'>Live</button>
                            </a>
                        </div>
                        <div className='text-center'>
                            <button onClick={handleShow} className='modal-btn border-0 project-btn fw-bold'>Details</button>
                        </div>
                    </div>
                </div>

            </div>

            {/* ======================= modal ========================= */}

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

export default Project;