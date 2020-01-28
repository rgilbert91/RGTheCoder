import React from 'react';
import {Link} from "react-router-dom";
import logo from "../pix/rgTheCoder.png"

export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand logo d-inline-block align-top" href="/" >
          <img src={logo} alt=""/>
        </a>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/projects">Projects</Link>
      </li>
    </ul>
  </div>
</nav>
      
    );
}
