import React from 'react';
import './WelcomeSection.css'; // Create this CSS file for styling
import about1 from '../images/about-us-1.jpeg';

const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <div className="welcome-image">
        <img src={about1} alt="Welcome" />
      </div>
      <div className="welcome-text">
        <h2>WELCOME TO THE <span className="highlight">MOTORS</span></h2>
        <p>
          Before we get ahead of ourselves, we want to welcome you to Loeber Motors.
          While nothing can replace thing on-the-lot experience.
        </p>
        <p>
          We appreciate you taking the time today to visit our web site. Our goal
          is to give you an interactive tour of our new and used inventory, as well
          as allow you to conveniently get a quote, schedule a service appointment,
          or apply for financing. The search for a luxury car is filled with high
          expectations. Undoubtedly, that has a lot to do with the vehicles you are
          considering, but at Motors, we think you should also have pretty high
          expectations for your dealership.
        </p>
        <p className="quote">— MIKEY DIXLES, President of Motors</p>
      </div>
    </div>
  );
};

export default WelcomeSection;
