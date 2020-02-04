import React from 'react'

export default function footer() {
    return (
        <div className="text-center">
        <footer> 
            <span className='socialMedia'>
                <a href="www.linkedin.com/in/rasheem-gilbert-66504366">
                  <i className="fab fa-linkedin fa-3x"></i>
                </a>
            </span>
            <span className='socialMedia'>
            <a href="https://www.facebook.com/rasheem.gilbert">
              <i className="fab fa-facebook-square fa-3x"></i>
            </a>  
            </span>
            <span className='socialMedia'>
              <a href="https://www.instagram.com/rgthevisionary/">
                <i className="fab fa-instagram fa-3x"></i>
              </a>
            </span>
        </footer>
        <footer className="webName">
            <span >Rasheem G. </span>
            <span >&copy; Rasheem Gilbert 2020</span> 
        </footer>
        </div>
    )
}
