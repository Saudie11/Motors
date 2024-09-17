import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Topbar from './Components/Topbar';

import Appbar from '../src/Components/Appbar';
import './App.css';
import Inventroy from './Components/Inventroy';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import CarDescription from './Components/CarDescription';
import Cart from './Components/Cart';



function App() {
  return (
    <>
    <Topbar/>
    <Router>
      <Appbar/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Inventory" element={<Inventroy />} />
      
        <Route path="/car-description/:id" element={<CarDescription />} />
        <Route path="/cart" element={<Cart />} />
  
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    
       
  
    </>
  );
}

export default App;
