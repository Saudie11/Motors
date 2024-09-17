import React from 'react';
import './CoreValuesSection.css'; // Create this CSS file for styling
import about2 from '../images/about-us-2.jpeg'

const CoreValuesSection = () => {
  return (
    <div className="core-values-section">
      <div className="core-values-text">
        <h2>CORE VALUES</h2>
        <p>
          We go through extensive factory training so that we may provide you with the
          knowledge you need to make an educated decision in choosing the vehicle that is
          right for your lifestyle.
        </p>
        <ul>
          <li>Stress-free finance department.</li>
          <li>Robust selection of popular vehicles.</li>
          <li>350 offers on site, trusted by a community.</li>
          <li>Maintain your car to stay safe on the road.</li>
          <li>We know how to handle a wide range of car services.</li>
        </ul>
      </div>
      <div className="core-values-image">
        <img src={about2} alt="Core Values" />
      </div>
    </div>
  );
};

export default CoreValuesSection;
