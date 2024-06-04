import './Header.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon as MenuIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon as CloseMenu } from '@fortawesome/react-fontawesome';
//import { faCoffee as CloseMenu } from '@fortawesome/free-solid-svg-icons';

import { useState } from "react";

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
    {/* <div className="logo-nav"> */}
      <div className="logo-container">
      <a href="/" className="navbar-brand">Bubba Coltrane & The Train Wrecks</a>
      </div>
    <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
              <Link to={`${process.env.PUBLIC_URL}/`}  className="navbar-item" >
                  Home
              </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
              <Link to={`${process.env.PUBLIC_URL}/shows`} className="navbar-item" >
                Shows
              </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
              <Link to={`${process.env.PUBLIC_URL}/about`} className="navbar-item" >
              About
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
              <Link  to={`${process.env.PUBLIC_URL}/listen`}  className="navbar-item" >
              Listen
              </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link  to={`${process.env.PUBLIC_URL}/video`}  className="navbar-item" >
            Video
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
              <Link  to={`${process.env.PUBLIC_URL}/contact`}  className="navbar-item" >
              Contact
              </Link>
          </li>
        </ul>
  {/* </div> */}
  <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" icon={ faTimes } />
        ) : (
          <MenuIcon className="menu-icon" icon={ faBars } />
          // <i><FontAwesomeIcon icon={ faBars } /></i>
        )}
      </div>
 
    </div>
  );
}

export default Header;
