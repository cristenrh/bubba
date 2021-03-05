
import './Shows.css';
import Brewtrain from "../../assets/brewTrainCover.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Shows() {


return (

        <div className="App">
            <div >
             
                <section  className="cover-bg content">
                    <div>
                    <p><i>"Bob Dylan once said "but I was so much older then, I'm younger than that now."
              I'm quoting Dylan to prove that I know a lot about music.
              I tried to listen to Brew Train impassively but suddenly felt one buttock move and then another.
              Overall I have to give it two bums up"</i></p>
              <p>- Someone Famous</p>
                        <div className="grid-container tc pv3">
                                        
                            <div> 
                                <img className="brewcover" src={Brewtrain} alt="Brew Train Album Cover" /></div>
                            
                            <div>
                                <h3>Our first EP, <br/>
                                <i>Brew Train </i> <br/>
                                  Released May 27, 2020!</h3>
                                <p>
                                    Available Now on: 
                                    <div className="inner-grid-container">

<div>


</div>


                                    </div>
                                    
                                </p>
                                
                                
                                </div>
                                  
                            
                            </div>
                   

                            <div  className="site-banner-header">
                        
                            </div>
                        
                    </div>
                </section>
                
            </div>
        </div>
       
       
       
       
       );
      }
 
      

      
      export default Shows;