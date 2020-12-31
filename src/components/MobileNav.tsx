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
    <nav className="navbar d-md-none p-0">
      <div id="hamburger" className="overlay" style={burgerWidth}>
        <a href="#!" className="closebtn" onClick={closeNav}>
          <i className="fas fa-chevron-left"></i>
        </a>

        <div className="overlay-content">
          <Link to="/about" onClick={closeNav}>
            About
          </Link>
          <Link to="/menu" onClick={closeNav}>
            Menu
          </Link>
          <Link to="/workspaces" onClick={closeNav}>
            Workspaces
          </Link>
          <Link to="/contact" onClick={closeNav}>
            Contact
          </Link>
        </div>
      </div>

      <span className="open-menu" onClick={openNav}>
        <i className="fas fa-chevron-right"></i>
      </span>
    </nav>
  );
};

export default MobileNav;
