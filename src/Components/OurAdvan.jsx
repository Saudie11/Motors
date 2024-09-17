import Accordion from 'react-bootstrap/Accordion';
import React from 'react';


function OurAdvan() {
  return (
    <Accordion defaultActiveKey="0" style={{width: '50%',padding :'30px'}}>
      <Accordion.Item eventKey="0">
        <h1>OUR ADVANTAGES</h1>
        <Accordion.Header >Do You Want to sell a car?</Accordion.Header>
        <Accordion.Body>
        What’s your car worth? Receive the absolute best value for your trade-in vehicle. We even handle all paperwork. Schedule your appointment today!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Are You looking for a new car?</Accordion.Header>
        <Accordion.Body>
        Our cars are delivered fully-registered with all requirements completed. We’ll deliver your car wherever you are.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How to schedule a service online?</Accordion.Header>
        <Accordion.Body>
        Maecenas consectetur nulla dolor, ac porttitor nunc hendrerit quis. Proin vitae rhoncus purus, id commodo massa. Aliquam erat volutpat.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default  OurAdvan;