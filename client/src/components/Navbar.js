import React from 'react';
import {Link} from "react-router-dom";
import logo from "../pix/rgTheCoder.png"

export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand logo d-inline-block align-top" href="/" >
          <img src={logo} alt=""/>
        </a>
        <button 
        className='navbar-toggler navbar-toggler-right'
        data-toggle="collapse" 
        data-target="#collapse_target"
        aria-controls="collapse_target" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
      <span className='navbar-toggler-icon'></span> 
      </button>
     
<div className="collapse navbar-collapse navbar-list-items" id="collapse_target">
    <div></div>
    <ul className=" navbar-nav">
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
        <Link className="nav-link" to="/portfolio">Portfolio</Link>
      </li>
    </ul>
  </div>
</nav>
      
    );
}
