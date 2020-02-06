import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
export default function Thankyou() {
  return (
    <div className="thanksB">
      <div className="thanks jumbotron jumbotron-flex">
        <h1>THANK YOU!</h1>
        <span>
          <h2>Thank you for the message, I will get back to you shortly.</h2>
        </span>
      </div>
      <div id='center-btn'>
        <Button className="btn btn-sumbit btn-outline-dark home-font" to="/">
          Home
        </Button>
      </div>
    </div>
  );
}
