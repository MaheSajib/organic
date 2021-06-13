import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './HeaderMenu.css';
import logo from '../../../img/Logo.png';

const HeaderMenu = () => {
    return (
        <Navbar className="nav transparent"  expand="lg">
            <Navbar.Brand className="text-dark logo" href="/"><h2><img src={logo} alt="" /> organic</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto p-3">
                    <Nav.Link className="text-dark mx-2 link" href="#home">Home</Nav.Link>
                    <Nav.Link className="text-dark mx-2 link" href="#projects">Products</Nav.Link>
                    <Nav.Link className="text-dark mx-2 link" href="#blogs">Blog</Nav.Link>
                    <Nav.Link className="text-dark mx-2 link" href="#about">About us</Nav.Link>
                    <a href="#" className="btn contact-button mx-2">Contact</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderMenu;