import { useForm, ValidationError } from '@formspree/react';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css';
import contact from '../../image/contact.gif'
import { Fade } from 'react-reveal';


const Contact = () => {

    const [state, handleSubmit] = useForm("xayvqopv");
    if (state.succeeded) {
        return <p className="d-flex align-items-center justify-content-center fw-bold display-4">Thanks for your response!</p>;
    }

    return (
        <Container className='mt-5 pt-5' id="contact">
            <Fade down>
                <div className='my-4 pt-5'>
                    <h1 className='component-headings pb-2 '>Contact Me</h1>
                </div>
            </Fade>
            <Row xs={1} md={2}>
                <Fade left>
                    <Col>
                        <form onSubmit={handleSubmit} className="form-area">

                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Name*"
                                className="input-fields p-2"
                                required
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email*"
                                className="input-fields mt-2 p-2"
                                required
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message*"
                                className="input-fields mt-2 p-2"
                                required
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <button className='modal-btn mt-2 py-2 px-5 border-0 text-black fw-bold' type="submit" disabled={state.submitting}>
                                Send <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </Col>
                </Fade>

                <Col className='d-flex justify-content-center'>
                    <img src={contact} alt="contact" height="50%" />

                </Col>
            </Row>
        </Container>
    );
};

export default Contact;