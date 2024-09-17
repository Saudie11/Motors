// src/SearchFilter.js

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import './Inventroy.css';
import { dividerClasses } from '@mui/material';

const SearchFilter = () => {
  const [body, setBody] = useState('');
  const [make, setMake] = useState('');
  const [condition, setCondition] = useState('');
  const [mileage, setMileage] = useState([0, 10000]);
  const [transmission, setTransmission] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [keywords, setKeywords] = useState('');
  const [price, setPrice] = useState([0, 50000]);
  const [model, setModel] = useState('');

  const handleMileageChange = (event, newValue) => {
    setMileage(newValue);
  };

  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
  };

  const handleSearch = () => {
    const searchCriteria = { body, make, condition, mileage, transmission, fuelType, year, color, keywords };
    console.log('Search criteria:', searchCriteria);
    // Implement your search logic here
  };
  const handleReset = () => {
    setBody('');
    setMake('');
    setCondition('');
    setMileage([0, 10000]);
    setTransmission('');
    setFuelType('');
    setYear('');
    setColor('');
    setKeywords('');
    setPrice([0, 50000]);
    setModel('');
  };

  return (
    <div className='searchfilter'>
    <Container>
      <h2>Search Options</h2>
      <Form>
        <Form.Group controlId="formBody">
          <Form.Label>Body</Form.Label>
          <Form.Control as="select" value={body} onChange={(e) => setBody(e.target.value)}>
            <option value="">Select Body</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="truck">Truck</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formMake">
          <Form.Label>Make</Form.Label>
          <Form.Control as="select" value={make} onChange={(e) => setMake(e.target.value)}>
            <option value="">Select Make</option>
            <option value="toyota">Toyota</option>
            <option value="honda">Honda</option>
            <option value="ford">Ford</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formCondition">
          <Form.Label>Condition</Form.Label>
          <Form.Control as="select" value={condition} onChange={(e) => setCondition(e.target.value)}>
            <option value="">Select Condition</option>
            <option value="new">New</option>
            <option value="used">Used</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formMileage">
          <Form.Label>Mileage</Form.Label>
          <Box sx={{ width: 250 }}>
            <Slider
              value={mileage}
              onChange={handleMileageChange}
              valueLabelDisplay="auto"
              min={0}
              max={10000}
            />
          </Box>
        </Form.Group>

        <Form.Group controlId="formTransmission">
          <Form.Label>Transmission</Form.Label>
          <Form.Control as="select" value={transmission} onChange={(e) => setTransmission(e.target.value)}>
            <option value="">Select Transmission</option>
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formFuelType">
          <Form.Label>Fuel Type</Form.Label>
          <Form.Control as="select" value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
            <option value="">Select Fuel Type</option>
            <option value="gasoline">Gasoline</option>
            <option value="diesel">Diesel</option>
            <option value="electric">Electric</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formYear">
          <Form.Label>Year</Form.Label>
          <Form.Control as="select" value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Select Year</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formColor">
          <Form.Label>Exterior Color</Form.Label>
          <Form.Control as="select" value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="">Select Color</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="silver">Silver</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formKeywords">
          <Form.Label>Search by Keywords</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" onClick={handleSearch}>Search</Button>

        

        <Form.Group controlId="formPrice">
          <Form.Label>Select Price</Form.Label>
          <Box sx={{ width: 250 }}>
            <Slider
              value={price}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={0}
              max={50000}
            />
          </Box>
        </Form.Group>

        <Form.Group controlId="formModel">
          <Form.Label>Model</Form.Label>
          <Form.Control as="select" value={model} onChange={(e) => setModel(e.target.value)}>
            <option value="">Select Model</option>
            <option value="model1">Model 1</option>
            <option value="model2">Model 2</option>
            <option value="model3">Model 3</option>
          </Form.Control>
        </Form.Group>

        <Button variant="secondary" onClick={handleReset} className="reset-button ml-2">Reset All</Button>
      </Form>
    
    </Container>
    </div>
  );
};

export default SearchFilter;
