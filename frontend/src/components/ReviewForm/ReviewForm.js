import React, {useRef, useState} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './ReviewForm.css'

function ReviewForm() {
    const [showForm, setShowForm] = useState(true);
    const formName = useRef(null);
    const formLocation = useRef(null);
    const formReview = useRef(null);

    const handleDelete = () => {
        axios.delete('/reviews')
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewData = {
            name: formName.current.value,
            location: formLocation.current.value,
            review: formReview.current.value
        }
        setShowForm(false)
        axios.post('/reviews', reviewData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };
    return (
        <Container className="mb-5">
            <h2 className="text-center">{showForm ? 'Enter a Review!' : 'Thank you for sharing your thoughts!' }</h2>
            <Form className={showForm ? null : 'hide'} action="/reviews" method="POST" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control required ref={formName} name="name" type="text" placeholder="Enter your name"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Location</Form.Label>
                    <Form.Control required ref={formLocation} name="location" type="text" placeholder="Enter your location"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Review</Form.Label>
                    <Form.Control required ref={formReview} name="review" as="textarea" maxLength={120} rows={2} placeholder="Enter your review"></Form.Control>
                    <Form.Text>
                        maximum 120 characters
                    </Form.Text>
                </Form.Group>
                <button type="submit" className="btn btn-primary">Submit</button>    
            </Form>
        </Container>
    )
}

export default ReviewForm
