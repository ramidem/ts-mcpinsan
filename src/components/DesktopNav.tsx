import React from "react";

import "./DesktopNav.scss";

const DesktopNav: React.FC = () => {
  return (
    <nav className="container pt-3">
      <div className="row navlinks-container">
        <ul className="md-navlinks">
          <li className="navlink d-none d-md-block">
            <a href="./about.html">About</a>
          </li>
          <li className="navlink d-none d-md-block">
            <a href="./menu.html">Menu</a>
          </li>
          <li className="navlink logo">
            <a href="./index.html">McPinsan</a>
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
