import React from "react";
import { Container, Row } from "react-bootstrap";

import mcpHeaderLogo from "./../assets/images/mcpinsan-header.svg";

import "./About.scss";

const About: React.FC = () => {
  return (
    <>
      <Container fluid className="about-fluid">
        <Row>
          <Container>
            <Row>
              <div className="col-10 mx-auto col-md-6 p-5 mt-5 about-wrapper">
                <h2 className="text-center mb-3">About Us</h2>

                <p>
                  We know how cool it would feel to work in a coffee shop. We
                  love the vibe! However, in a regular coffee shop we don’t
                  usually get the service we need to get a work done. We are
                  offered with uncomfy seats, very few power outlets, slow WiFi,
                  and most of all – you are forced to order food or coffee, even
                  if you don’t like to drink anything other than water.
                </p>
                <p>
                  At McPinsan, we give you everything you need to get your work
                  done, plus the lovely vibe of a coffee shop. You are given
                  lots of power outlets, comfy seats, and fast WiFi. We also
                  serve handcrafted beverages. Come visit us!
                </p>

                <hr />

                <h4 className="mt-5">Let's get social</h4>
                <div className="row socials">
                  <div className="col-3 ml-auto">
                    <a
                      href="http://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="http://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="http://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="http://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 p-5 mcp-about">
                <div className="mcpinsan">
                  <h1>McPinsan</h1>
                  <h2>Cafe & Workspaces</h2>
                </div>
                <img
                  className="img-fluid"
                  src={mcpHeaderLogo}
                  alt="McPinsan Cafe & Workspaces"
                />
              </div>
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
};

export default About;
