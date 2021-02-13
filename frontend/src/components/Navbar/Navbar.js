import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Logo from './logo.png'
import './Navbar.css'

function Navigation() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    window.addEventListener('resize', ()=> setScreenWidth(window.innerWidth))
    const offset = screenWidth < 992 ? -312 : -80
    return (
        <>
        <Navbar collapseOnSelect sticky="top" className="navbar-container navbar-dark" expand="lg">
            <Navbar.Brand className="font-weight-light ml-3" href="#home">
                <img 
                    src={Logo}
                    width="60"
                    height="60" 
                    alt="logo"
                />
                Bongus Rice
            </Navbar.Brand>
            <Navbar.Toggle className="navbar-toggle" aria-controls="basic-navbar-nav">
                <span>
                <i className="fas fa-bars"></i>
                </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-item-list">
                    <li className="nav-item py-0">
                        <Link                        
                            to="home"
                            activeClass="visible"
                            className="nav-link"
                            spy={true}
                            smooth={true}
                            offset={offset-100}
                            duration={500}
                            >
                            <Nav.Link className="pl-2" eventKey="1" href="">Home</Nav.Link> 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="about"
                            activeClass="visible"
                            className="nav-link"
                            spy={true}
                            smooth={true}
                            offset={offset}
                            duration={500}
                            >
                            <Nav.Link className="pl-2" eventKey="3" href="">About Us</Nav.Link> 
                        </Link>
                    </li>
                     <li className="nav-item">
                        <Link
                            to="menu"
                            activeClass="visible"
                            className="nav-link"
                            spy={true}
                            smooth={true}
                            offset={offset}
                            duration={500}
                            >
                            <Nav.Link className="pl-2" eventKey="2" href="">Menu</Nav.Link> 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="reviews"
                            activeClass="visible"
                            className="nav-link"
                            spy={true}
                            smooth={true}
                            offset={offset-110}
                            duration={500}
                            >
                            <Nav.Link className="pl-2" eventKey="4" href="">Reviews</Nav.Link> 
                        </Link>
                    </li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default Navigation
