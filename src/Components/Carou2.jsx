import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import Slide1 from '../images/slide_1.jpg'
import Slide2 from '../images/slide_2.jpg'
import skoda from '../images/Skoda.jpg'
import lambo from '../images/lambo.jpg'
import benz1 from '../images/benz1.jpg'
import benz2 from '../images/benz2.jpg'
import benz3 from '../images/benz3.jpg'
import benz4 from '../images/benz4.jpg'
import urus1 from '../images/urus1.jpeg'
import urus2 from '../images/urus2.jpeg'
import urus3 from '../images/urus3.jpeg'
import './Carou2.css';


const Carou2 = () => {
    const images = [
       Slide1,Slide2,skoda,lambo,benz1,benz2,benz3,benz4,urus1,urus2,urus3
        // Add more image paths as needed
      ];
    
      return (
        <div style={{ backgroundColor: '#1a1a1a', padding: '20px', textAlign: 'center', height:'300px' }}>
        <h2 style={{ color: '#fff' }}>MEDIA GALLERY</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ borderBottom: '2px solid #ffcc00', width: '50px' }}></div>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          style={{ paddingTop: '60px' }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index}`} style={{ width: '80%', height: '100px' }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      );
}

export default Carou2