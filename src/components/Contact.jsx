import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container>
      <br />
      <br />
      <br />
      <h2 className="text-center">Contact Us</h2>
      <Row className="d-flex flex-column justify-content-center">
        <Col md={6}>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
            </Form.Group>

            <div className='mt-3'>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            </div>
          </Form>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default Contact;
