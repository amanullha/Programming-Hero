import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import MyProject from './MyProject';


const MyProjects = () => {

    const [projects, setProjects] = useState([]);
    projects.splice(4, projects.length);

    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    const history = useHistory();
    const handleClick = () => {
        history.push('/projects');
    }


    return (
        <Container className='my-5 pt-5' id="projects">
            <div className='mb-3'>
                <h1 className='component-headings pb-2 '>Recent Projects</h1>
            </div>
            <Row xs={1} md={2} className="g-4">
                {
                    projects.map(project => <MyProject
                        key={project.id}
                        project={project}
                    >
                    </MyProject>)
                }
            </Row>
            <div className='mt-3 text-center'>
                <button onClick={handleClick} className="border-0 modal-btn text-dark fw-bold py-2">
                    View More Projects
                </button>
            </div>
        </Container>
    );
};

export default MyProjects;