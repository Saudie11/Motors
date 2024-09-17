import React from 'react';
import mainlogo from "../images/mainlogo.png";
import './Appbar.css';
import { Navbar, Nav, NavDropdown,Container, Button, Form } from 'react-bootstrap';
import Home from '../Components/Home';
import Inventroy from '../Components/Inventroy';
import { Link } from 'react-router-dom';
import { FcInTransit } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




const Appbar = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);
  return (
<div>

<Navbar expand="lg" className="navbar"  variant="dark">
      <Container fluid>
        <Navbar.Brand className="logo"  href="/"><img src= {mainlogo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 menu"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home </Nav.Link>

            <Nav.Link as={Link} to="/Inventory">Inventory</Nav.Link>
            
        <Nav.Link as={Link} to="/About">About us</Nav.Link>
      
      <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
    </Nav>
          <Form className="d-flex">
           
            <Button  variant="outline-success" className='cart'onClick={() => navigate('/cart')}
      >
        <FcInTransit size={24} />
        {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>} </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>


</div>

  
  );
}

export default Appbar;
