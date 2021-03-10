import './Header.css';
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars } from '@fortawesome/free-solid-svg-icons'



function Header() {

  // function toggleBurgerMenu() {
  //   document.querySelector('.navbar-menu').classList.toggle('is-active');
  //   document.querySelector('.navbar-burger').classList.toggle('is-active');
  // }
  return (
    <div className="App">
       <nav className="navbar">
    <label className="navbar-toggle" id="js-navbar-toggle" for="chkToggle" >
            <i><FontAwesomeIcon icon={ faBars } /></i>
        </label>
    <a href="/" className="navbar-brand">Bubba Coltrane & The Train Wrecks</a>
    <input type="checkbox" id="chkToggle"></input>
    <ul className="main-nav" id="js-menu">
      <li>
      <Link to="/" className="navbar-item" >
              Home
      </Link>
      </li>
      <li>
            <Link to="/shows" className="navbar-item" >
              Shows
            </Link>
      </li> 
      <li>
      <Link to="/about" className="navbar-item" >
          About
        </Link>
      </li>
      <li>
      <Link to="/listen" className="navbar-item" >
          Listen
      </Link>
        </li>
      <li>
      <Link to="/contact" className="navbar-item" >
              Contact
      </Link>
      </li>
      <li>
            <Link to="/video" className="navbar-item" >
              Video
            </Link>
      </li>  
        </ul>
  </nav>

    </div>
  );
}

export default Header;
