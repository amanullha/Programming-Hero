import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css'

const Navigation = () => {
    return (
        <div>
            <Navbar className='nav-bg' collapseOnSelect expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand className='text-white' href="#home">Khurshida <span className='primary-text'>Jahan</span></Navbar.Brand>
                    <Navbar.Toggle className='bg-light' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto d-lg-flex align-items-center">
                            <Nav.Link className='navlinks text-white' href="/#home">Home</Nav.Link>
                            <Nav.Link className='navlinks text-white' href="/#about">About</Nav.Link>
                            <Nav.Link className='navlinks text-white' href="/#skills">Skills</Nav.Link>
                            <Nav.Link className='navlinks text-white' href="/#projects">Projects</Nav.Link>
                            <Nav.Link className='navlinks text-white' href="/#contact">Contact</Nav.Link>
                            <Nav.Link className='navlinks text-white' href="/#achivements">Achivements</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;