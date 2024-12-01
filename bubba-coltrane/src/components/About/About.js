import './About.css';
import CardList from '../CardList';
import { band } from '../band'


function About() {
  return (
    <div className="App about ">
      <div >
        <div className="container site-banner-bg">
          <div className="site-banner-header">
            <h1 >
              About Bubba Coltrane and the Train Wrecks
                    </h1>
          </div>

        </div>

        <div class="panel-wrapper">
          <a href="#show" class="show btn" id="show">...Read More</a>
          <a href="#hide" class="hide btn" id="hide">Read Less</a>
          <div class="bio content">
            <p>
            With a sound that is both timeless and contemporary, Bubba Coltrane and the Train Wrecks are carving out a unique place in the Austin, Texas music scene, winning over fans with their authenticity and passion. The band mixes elements of funk, rock, blues, jazz, and latin music into a self proclaimed style of “Garage Funk”.  They strive to make their shows lively, fun affairs where people dance like nobody's watching, and sing as if no one cares. A "Bubba" Experience is a mixture of old soul, new originals, funky break downs, and party music that goes along deliciously with your favorite beverage.
            </p>
           <p>
           The Bubba Coltrane persona is shared by Bob Hewett and Brian Veraa who swap singing and guitar licks over the driving bass of Ed Kuhn and rhythms of drummer Bob Russin.   The Train Wreck sound is brought to another level by three talented horn players: Warren Gill on Trombone, David Dalke on Trumpet, and Jennifer Nailos on saxophone (previously Frank Chodacki on sax).             </p>
            <p>
            The band is promoting their second EP, “Shot Block Party”, that was released on June 11, 2024.  Along with their first EP from 2020, “Brew Train”, the Train Wrecks recording catalog showcases the band’s blending of the great American music styles of Memphis Stax, Chicago blues, New Orleans brass, 70s funk, and Texas Gulf Coast soul.
            </p>
          </div>
          <div class="fade"></div>
        </div>
        <div className="tc mt4 content">
        <div className="site-banner-header">
            <h1 >
              The TrainWrecks' Lineup
                    </h1>
          </div>
          <CardList band={band} />
        </div>
      </div>
    </div>
  );
}

export default About;

