import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleBlog.css'

const SingleBlog = (props) => {

    const { title, place, country, thumb, description, starCount, cost } = props.blog;

    // state for increment value on heart icon click
    const [count, setCount] = useState(starCount);
    return (

        <Col className='animate__animated animate__zoomIn'>
            <Card className='card-top-img'>
                <div className='img-cont'>
                    <Card.Img variant="top" src={thumb} height='200px' />
                </div>

                <Card.Body>
                    <h2 className='secondary-text'>{title}</h2>
                    <h4 className='dark-text fw-bold'>{place}, {country}</h4>
                    <p className='text-secondary'>{description}</p>
                </Card.Body>
                <Card.Footer>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center '>
                            <button onClick={() => setCount(count + 1)} className=' blog-btn'><i className="far fa-heart"></i></button>
                            <p className='mt-3 dark-text fw-bold'>{count}</p>
                        </div>
                        <div>
                            <small className='text-muted'>updated {cost} ago</small>
                        </div>
                    </div>


                </Card.Footer>
            </Card>
        </Col>
    );
};

export default SingleBlog;