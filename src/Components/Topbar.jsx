import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaPhoneAlt, FaMapMarkerAlt, FaCalendarAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGoogle } from 'react-icons/fa';

const Topbar = () => {
  return (
    <Navbar  bg="dark" variant="dark" className="py-2 top">
      <Container>
        <Nav className="mr-auto">
          <NavDropdown title={<FaPhoneAlt />} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/1">Option 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/2">Option 2</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="tel:+1234567890">
            <FaPhoneAlt className="mr-2" /> +123 456 7890
          </Nav.Link>
          <Nav.Link href="#">
            <FaMapMarkerAlt className="mr-2" /> 123 Street Name, City, Country
          </Nav.Link>
          <Nav.Link href="#">
            <FaCalendarAlt className="mr-2" /> Date
          </Nav.Link>
          <Nav.Link href="https://facebook.com">
            <FaFacebookF />
          </Nav.Link>
          <Nav.Link href="https://twitter.com">
            <FaTwitter />
          </Nav.Link>
          <Nav.Link href="https://instagram.com">
            <FaInstagram />
          </Nav.Link>
          <Nav.Link href="https://linkedin.com">
            <FaLinkedinIn />
          </Nav.Link>
          <Nav.Link href="https://google.com">
            <FaGoogle />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Topbar;
