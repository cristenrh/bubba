import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Home from './components/Home/Home';
import Listen from './components/Listen/Listen';
import Contact from './components/Contact/Contact';
import Video from './components/Video/Video';
import Shows from './components/Shows/Shows';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="container">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Header/>
            <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/listen">
            <Listen />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/video">
            <Video />
          </Route>
          <Route path="/shows">
            <Shows />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
    

  );
}


//export default App;
