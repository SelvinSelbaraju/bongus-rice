import React from 'react'
import { scroller, Link } from 'react-scroll'
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Logo from './logo.png'
import './Navbar.css'

function Navigation() {
    const handleScroll = id => {
        scroller.scrollTo(id, {smooth: true, spy: true, offset: -300, activeClass: 'visible-bean'})
    }
    return (
        <>
        <Navbar collapseOnSelect sticky="top" className="navbar-container navbar-dark" expand="lg">
            <Navbar.Brand className="font-weight-light" href="#home">
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
                <i class="fas fa-bars fa-2x"></i>
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
                            offset={-370}
                            duration={500}
                            >
                            <Nav.Link className="pl-2" eventKey="1" href="">Home</Nav.Link> 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            
                            to="menu"
                            activeClass="visible"
                            className="nav-link"
                            spy={true}
                            smooth={true}
                            offset={-370}
                            duration={500}
                            >
                            <Nav.Link className="pl-2" eventKey="2" href="">Menu</Nav.Link> 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            
                            to="about"
                            activeClass="visible"
                            className="nav-link"
                            spy={true}
                            smooth={true}
                            offset={-370}
                            duration={500}
                            >
                            <Nav.Link className="pl-2" eventKey="3" href="">About Us</Nav.Link> 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            
                            to="reviews"
                            activeClass="visible"
                            className="nav-link"
                            spy={true}
                            smooth={true}
                            offset={-370}
                            duration={500}
                            >
                            <Nav.Link className="pl-2" eventKey="4" href="">Reviews</Nav.Link> 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            
                            to="contact"
                            activeClass="visible"
                            className="nav-link"
                            spy={true}
                            smooth={true}
                            offset={-370}
                            duration={500}
                            >
                            <Nav.Link className="pl-2" eventKey="5" href="">Contact Us</Nav.Link> 
                        </Link>
                    </li>
                    {/* <Nav.Link eventKey="1" onClick={()=> handleScroll('home')} href="">Home</Nav.Link>
                    <Nav.Link eventKey="2" href="#">About Us</Nav.Link>
                    <Nav.Link eventKey="3" onClick={()=> handleScroll('menu')} href="">Menu</Nav.Link>
                    <Nav.Link eventKey="4" href="#">Reviews</Nav.Link>
                    <Nav.Link eventKey="5" href="#">Contact Us</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default Navigation
