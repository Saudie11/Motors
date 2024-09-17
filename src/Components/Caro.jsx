import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Slide1 from '../images/slide_1.jpg';
import Slide2 from '../images/slide_2.jpg';
import './Caro.css';
import {Button, Container,} from 'react-bootstrap';


function Caro() {
  return (
    <Carousel>
      <Carousel.Item>
<img className='Slide1' src={Slide1} alt="Img" />
        <Carousel.Caption>
        <div className="offer-card">
      <Container className="text-center offer-content">
        <h1>Mercedes-Benz AMG GT 2017</h1>
        <h3 className="price">$320 <span className="per-month">/MO</span></h3>
        <h4>For 36 Months</h4>
        <Button variant="outline-primary" className="test-drive">TEST DRIVE</Button>
        <Button variant="primary" className="learn-more">LEARN MORE</Button>
      </Container>
    </div>  
                </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='Slide2' src={Slide2} alt="Img" />
        <Carousel.Caption>
        <div className="offer-card2">
      <Container className="text-left offer-content2">
        <h3 className="offer-title">2018 NEW TOYOTA HIGHLANDER LE</h3>
        <p className="offer-details">$499 per Month for 24 months. 0% APR Representative</p>
        <Button variant="outline-light" className="test-drive2">TEST DRIVE</Button>
        <Button variant="primary" className="learn-more2">LEARN MORE</Button>
      </Container>
      </div>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Caro;