import React from 'react';
import {Link} from 'react-router-dom'
export default function Home() {
    return (
 <div className="header">   
    <div className="welcome-text">
        <h1>Hi, my name is Rasheem.</h1>
        <h4>Work with me one on to make your website dreams come true.</h4>
    </div>    
    <div className="learn">
      <Link to="/about">Learn More</Link>
    </div>
    
  </div>);
}
