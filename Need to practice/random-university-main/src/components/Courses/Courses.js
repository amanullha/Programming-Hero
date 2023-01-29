import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useData from '../../hooks/useData';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Courses.css'

const Courses = () => {

    // load data from hooks useData function
    const [courses] = useData('./fakedata.json');

    return (
        <div>
            {/*=========== courses Banner area ====================*/}
            <div className='course-banner container-banner'>
                <Container>
                    <div className='p-5 text-center'>
                        <h1 className='light-bg display-2 p-5 mt-5 fw-bold animate__animated animate__fadeInLeft'>We are Providing Top Rated Courses</h1>

                    </div>

                </Container>
            </div>

            {/* =============== all courses area =========================== */}
            <Container>
                <h1 className='text-center secondary-text animate__animated animate__fadeInRight mt-5 '>Our Courses</h1>
                {/* show data from single course */}
                <Row xs={1} md={2} lg={3} className="g-4 mt-3">
                    {
                        courses.map(course => <SingleCourse
                            key={course.id}
                            course={course}
                            cost={course.cost}
                        ></SingleCourse>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Courses;