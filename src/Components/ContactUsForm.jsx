import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUsForm = () => {
  return (
    <Container className="my-5">
      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 className="text-center mb-4">CONTACT US</h2>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name*</Form.Label>
                <Form.Control type="text" placeholder="Enter your first name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name*</Form.Label>
                <Form.Control type="text" placeholder="Enter your last name" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control type="email" placeholder="email@domain.com" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Phone number" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formComment">
                <Form.Label>Comment</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message..." />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formSubscribe" className="mt-3">
            <Form.Check type="checkbox" label="Subscribe and Get latest updates and offers by Email" />
          </Form.Group>
          <div className="text-center mt-4">
            <Button variant="primary" type="submit" style={{ backgroundColor: '#007bff', borderColor: '#007bff', padding: '10px 20px', fontSize: '16px' }}>
              SUBMIT
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default ContactUsForm;
 