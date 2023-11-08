import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-3">
      <Container>
        <Row>
          <Col>
            <h5>Footer Title</h5>
            <p>Some footer content goes here.</p>
          </Col>
          <Col>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </Col>
          <Col>
            <h5>Contact Info</h5>
            <address>
              123 Example Street<br />
              City, State 12345<br />
              Email: example@email.com
            </address>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
