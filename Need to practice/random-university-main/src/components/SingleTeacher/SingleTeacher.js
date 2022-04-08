import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleTeacher = (props) => {

    // sending data to about page dept head section

    const { name, thumb, email, phone, website } = props.teacher;
    return (
        <Col className='animate__animated animate__fadeIn'>
            <Card>
                <div className='d-flex align-items-center'>
                    <div className='text-center mx-2'>
                        <img src={thumb} className='rounded-circle' alt="" />
                    </div>
                    <div>
                        <Card.Body>
                            <h3 className='dark-text'>{name}</h3>
                            <small className='dark-text'><i className="far secondary-text fa-envelope"></i> {email}</small>
                            <br />
                            <small className='dark-text'><i className="fas secondary-text fa-phone"></i> {phone}</small>
                            <br />
                            <small className='dark-text'><i className="fas secondary-text fa-globe"></i> {website}</small>
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default SingleTeacher;