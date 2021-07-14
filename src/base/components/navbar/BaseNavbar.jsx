import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BaseNavbar.css";

export default function BaseNavbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  



  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            BBM  <i class="far fa-handshake"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu  active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/whoAreWe"
                className="nav-links"

              >
                Who Are We ?
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contactUs"
                className="nav-links"
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/howToWork"
                className="nav-links"

              >
                How To Work ?
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
