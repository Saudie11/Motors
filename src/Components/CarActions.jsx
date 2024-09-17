import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './CarActions.css';

const CarActions = () => {
  return (
    <Container className="car-actions">
      <Row>
        <Col md={6} className="action-item">
          <div className="action-content">
            <div className="icon">&#128663;</div>
            <h3>LOOKING FOR A CAR?</h3>
            <p>Our cars are delivered fully-registered with all requirements completed. We'll deliver your car wherever you are.</p>
            <Button variant="primary">INVENTORY</Button>
          </div>
        </Col>
        <Col md={6} className="action-item">
          <div className="action-content sell">
            <div className="icon">&#128176;</div>
            <h3>WANT TO SELL A CAR?</h3>
            <p>Receive the absolute best value for your trade-in vehicle. We even handle all paperwork. Schedule appointment!</p>
            <Button variant="primary">SELL YOUR CAR</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CarActions;
