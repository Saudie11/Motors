import './Inventroy.css';
import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice'; // Adjust path as necessary



import benz1 from '../images/benz1.jpg';
import benz2 from '../images/benz2.jpg';
import benz3 from '../images/benz3.jpg';

import Nissan1 from '../images/Nissan1.jpg';
import tesla1 from '../images/tesla1.jpeg';
import tesla2 from '../images/tesla2.jpeg';
import Nissan3 from'../images/Nissan3.jpg';


const Invent = () => {
  const [hoveredInventroy, setHoveredInventroy] = useState(null);

    const Invent = [  
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
    {
      id: 7,
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
      id: 8,
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
      id: 9,
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
    setHoveredInventroy(id);
  };

  const handleMouseLeave = () => {
    setHoveredInventroy(null);
  };

  const navigate = useNavigate();
   // Initialize navigate function
   const dispatch = useDispatch();

  const handleNavigate = (id) => {
    navigate(`/car-description/${id}`);
  };

  const handleAddToCart = (car) => {
    dispatch(addToCart(car)); // Dispatch addToCart action
    navigate('/cart'); // Optionally navigate to the cart page
  };
  
  return (
    <div className="blog-container2">
      <h1>VEHICLES FOR SALE</h1>



      
      <div className="blogs-list2">
        {Invent.map((Invent) => (
          <div
            key={Invent.id}
            className="blog-item2"
            onMouseEnter={() => handleMouseEnter(Invent.id)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleNavigate(Invent.id)} // Use handleNavigate
          >
            <div className="image-container2">
              {Invent.special && <div className="special-badge2">SPECIAL</div>}
              <img
                src={hoveredInventroy === Invent.id ? Invent.images.hover : Invent.images.default}
                alt={Invent.title}
                className="blog-image2"
              />
            </div>
            <div className="blog-details2">
              <h3>{Invent.title}</h3>
              <div className="price-button3">
                <span className="priceb3">{Invent.price}</span>
                <button
                  className="buy-button3"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the parent div's onClick
                    handleAddToCart(Invent); // Add to cart
                  }}
                >
                  BUY ONLINE
                </button>
              </div>
              <div className="additional-details2">
                <span>{Invent.mileage}</span>
                <span>{Invent.transmission}</span>
                <span>{Invent.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};


export default Invent;
