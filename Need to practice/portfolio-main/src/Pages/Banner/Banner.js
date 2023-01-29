import React from 'react';
import Typical from 'react-typical';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../image/khurshida.png';
import { Fade } from 'react-reveal';
import './Banner.css'

const Banner = () => {
    return (
        <Container className='banner-area d-flex align-items-center mt-3' id="home">
            <div>
                <Row xs={1} md={2}>
                    <Col className='text-center mt-5'>
                        <Fade left>
                            <img src={img} alt="" className='w-75' />
                        </Fade>
                        <div className='mt-4'>
                            <p className='text-light'><i className="fas fa-envelope"></i> meemrumi59@gmail.com</p>
                            <a target='_blank' rel="noreferrer" href='https://github.com/Khurshida-Meem' className='text-light' data-toggle="tooltip" data-placement="bottom" title="Github"><i className="fab fa-github linkicon"></i></a>
                            <a target='_blank' rel="noreferrer" href='https://www.facebook.com/khurshida.meem/' className='text-light' data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fab fa-facebook linkicon"></i></a>
                            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/khurshida-meem-383488154/' className='text-light' data-toggle="tooltip" data-placement="bottom" title="LinkedIn"><i className="fab fa-linkedin linkicon"></i></a>
                            <a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1HdjClpAYvEZv7pCs-QECjcjCvZX9y1sW/view?usp=sharing' className='text-light' data-toggle="tooltip" data-placement="bottom" title="Resume Drive Link"><i className="fab fa-google-drive linkicon"></i></a>
                        </div>
                    </Col>

                    <Fade right>
                        <Col className='mt-5'>
                            <div>
                                <h1>Hi There!</h1>
                                <br />
                                <h1>I am Khurshida Jahan Meem</h1>
                                <h3>
                                    <Typical
                                        className='primary-text'
                                        steps={['A Web Developer', 1000, 'A Frontend Developer', 1000, 'A Full Stack Developer', 1000]}
                                        loop={Infinity}
                                        wrapper="p"
                                    /></h3>

                                <div>
                                    <a className='animated-button1 text-black px-4 py-2 ' href="https://drive.google.com/uc?export=download&id=1HdjClpAYvEZv7pCs-QECjcjCvZX9y1sW" data-toggle="tooltip" data-placement="bottom" title="Download Resume">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <strong>Download Resume</strong> <i className="fas fa-download"></i></a>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <a className='py-2 px-3 oj-btn' target='_blank' rel="noreferrer" href='http://codeforces.com/profile/fluffy_umbrella'>Codeforces</a>
                                <a className='py-2 px-3 oj-btn ms-2' target='_blank' rel="noreferrer" href="https://uhunt.onlinejudge.org/id/957977">UVA OJ</a>
                                <a className='py-2 px-3 oj-btn ms-2' target='_blank' rel="noreferrer" href="https://www.beecrowd.com.br/judge/en/profile/221775?origem=1">URI OJ</a>
                            </div>
                        </Col>
                    </Fade>
                </Row>
            </div>
        </Container >
    );
};

export default Banner;