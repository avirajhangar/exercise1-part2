import React, { useState } from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="header">
      <a className="header-link" href="/">
        CodePlayground
      </a>
      <nav className={`mobile-nav nav${menuOpen ? " open-menu" : ""}`}>
        <button className="nav-btn" onClick={toggleMenu}>
          <div className="nav-btn-hamburger">
            <div className="line one"></div>
            <div className="line two"></div>
            <div className="line three"></div>
          </div>
        </button>
        <div className="mobile-nav-menu-wrap">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/">sample page</Link>
            </li>
            <li>
              <Link to="/">contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="desktop-nav nav">
        <div className="desktop-nav-menu-wrap">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/">sample page</Link>
            </li>
            <li>
              <Link to="/">contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
