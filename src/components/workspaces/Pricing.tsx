import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AmenitiesList from "./AmenitiesList";

import "./Pricing.scss";

const Pricing: React.FC = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="d-md-flex">
            <Col md={6} className="order-1 order-md-2 pricing">
              <div>
                <h3>Hourly</h3>
                <p className="small">For Personal Rooms</p>
              </div>
              <div>
                <p className="price">
                  <span>php</span> 40<span>.00</span>
                </p>
                <p className="small">(&#8369; 50.00 for the first hour)</p>
              </div>
              <hr />

              <a href="#amenities" className="btn btn-dark btn-block mt-5 mb-3">
                View Amenities
              </a>
            </Col>

            <Col
              xs={10}
              md={6}
              className="order-1 order-md-1 pricing pricing-left mb-3 mt-5 mt-md-0 mx-auto"
            >
              <h3>Day Pass</h3>
              <p className="price daypass">
                <span>php</span> 300<span>.00</span>
              </p>
              <hr />

              <AmenitiesList />
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pricing;
