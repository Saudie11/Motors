import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import './Testi.css';

const testimonials = [
  {
    name: 'JOHN DOE',
    company: 'Toyota',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla, velit id laoreet hendrerit, sapien nisl varius dolor, eu consequat erat augue in eros. Fusce non orci vitae eros porta consequat non at ante. Etiam et ligula quam. In condimentum ex nec sapien luctus pulvinar. Curabitur quis leo quis ex aliquam interdum.',
  },
  {
    name: 'JOHN DOE',
    company: 'Toyota',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla, velit id laoreet hendrerit, sapien nisl varius dolor, eu consequat erat augue in eros. Fusce non orci vitae eros porta consequat non at ante. Etiam et ligula quam. In condimentum ex nec sapien luctus pulvinar. Curabitur quis leo quis ex aliquam interdum.',
  },
  // Add more testimonials as needed
];

const Testi = () => {
  return (
    <div className="testimonial-slider-container">
      <h2 className="testimonial-title">CUSTOMER TESTIMONIALS</h2>
      <div className="testimonial-subtitle">Vestibulum laoreet eu lorem vel tempor</div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        loop={true}
        autoplay={{ delay: 5000 }}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <p className="testimonial-text">{testimonial.testimonial}</p>
            <div className="testimonial-author">
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-company">{testimonial.company}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testi;
