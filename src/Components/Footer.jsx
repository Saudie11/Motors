// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import benz2 from '../images/benz2.jpg';
import benz3 from '../images/benz3.jpg';

import Nissan1 from '../images/Nissan1.jpg';
import Nissan2 from '../images/Nissan2.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4><span className="highlight">MOTORS</span> WORDPRESS THEME</h4>
        <p>
          Fusce interdum ipsum egestas urna amet fringilla, et placerat ex venenatis.
          Aliquet luctus pharetra. Proin sed fringilla lectus... ar sit amet tellus in mollis.
          Proin nec egestas nibh, eget egestas urna. Phasellus sit amet vehicula nunc. In hac habitasse platea dictumst.
        </p>
      </div>
      <div className="footer-section">
        <h4>PHOTO GALLERY</h4>
        <div className="photo-gallery">
          <img src={benz2} alt="Car 1" />
          <img src={benz3} alt="Car 2" />
          <img src={Nissan1} alt="Car 3" />
          <img src={Nissan2} alt="Car 4" />
        </div>
      </div>
      <div className="footer-section">
        <h4>LATEST BLOG POSTS</h4>
        <p>The Tesla Model S isn't the first truly autonomous car on the road...</p>
        <p><a href="#" className="no-comments">NO COMMENTS</a></p>
      </div>
      <div className="footer-section">
        <h4>SOCIAL NETWORK</h4>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-reddit"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      <div className="footer-section">
        <h4>SUBSCRIBE</h4>
        <div className="subscribe">
          <input type="email" placeholder="Enter your email..." />
          <button><i className="fas fa-rss"></i></button>
        </div>
        <p>Get latest updates and offers.</p>
      </div>
      <div className="footer-section">
        <h4>SALES HOURS</h4>
        <p>Monday – Friday: 09:00AM – 09:00PM</p>
        <p>Saturday: 09:00AM – 07:00PM</p>
        <p>Sunday: Closed</p>
      </div>
      <div className="footer-section">
        <h4>SERVICE HOURS</h4>
        <p>Monday – Friday: 09:00AM – 09:00PM</p>
        <p>Saturday: 09:00AM – 07:00PM</p>
        <p>Sunday: Closed</p>
      </div>
      <div className="footer-section">
        <h4>PARTS HOURS</h4>
        <p>Monday – Friday: 09:00AM – 09:00PM</p>
        <p>Saturday: 09:00AM – 07:00PM</p>
        <p>Sunday: Closed</p>
      </div>
    </footer>
  );
};

export default Footer;
