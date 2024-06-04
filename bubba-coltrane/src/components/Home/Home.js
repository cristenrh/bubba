
import './Home.css';
import Brewtrain from "../../assets/brewTrainCover.png";
import ShotBlock from "../../assets/sbpCover.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons' ;
import { faItunes}  from '@fortawesome/free-brands-svg-icons' ;
import { faAmazon}  from '@fortawesome/free-brands-svg-icons' ;
import { faApple }  from '@fortawesome/free-brands-svg-icons' ;
import { faSoundcloud }  from '@fortawesome/free-brands-svg-icons' ;
import React from "react";


function Home() {


return (

        <div className="App">
            <div >

            <div className="container home site-banner-bg"></div>
            <section  className="cover-bg content">
                  
                  <div className="grid-container tc pv3">
                      <div> 
                          <img className="brewcover" src={ShotBlock} alt="Shot Block Party Album Cover" />
                      </div>
                      <div>
                          <h3>Our new EP <i>Shot Block Party</i>!</h3>
                          Available June 11, 2024 on all your favorite streaming services!

                          <p>
                            <i>"Bubba Coltrane and the Train Wrecks know how to party.  Shot Block Party sounds and feels like a Bubba Coltrane origin story!"</i>
                          </p>
                          <p>-David Beck - Producer</p>
                          <p><a href="https://distrokid.com/hyperfollow/bubbacoltraneandthetrainwrecks/shot-block-party">Click here for streaming options!</a></p>
                      </div>
                     
                  </div>    
    
          </section>

            <section  className="content">
                  
                    <div className="grid-container tc pv3">
                        <div> 
                            <img className="brewcover" src={Brewtrain} alt="Brew Train Album Cover" />
                        </div>
                        <div>
                            <h3>Our First EP, <i>Brew Train</i>!</h3>
                            Always Available on:
                                <div className="inner-grid-container">

                                    <div>
                                        <ul className="list pl0 tl">
                                            <li ><a href="https://open.spotify.com/album/6rHkKtc2Zl1a0sA2Dz2gTz"><i ><FontAwesomeIcon icon={faSpotify} /></i>Spotify</a></li>
                                            <li ><a href="https://www.amazon.com/dp/B0892SPKRZ/ref=cm_sw_em_r_mt_dp_U_kda0EbRMGAQ8K"><i ><FontAwesomeIcon icon={faAmazon} /></i> Amazon Music</a></li>
                                         </ul>
                                    </div>
                                    <div>
                                        <ul className="list pl0 tl">
                                        <li ><a href="https://soundcloud.com/bubba-coltrane/sets/brew-train"><i ><FontAwesomeIcon icon={faSoundcloud} /></i> SoundCloud</a></li>
                                        <li ><a href="https://music.apple.com/us/album/brew-train-ep/1514950873"><i ><FontAwesomeIcon icon={faApple} /></i>Apple music</a></li>
                                        </ul>

                                    </div>
                                </div>
                                <p><i>"Bob Dylan once said "but I was so much older then, I'm younger than that now."
                     I'm quoting Dylan to prove that I know a lot about music.
                     I tried to listen to Brew Train impassively but suddenly felt one buttock move and then another.
                     Overall I have to give it two bums up"</i>
                 </p>
                 <p>- Someone Famous</p>

                            </div>
                        </div>

            </section>
                
            </div>
        </div>
       
       
       
       
       );
      }
 
      

      
      export default Home;