import React from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';

// import Axios from 'axios';


export default function Contact() { 

  // constructor() {
  //   super()

  //   this.state = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     message: ''
  //   }
  // }

  // handleChange(e) {
  //   // If you are using babel, you can use ES 6 dictionary syntax
  //   // let change = { [e.target.name] = e.target.value }
  //   let change = {}
  //   change[e.target.name] = e.target.value
  //   this.setState(change)
  // }
    return (
      <div className="contact">
         <div  id="contain">
         <div className="container">
  <div className="row heading">
    <h1> Reach Out &nbsp;</h1>
    <h3>Contact Rasheem here for any questions you may have!!</h3>
  </div>
  <div className="row body">
    <Form 
    // onSubmit={this.handleSubmit}
    id="contactForm" action="#">
      <FormGroup className="left">
            <Label for="first_name">First Name</Label>
            <Input id="inputFirstName" 
            type="text" 
            name="first_name" 
            placeholder="First Name Here..." 
            // onChange={this.handleChange}
            />
          </FormGroup>
          
          <FormGroup className="pull-right">
            <Label for="last_name">Last Name</Label>
            <Input 
            id="inputLastName" 
            type="text" name="last_name" 
            placeholder="Last Name Here..."
            // onChange={this.handleChange}
             />      
          </FormGroup>
          <div className="clear"></div>
          <FormGroup className="email">
            <Label for="email">Email <span className="req">*</span></Label>
            <Input 
            id="inputEmail" 
            type="email" 
            name="email" 
            placeholder="example@email.com" 
            // onChange={this.handleChange}
             />
          </FormGroup>
       <div className="divider"></div>
        <FormGroup>
          <Label for="message">Message</Label>
          <Input 
          type="textarea"
          id="inputMessage" 
          cols="50" 
          rows="5" 
          name="message"
          // onChange={this.handleChange}
          />  
        </FormGroup>
        <Button>  
          <a 
          className="btn btn-submit" 
          type="submit" 
          value="Submit" 
          href="./thanks " > Submit</a>
          </Button>
    </Form>  
  </div>
</div>
</div>
</div>
  );
}
