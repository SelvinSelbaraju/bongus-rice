import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './About.css'

const imgUrl = 'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/69790305_2694371090576189_5308096089092521984_n.jpg?_nc_cat=110&ccb=2&_nc_sid=174925&_nc_ohc=Abi9GS9g6YYAX8tQ-LO&_nc_ht=scontent-lhr8-1.xx&oh=0955ecf8021476a5597407fbc2a07842&oe=6040461D'

function About() {
    return (
        <Container fluid id="about" className="my-5" >
            <Row>
                <Col xs={12} md={6}>
                    <img className="img-fluid" src={imgUrl} alt="Me" height="800" width="800" />
                </Col>
                <Col xs={12} md={6} className="text-center mt-3 mt-md-0">
                    <h2>About Us</h2>
                    <p className="mt-3 mt-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis, animi hic aliquam harum neque vero ab provident repellendus, sequi aspernatur dolore, voluptatibus odio voluptate cumque nemo? Nobis, nemo veniam.</p>
                    <p className="mt-3 mt-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis, animi hic aliquam harum neque vero ab provident repellendus, sequi aspernatur dolore, voluptatibus odio voluptate cumque nemo? Nobis, nemo veniam.</p>
                    <p className="mt-3 mt-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis, animi hic aliquam harum neque vero ab provident repellendus, sequi aspernatur dolore, voluptatibus odio voluptate cumque nemo? Nobis, nemo veniam.</p>
                    <p className="mt-3 mt-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis, animi hic aliquam harum neque vero ab provident repellendus, sequi aspernatur dolore, voluptatibus odio voluptate cumque nemo? Nobis, nemo veniam.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default About
