import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MenuBowl from './icons/MenuBowl'
import OrderBowl from './icons/OrderBowl'
import FoodPic from './9.jpg'
import './LandingPage.css'

function LandingPage() {
    return (
        <Container fluid id="home" className="landing-container mt-3 mt-md-5">
            <Row className="align-items-center">
                <Col className="text-center" xs={12} md={6}>
                    <h2 className="font-weight-light">fresh, ethical and good for the soul</h2>
                    <p className="mt-5">Our mission is to deliver traditional Asian food using fresh, natural and organic ingredients. We want to share our food with the world and give everyone nutritious yet affordable food.</p>
                    <img className="align-middle img-fluid d-md-none mt-5" src={FoodPic} alt="" height="800" width="800"/>
                    <Row className="align-items-end mt-5 mx-1">
                        <MenuBowl/>
                        <OrderBowl />
                    </Row>
                </Col>
                <Col xs={12} md={6}>
                    <img className="align-middle img-fluid d-none d-md-block" src={FoodPic} alt=""/>
                </Col>
            </Row>
        </Container>
    )
}

export default LandingPage
