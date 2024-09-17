import React, { useState } from 'react';
import './Blog.css';
import benz1 from '../images/benz1.jpg';
import benz2 from '../images/benz2.jpg';
import benz3 from '../images/benz3.jpg';

import Nissan1 from '../images/Nissan1.jpg';
import Nissan2 from '../images/Nissan2.jpg';
import tesla1 from '../images/tesla1.jpeg';
import tesla2 from '../images/tesla2.jpeg';
import Nissan3 from'../images/Nissan3.jpg';

const Blog = () => {
  const [hoveredBlog, setHoveredBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: '2016 MERCEDES-BENZ C-CL',
      images: {
        default: benz1, 
        hover: benz2,
      },
      price: '$35 000',
      special: true,
      mileage: '100 mi',
      transmission: 'Automatic',
      rating: '18/26',
      description: 'Description for 2016 MERCEDES-BENZ C-CL',
    },
    {
      id: 2,
      title: 'NISSAN ALTIMA 2.5 SL, L',
      images: {
        default: Nissan1,
        hover: Nissan3,
      },
      price: '$18 000',
      special: true,
      mileage: '150 mi',
      transmission: 'Automatic',
      rating: '20/30',
      description: 'Description for NISSAN ALTIMA 2.5 SL, L',
    },
    {
      id: 3,
      title: '2021 NEW TESLA ROADSTER',
      images: {
        default: benz3,
        hover: tesla2,
      },
      price: '$109 000',
      special: false,
      mileage: '130 mi',
      transmission: 'Automatic',
      rating: '18/100',
      description: 'Description for 2021 NEW TESLA ROADSTER',
    },
    {
      id: 4,
      title: '2021 NEW TESLA ROADSTER',
      images: {
        default: tesla1,
        hover: tesla2,
      },
      price: '$109 000',
      special: false,
      mileage: '130 mi',
      transmission: 'Automatic',
      rating: '18/100',
      description: 'Description for 2021 NEW TESLA ROADSTER',
    },
    {
      id: 5,
      title: '2021 NEW TESLA ROADSTER',
      images: {
        default: tesla1,
        hover: tesla2,
      },
      price: '$109 000',
      special: false,
      mileage: '130 mi',
      transmission: 'Automatic',
      rating: '18/100',
      description: 'Description for 2021 NEW TESLA ROADSTER',
    },
    {
      id: 6,
      title: '2021 NEW TESLA ROADSTER',
      images: {
        default: tesla1,
        hover: tesla2,
      },
      price: '$109 000',
      special: false,
      mileage: '130 mi',
      transmission: 'Automatic',
      rating: '18/100',
      description: 'Description for 2021 NEW TESLA ROADSTER',
    },
    // Add more blog objects as needed
  ];

  const handleMouseEnter = (id) => {
    setHoveredBlog(id);
  };

  const handleMouseLeave = () => {
    setHoveredBlog(null);
  };

  return (
    <div className="blog-container">
      <h2>Recent <span className="highlight">Cars</span></h2>
      <p className="description">Curabitur tellus leo, euismod sit amet gravida at, egestas sed commodo.</p>
      <div className="blogs-list">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="blog-item"
            onMouseEnter={() => handleMouseEnter(blog.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="image-container">
              {blog.special && <div className="special-badge">SPECIAL</div>}
              <img
                src={hoveredBlog === blog.id ? blog.images.hover : blog.images.default}
                alt={blog.title}
                className="blog-image"
              />
            </div>
            <div className="blog-details">
              <h3>{blog.title}</h3>
              <div className="price-button">
                <span className="priceb">{blog.price}</span>
                <button className="buy-button">BUY ONLINE</button>
              </div>
              <div className="additional-details">
                <span>{blog.mileage}</span>
                <span>{blog.transmission}</span>
                <span>{blog.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
