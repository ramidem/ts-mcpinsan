import React from "react";
import { Link } from "react-router-dom";

import "./DesktopNav.scss";

const DesktopNav: React.FC = () => {
  return (
    <nav className="container pt-3">
      <div className="row navlinks-container">
        <ul className="md-navlinks">
          <li className="navlink d-none d-md-block">
            <Link to="/about">about</Link>
          </li>
          <li className="navlink d-none d-md-block">
            <a href="./menu.html">Menu</a>
          </li>
          <li className="navlink logo">
            <Link to="/">McPinsan</Link>
          </li>
          <li className="navlink d-none d-md-block">
            <a href="./workspaces.html">Workspaces</a>
          </li>
          <li className="navlink d-none d-md-block">
            <a href="./contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNav;
