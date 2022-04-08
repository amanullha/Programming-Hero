import React from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import useData from '../../hooks/useData';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blogs.css'

const Blogs = () => {

    const [blogs] = useData('./blogsFakedata.json');

    return (

        <div>
            <div className='blog-img container-banner'>
                <Container>
                    <div className='p-5 text-center'>
                        <h1 className='light-bg display-2 p-5 mt-5 fw-bold animate__animated animate__fadeInLeft'>Check out Our Top Blogs</h1>
                    </div>

                </Container>

            </div>
            <Container>
                <h1 className='mt-5 pb-3 secondary-text text-center animate__animated animate__fadeInDown'>Top Blogs</h1>
                <CardGroup>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            blogs.map(blog => <SingleBlog
                                key={blog.id}
                                blog={blog}
                            ></SingleBlog>)
                        }
                    </Row>
                </CardGroup>
            </Container>
        </div>

    );
};

export default Blogs;