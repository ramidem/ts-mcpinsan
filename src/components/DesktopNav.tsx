import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./DesktopNav.scss";

const DesktopNav: React.FC = () => {
  return (
    <nav className="container-fluid nav-wrapper">
      <Container className="pt-3">
        <Row className="navlinks-container">
          <ul className="md-navlinks">
            <li className="navlink d-none d-md-block">
              <Link to="/about">about</Link>
            </li>
            <li className="navlink d-none d-md-block">
              <Link to="/menu">menu</Link>
            </li>
            <li className="navlink logo">
              <Link to="/">McPinsan</Link>
            </li>
            <li className="navlink d-none d-md-block">
              <Link to="/workspaces">workspaces</Link>
            </li>
            <li className="navlink d-none d-md-block">
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </Row>
      </Container>
    </nav>
  );
};

export default DesktopNav;
