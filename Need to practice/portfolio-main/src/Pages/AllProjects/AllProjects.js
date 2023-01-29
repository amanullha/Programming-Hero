import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Project from './Project';

const AllProjects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    return (
        <div className='page-bg' >
            <Navigation></Navigation>
            <div>
                <Container className='mt-5 pt-5'>
                    <div className='mb-3'>
                        <h1 className='component-headings pb-2'>All Projects</h1>
                    </div>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            projects.map(project => <Project
                                key={project.id}
                                project={project}
                            >
                            </Project>)
                        }
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default AllProjects;