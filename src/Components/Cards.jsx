import React from 'react';
import { Container,Row,Col,Card } from 'react-bootstrap';


const Cards = () => {
    return (

        <div>

<Container>
<Row>
  <Col>
  <Card style={{ width: '20rem', marginTop:'5rem'}}>
    <h5 className="icon">@</h5>
    <h6 className="title">WIDE RANGE OF BRANDS</h6>
    <p className="description">
      With a robust selection of popular vehicles on hand, as well as leading vehicles from BMW and Ford.
    </p>
    </Card>
  </Col>
  <Col>
  <Card style={{ width: '20rem' , marginTop:'5rem'}}>
    <h5 className="icon">=</h5>
    <h6 className="title">TRUSTED BY THOUSANDS</h6>
    <p className="description">
      With a robust selection of popular vehicles on hand, as well as leading vehicles from BMW and Ford.
    </p>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '20rem' , marginTop:'5rem'}}>
    <h5 className="icon">@</h5>
    <h6 className="title">SERVICE & MAINTENANCE</h6>
    <p className="description">
    Our stress-free finance department that can find financial solutions to save you money.
    </p>
    </Card>
  </Col>
  </Row>
  </Container>
  </div>
)}

export default Cards;