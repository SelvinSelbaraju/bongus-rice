import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Footer.css'

function Footer() {
    return (
        <Container id="footer" fluid>
            <Row className="h-100 align-items-center text-center">
                <Col xs={12} className="px-0">
                    <h4>Address</h4>
                </Col>
                <Col xs={12} className="px-0">
                    <h4>Phone Number</h4>
                </Col>
                <Col xs={12} className="px-0">
                    <h4>bongusrice@gmail.com</h4>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
