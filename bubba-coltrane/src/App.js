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

import { createBrowserHistory } from 'history';

export default function App() {
  const history = createBrowserHistory();
  return (
    <Router>
      
      <div basename={'/react'} className="container" history={history} >
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Header/>
            <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`}  component={Home}>
            <Home />
          </Route>
          <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About} >
            <About />
          </Route>
          <Route exact path={`${process.env.PUBLIC_URL}/listen`} component={Listen} >
            <Listen />
          </Route>
          <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact} >
            <Contact />
          </Route>
          <Route exact path={`${process.env.PUBLIC_URL}/video`} component={Video} >
            <Video />
          </Route>
          <Route exact path={`${process.env.PUBLIC_URL}/shows`} component={Shows} >
            <Shows />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  
  );
}


//export default App;
