import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TestimonialSlider.css'; // Custom CSS for additional styling
import bg1 from '../images/bg-1.jpg';
import Test1 from '../images/Test1.jpg';
import Test2 from '../images/Test2.jpg';


const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      quote: 'This is the first testimonial.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident saepe fuga voluptates expedita consectetur ipsam eveniet ratione, a rem esse ea quas incidunt vero suscipit dolore? Fuga omnis aliquam quos. ',
      mainImage: bg1,
      profileImage: Test1,
    },
    {
      id: 2,
      name: 'Jane Smith',
      quote: 'This is the second testimonial.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident saepe fuga voluptates expedita consectetur ipsam eveniet ratione, a rem esse ea quas incidunt vero suscipit dolore? Fuga omnis aliquam quos.',
      mainImage: bg1,
      profileImage: Test2,
    },
    // Add more testimonials as needed
  ];

  const TestimonialSlider = () => {
    return (
      <Carousel controls={false} indicators={false} interval={3000} pause={false}>
        {testimonials.map((testimonial) => (
          <Carousel.Item key={testimonial.id}>
            <div className="testimonial-container">
              <img
                className="main-image"
                src={testimonial.mainImage}
                alt={testimonial.name}
              />
              <img
                className="profile-image rounded-circle"
                src={testimonial.profileImage}
                alt={testimonial.name}
              />
              <div className="testimonial-content">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.quote}</p>
                
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };
  
  export default TestimonialSlider;
  