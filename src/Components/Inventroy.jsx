import React from 'react';
import './Inventroy.css';
import Invent from './Invent';
import SearchFilter from './SearchFilter';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';


const Inventroy = () => {

  return (
  <div>
      <Container fluid style={{ backgroundColor: '#000', color: '#fff', padding: '20px', marginTop: '50px'}}>
      <Row>

      <Col md={9}> 
          <Invent />
        </Col>

        <Col md={3}>
          <SearchFilter />
        </Col>
       
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>
    <Footer />
    </div>
  );
};


export default Inventroy;
