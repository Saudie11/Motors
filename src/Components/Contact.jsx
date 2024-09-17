import React from 'react';
import contact1 from '../images/Contact1.jpg'
import Footer from './Footer';
import ContactUsForm from './ContactUsForm';
import ContactInfo from './ContactInfo';


function Contact() {
  return (
    <>
    <div>
      <img src={contact1} alt="contact" style={{height: '500px',width:'100%'}} />
      <ContactUsForm/>
      <ContactInfo/>

      
    </div>
    <Footer />

    </>
  )
}

export default Contact

