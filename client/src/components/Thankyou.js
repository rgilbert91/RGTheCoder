import React from 'react'
import {Link} from 'react-router-dom'
export default function Thankyou() {
    return (
        <div><div className="thanks jumbotron jumbotron-flex">
            <h1>THANK YOU!</h1>
            <span><h2>Thank you for the message, I will get back to you shortly.</h2></span>
        </div>
        <div>
            <Link className="btn btn-block" to="/">
            Home
            </Link>
        </div>
    </div>)
}
