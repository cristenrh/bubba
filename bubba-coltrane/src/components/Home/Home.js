
import './Home.css';
import Brewtrain from "../../assets/brewTrainCover.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons' ;
import { faItunes}  from '@fortawesome/free-brands-svg-icons' ;
import { faAmazon}  from '@fortawesome/free-brands-svg-icons' ;
import { faApple }  from '@fortawesome/free-brands-svg-icons' ;
import { faSoundcloud }  from '@fortawesome/free-brands-svg-icons' ;
import { faGooglePlay }  from '@fortawesome/free-brands-svg-icons' ;



function Home() {


return (

        <div className="App">
            <div >

            <div className="container home site-banner-bg">

                </div>
          
             <section  className="cover-bg content">
                  
                    <p><i>"Bob Dylan once said "but I was so much older then, I'm younger than that now."
                    I'm quoting Dylan to prove that I know a lot about music.
                    I tried to listen to Brew Train impassively but suddenly felt one buttock move and then another.
                    Overall I have to give it two bums up"</i>
                    </p>
                    <p>- Someone Famous</p>



                    <div class="home-grid-container">
                            <div class="photo">
                                <img className="brewcover" src={Brewtrain} alt="Brew Train Album Cover" />
                            </div>
                            <div class="title tc">  
                                <h3>Our first EP, <br/>
                                <i>Brew Train </i> <br/>
                                Released May 27, 2020!</h3>
                                Available Now on: 
                            </div>
                            <div class="downloads">
                                    <ul className="list pl0 tl">
                                        <li ><a href="https://open.spotify.com/album/6rHkKtc2Zl1a0sA2Dz2gTz"><i ><FontAwesomeIcon icon={faSpotify} /></i>Spotify</a></li>
                                        <li><a href="https://www.amazon.com/dp/B0892SPKRZ/ref=cm_sw_em_r_mt_dp_U_kda0EbRMGAQ8K"><i ><FontAwesomeIcon icon={faAmazon} /></i> Amazon Music</a></li>
                                        <li ><a href="https://music.apple.com/us/album/brew-train-ep/1514950873?uo=4&amp;app=itunes&amp;at=1001lry3&amp;ct=dashboard"><i ><FontAwesomeIcon icon={faItunes} /></i>iTunes</a></li>
                                    </ul>
                            </div>
                            <div class="downloads2">
                                    <ul className="list pl0 tl">
                                        <li ><a href="https://soundcloud.com/bubba-coltrane/sets/brew-train"><i ><FontAwesomeIcon icon={faSoundcloud} /></i> SoundCloud</a></li>
                                        <li ><a href="https://music.apple.com/us/album/brew-train-ep/1514950873"><i ><FontAwesomeIcon icon={faApple} /></i>Apple music</a></li>
                                        <li ><a href="https://play.google.com/store/music/artist?id=Amzzhjiq5hbcowdtq5txpw2zi2i"><i ><FontAwesomeIcon icon={faGooglePlay} /></i>Google Play music</a></li>
                                    </ul>
                            </div>
                        </div>






                    {/* <div className="grid-container tc pv3">
                        <div> 
                            <img className="brewcover" src={Brewtrain} alt="Brew Train Album Cover" />
                        </div>
                        <div>
                            <h3>Our first EP, <br/>
                            <i>Brew Train </i> <br/>
                            Released May 27, 2020!</h3>
                            Available Now on: 
                                <div className="inner-grid-container">

                                    <div>
                                        <ul className="list pl0 tl">
                                            <li ><a href="https://open.spotify.com/album/6rHkKtc2Zl1a0sA2Dz2gTz"><i ><FontAwesomeIcon icon={faSpotify} /></i>Spotify</a></li>
                                            <li><a href="https://www.amazon.com/dp/B0892SPKRZ/ref=cm_sw_em_r_mt_dp_U_kda0EbRMGAQ8K"><i ><FontAwesomeIcon icon={faAmazon} /></i> Amazon Music</a></li>
                                            <li ><a href="https://music.apple.com/us/album/brew-train-ep/1514950873?uo=4&amp;app=itunes&amp;at=1001lry3&amp;ct=dashboard"><i ><FontAwesomeIcon icon={faItunes} /></i>iTunes</a></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="list pl0 tl">
                                        <li ><a href="https://soundcloud.com/bubba-coltrane/sets/brew-train"><i ><FontAwesomeIcon icon={faSoundcloud} /></i> SoundCloud</a></li>
                                        <li ><a href="https://music.apple.com/us/album/brew-train-ep/1514950873"><i ><FontAwesomeIcon icon={faApple} /></i>Apple music</a></li>
                                        <li ><a href="https://play.google.com/store/music/artist?id=Amzzhjiq5hbcowdtq5txpw2zi2i"><i ><FontAwesomeIcon icon={faGooglePlay} /></i>Google Play music</a></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div> */}
             
            </section>
                
            </div>
        </div>
       
       
       
       
       );
      }
 
      

      
      export default Home;