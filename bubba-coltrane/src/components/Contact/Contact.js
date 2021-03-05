import './Contact.css';
import ContactUs from "../../assets/bubba-contact.png";

function Contact() {
return (
    <div className="App">

        <div >
            <div className="site-banner-header">
                <h1 >
               Contact
                </h1>
            </div>
            <section  className="cover-bg content">

            <div className="grid-container pv3">
                <div>
              
                <h3 >
                Let Bubba Entertain You!
                </h3>
                <p>
                Bubba Coltrane and The Train Wrecks' goal is to bring 
                fun and excitement to your event. We play for large crowds, 
                small crowds and any size crowd in between. 
                </p>
                <p>
                Local Austin clubs, 
                breweries, wineries, regional & national events, weddings, anniversaries, 
                or just backyard parties - we’ve done ‘em all. Our mixture of classic / current rock, 
                dance music and our home grown originals never fails to get people on the dance floor. 
                You won’t be sorry you booked Bubba Coltrane and the Train Wrecks!
                </p>
                <p>
                For Booking information email Bob Hewett:<br/>
                <a href="mailto:bubbacoltrane@gmail.com">bubbacoltrane@gmail.com</a>
                </p>
                </div>

                <div>       
                <img className="" src={ ContactUs } alt="Contact Us " />
                </div>
            </div>
 </section>
  
            </div>
        </div>
    );
  }
  
  export default Contact;
  