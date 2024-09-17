import React from 'react';
import { Container, Row, Col, Accordion, Card, useAccordionButton } from 'react-bootstrap';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 51.5033,
  lng: -0.1195
};

const CustomToggle = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <Card.Header onClick={decoratedOnClick} style={{ cursor: 'pointer' }}>
      {children}
    </Card.Header>
  );
};

const ContactInfo = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <Accordion defaultActiveKey="0">
            <Card>
              <CustomToggle eventKey="0">PARTS</CustomToggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h5>Address</h5>
                  <p>1840 E Garvey Ave South West Covina, CA 91791</p>
                  <h5>Sales Phone</h5>
                  <p>(888) 354-1781</p>
                  <h5>Sales Hours</h5>
                  <p>Mon - Fri: 09:00AM - 09:00PM<br />Saturday: 09:00AM - 07:00PM<br />Sunday: Closed</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <CustomToggle eventKey="1">SALES</CustomToggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  {/* Add sales information here */}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <CustomToggle eventKey="2">RENTING</CustomToggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  {/* Add renting information here */}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
        <Col md={8}>
          <LoadScript googleMapsApiKey="AIzaSyAEaN_aRA4cvK9kFNEjD9ch-t-AygCCBzI">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              { /* Child components, such as markers, info windows, etc. */ }
            </GoogleMap>
          </LoadScript>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactInfo;
