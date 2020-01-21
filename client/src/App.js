import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register"

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path= "/">
        <Home />
      </Route>
      <Route exact path= "/about">
        <About />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path= "/dashboard/:id">
        <Dashboard />
      </Route>
    </Switch>
  </Router>
  )
}

export default App;
