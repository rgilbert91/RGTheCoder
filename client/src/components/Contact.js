import React from 'react';

export default function Contact() {
    return (
         <div className="container" id="contain">
         <div className="container">
  <div className="row header">
    <h1> Reach Out &nbsp;</h1>
    <h3>Contact Rasheem here for any questions you may have!!</h3>
  </div>
  <div className="row body">
    <form action="#">
      <ul>
        <li> 
          <p className="left">
            <label for="first_name">First Name</label>
            <input type="text" name="first_name" placeholder="First Name Here..." />
          </p>
          <p className="pull-right">
            <label for="last_name">Last Name</label>
            <input type="text" name="last_name" placeholder="Last Name Here..." />      
          </p>
        </li>
        <li>
          <p>
            <label for="email">Email <span className="req">*</span></label>
            <input type="email" name="email" placeholder="example@email.com" />
          </p>
        </li>        
        <li><div className="divider"></div></li>
        <li>
          <label for="comments">comments</label>
          <textarea cols="50" rows="5" name="comments"></textarea>
        </li>
        <li>
          <a className="btn btn-submit" type="submit" value="Submit" href="./thanks" > Submit
          </a>
        </li>
      </ul>
    </form>  
  </div>
</div>
</div>
  );
}
