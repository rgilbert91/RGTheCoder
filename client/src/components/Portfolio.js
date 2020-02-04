import React from 'react';
import picture from '../pix/brAInIAc.jpg'
import ai from '../pix/AI.jpg'

export default function Portfolio() {
    return (
        <div className="portfolio">
<div className="container">
  <div className="row justify-content-center">
  <div className="col-md-m4">
      <div className="card shadow" styles={{width: "18rem"}}>
         <div className="inner">
          <img className="card-img-top" 
          src={picture} 
          alt=""/>
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">WebMaker</h5>
            <p className="card-text">
            Project composing of both front end 
            and back end work also added Bcrypt</p>
            <a href="#" className=" btn btn-dark">See This Code</a>
          </div>
      </div>
  </div>
  <div className="col-md-m4">
    <div className="card shadow" styles={{width: "18rem"}}>
      <div className="inner">
        <img className="card-img-top" 
        src={ai} 
        alt=""/>
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">To-Do List</h5>
        <p className="card-text">
        Simple project where you can add cross out and/or 
        delete goals off of your list.</p>
        <a href="#" className=" btn btn-dark">See This Code</a>
      </div>
    </div>
  </div>
  <div className="col-md-m4">
  <div className="card shadow" styles={{width: "18rem"}}>
      <div className="inner">
        <img className="card-img-top" 
        src={ai} 
        alt=""/>
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">To-Do List</h5>
        <p className="card-text">
        Simple project where you can add cross out and/or 
        delete goals off of your list.</p>
        <a href="#" className=" btn btn-dark">See This Code</a>
      </div>
    </div>
  </div>
  </div>  
</div>
</div>
);}
