import React from 'react';
import CountUp from 'react-countup';
import './CarWithCounters.css'; // Custom CSS for styling
import Countcar from'../images/999.jpg'

const CarWithCounters = () => {
  return (
    <div className="car-container">
      <img
        className="car-image"
        src= {Countcar}
        alt="Car"
      />
      <div className="counter top-left">
        <CountUp end={17600} duration={10} /> <br /> CARS FOR SALE
      </div>
      <div className="counter top-right">
        <CountUp end={6230} duration={10} /> <br /> VISITORS PER DAY
      </div>
      <div className="counter bottom-left">
        <CountUp end={3500} duration={10} /> <br /> DEALER REVIEWS
      </div>
      <div className="counter bottom-right">
        <CountUp end={2250} duration={10} /> <br /> VERIFIED DEALERS
      </div>
    </div>
  );
};

export default CarWithCounters;
