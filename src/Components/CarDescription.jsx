
import React from 'react';
import { useParams } from 'react-router-dom';
import './CarDescription.css';
import benz1 from '../images/benz1.jpg';
import benz2 from '../images/benz2.jpg';
import benz3 from '../images/benz3.jpg';

import Nissan1 from '../images/Nissan1.jpg';
import tesla1 from '../images/tesla1.jpeg';
import tesla2 from '../images/tesla2.jpeg';
import Nissan3 from'../images/Nissan3.jpg';



const CarDescription = () => {
  const Invent = [  
    {     id: 1,
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
  const { id } = useParams();
  const car = Invent.find((car) => car.id === parseInt(id));

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="car-description-page">
    <div className="left-section">
      <div className="car-title">
        <h3>{car.title.split(' ')[0]} {car.title.split(' ')[1]}</h3>
        <h2>{car.title.split(' ')[2]} {car.title.split(' ')[3]}</h2>
      </div>
      <div className="car-image">
        <img src={car.images.default} alt={car.title} />
        {car.special && (
          <div className="special-offer">
            <span>Special</span>
          </div>
        )}
      </div>
      <div className="image-actions">
        {/* Add any icons or actions related to the car image */}
      </div>
    </div>

    <div className="right-section">
      <div className="pricing-info">
        <div className="buy-now">
          <div>Buy For: <span>{car.price}</span></div>
          {/* Assume MSRP can be calculated or stored */}
          <div>MSRP: <span>$40,000</span></div>
        </div>
        <div className="instant-savings">Instant Savings: <span>$5,000</span></div>
      </div>
      <div className="dealer-info">
        <div className="dealer-photo">
          <img src="dealer-photo.jpg" alt="Dealer" />
        </div>
        <div className="dealer-details">
          <h4>Stylemix Themes</h4>
          <p>Private Seller</p>
          <p>Phone: 894****</p>
        </div>
      </div>
      <div className="car-details">
        <div>Body: Sedan</div>
        <div>Mileage: {car.mileage}</div>
        <div>Transmission: {car.transmission}</div>
      </div>
    </div>
  </div>
  );
};

export default CarDescription;
