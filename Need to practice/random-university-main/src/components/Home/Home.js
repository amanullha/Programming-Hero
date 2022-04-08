import React from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Notes from '../Notes/Notes';
import './Home.css'
import useData from '../../hooks/useData';
import HomeAbout from '../HomeAbout/HomeAbout';
import Facilities from '../Facilities/Facilities';
import SingleCourse from '../SingleCourse/SingleCourse';
import SingleBlog from '../SingleBlog/SingleBlog';


const Home = () => {

    const [courses] = useData('./fakedata.json');
    const [blogs] = useData('./blogsFakedata.json');
    courses.splice(4, 4);
    blogs.splice(3, blogs.length);


    return (
        <div>
            {/*======================= banner area =============*/}
            <Banner></Banner>
            {/* 3 sticky notes */}
            <Notes></Notes>
            {/* =============== we offer area ================= */}
            <Facilities></Facilities>
            {/* ===================== offer courses area ================== */}
            <Container>
                <div className='mt-5 pt-5'>
                    <h4 className='secondary-text'>Our Courses</h4>
                    <hr className='separator' />
                    <h2 className='secondary-text'>Featured Courses</h2>
                    {/* Showing 4 courses featured loaded from fakedb and loaded properties from single course */}

                    <Row xs={1} md={2} className="g-4 mt-2">

                        {
                            courses.map(course => <SingleCourse
                                key={course.id}
                                course={course}
                            ></SingleCourse>)
                        }
                    </Row>
                </div>
                {/* about of home loaded from HomeAbout */}
                <HomeAbout></HomeAbout>
                {/* ========= top blogs================ */}
                <div className='mt-5 pt-5'>
                    <h4 className='secondary-text'>Blogs</h4>
                    <hr className='separator' />
                    <h2 className='secondary-text'>Featured Blogs</h2>
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
                </div>
            </Container>


        </div>
    );
};

export default Home;