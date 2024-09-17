import React from 'react';
import WelcomeSection from './WelcomeSection';
import CoreValuesSection from './CoreValuesSection';
import './About.css';
import Footer from './Footer';
import Carou2 from './Carou2';  
import OurAdvan from './OurAdvan';
import Testi from './Testi';

function About() {
  return (
    <div className="About">
    <div className="about-container">
    <WelcomeSection />
    <CoreValuesSection />
  </div>
  <Carou2 />
  <div className='container1'>
  <div className='customers' >
  <OurAdvan/>
  <Testi/>
  </div>
  </div>
  
  <Footer />
  </div>

  )
}

export default About
