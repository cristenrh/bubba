import React from 'react';
import './Footer.css';

// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' ;
import { faYoutube } from '@fortawesome/free-brands-svg-icons' ;
import { faSpotify } from '@fortawesome/free-brands-svg-icons' ;
import { faInstagram}  from '@fortawesome/free-brands-svg-icons' ;
import { faItunes}  from '@fortawesome/free-brands-svg-icons' ;



function Footer() {

    const getCurrentYear = () => {
        return new Date().getFullYear();
      };
    

    return (
      <div className="App">

<footer className="footer">  
        <div className="flex-container">
            <div className="copyright"> 
                <p> &copy; {getCurrentYear()} Bubba Coltrane Music</p>
            </div>
            <div className="social-media">
                <a href="//www.facebook.com/BubbaColetrane" className="icon"><i ><FontAwesomeIcon icon={faFacebookF} /></i></a>
                <a href="//https://www.instagram.com/bubbacoltrane/" className="icon"><i ><FontAwesomeIcon icon={faInstagram} /></i></a>
                <a href="//www.youtube.com/channel/UCbe4IPu92nn7HVOTE8jB4YA" className="icon"><i ><FontAwesomeIcon icon={faYoutube} /></i></a>
                <a href="//music.apple.com/us/album/brew-train-ep/1514950873?uo=4&app=itunes&at=1001lry3&ct=dashboard" className="icon"><i ><FontAwesomeIcon icon={faItunes} /></i></a>
                <a href="//open.spotify.com/album/6rHkKtc2Zl1a0sA2Dz2gTz" className="icon"><i ><FontAwesomeIcon icon={faSpotify} /></i></a>
            </div>
        </div>
 </footer>
    

      </div>
    );
  }
  
  export default Footer;
  