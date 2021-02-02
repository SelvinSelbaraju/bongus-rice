import React from 'react'
import { Col } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import { vegetarianItems, nonVegetarianItems } from './MenuItems'
import './Menu.css'

function Menu() {
    return (
        <Container id="menu" className="mt-5">
            <Col className="menu-tab text-center">
            <h3>Menu</h3>
            </Col>
            <Row className="text-center">
                <Col xs={12} md={6}>
                    <h4>Plant-Based</h4>
                    {
                        vegetarianItems.map(item => {
                            const { title, dietary, description } = item
                            return (
                                <Card bg="dark">
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Subtitle className="text-muted">{dietary}</Card.Subtitle>
                                    <Card.Body>{description}</Card.Body>
                                </Card>
                            ) 
                        })
                    }
                </Col>
                <Col xs={12} md={6}>
                    <h4>Other</h4>
                    {
                        nonVegetarianItems.map(item => {
                            const { title, dietary, description } = item
                            return (
                                <Card bg="dark">
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Subtitle className="text-muted">{dietary}</Card.Subtitle>
                                    <Card.Body>{description}</Card.Body>
                                </Card>
                            ) 
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Menu
