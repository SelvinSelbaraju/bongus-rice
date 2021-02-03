import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import { reviewData } from './ReviewData'
import './Reviews.css'

function Reviews() {
    return (
        <Container className="text-center my-5">
            <h2>Reviews</h2>
            <h4 className="mb-3">See what other people have to say!</h4>
        <Carousel id="reviews" className="text-center">
            {
                
                reviewData.map(item => {
                    const { review, name, location} = item
                    return (
                        <Carousel.Item className="review-item">
                        <div className="review-size px-5 pt-3">
                            
                        </div>
                        <Carousel.Caption>
                            <p className="mt-md-3">{review}</p>
                            <h5>{name}</h5>
                            <h6>{location}</h6>
                        </Carousel.Caption>
                        </Carousel.Item>   
                    )
                })  
            }
        </Carousel>
        </Container>
    )
}

export default Reviews
