import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./MobileNav.scss";

const MobileNav: React.FC = () => {
  const [burgerWidth, setBurgerWidth] = useState({ width: "0%" });

  function closeNav() {
    setBurgerWidth({ width: "0%" });
  }

  function openNav() {
    setBurgerWidth({ width: "100%" });
  }

  return (
    <nav className="navbar d-md-none">
      <div id="hamburger" className="overlay" style={burgerWidth}>
        <a href="#!" className="closebtn" onClick={closeNav}>
          <i className="fas fa-chevron-left"></i>
        </a>

        <div className="overlay-content">
          <Link to="/about">About</Link>
          <a href="./menu.html">Menu</a>
          <a href="./workspaces.html">Workspaces</a>
          <a href="./contact.html">Contact</a>
        </div>
      </div>

      <span className="open-menu" onClick={openNav}>
        <i className="fas fa-chevron-right"></i>
      </span>
    </nav>
  );
};

export default MobileNav;
