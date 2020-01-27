import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Thankyou from "./components/Thankyou";

function App() {
  return (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path= "/">
        <Home />
      </Route>
      <Route exact path= "/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path= "/portfolio">
        <Portfolio />
      </Route >
      <Route exact path= "/thanks">
        <Thankyou />
      </Route>
    </Switch>
    <Footer />
  </Router>
  )
}

export default App;
