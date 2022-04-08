import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../img/logo.jpg'

const Header = () => {

    const activeStyle = {
        backgroundColor: '#012e2c'
    }

    return (
        <Navbar className='nav-container' expand="lg">
            <Container>
                {/* logo */}
                <Navbar.Brand>
                    <img
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        <NavLink activeStyle={activeStyle} className='light-text nav-text text-decoration-none fw-bold px-3 py-2' to='/home'>
                            HOME
                        </NavLink>

                        <NavLink activeStyle={activeStyle} className='light-text nav-text text-decoration-none fw-bold px-3 py-2' to='/courses'>
                            COURSES
                        </NavLink>

                        <NavLink activeStyle={activeStyle} className='light-text nav-text text-decoration-none fw-bold px-3 py-2' to='/events'>
                            EVENTS
                        </NavLink>

                        <NavLink activeStyle={activeStyle} className='light-text nav-text text-decoration-none fw-bold px-3 py-2' to='/blogs'>
                            BLOGS
                        </NavLink>

                        <NavLink activeStyle={activeStyle} className='light-text nav-text text-decoration-none fw-bold px-3 py-2' to='/about'>
                            ABOUT US
                        </NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;