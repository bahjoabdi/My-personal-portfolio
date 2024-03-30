import React from 'react'
import { FaFontAwesome } from 'react-icons/fa';
import{FaFacebook } from "react-icons/fa"


function Contact() {
  return (
   
    <div  id='contact' className="contact-container">
      <div className="row">

    
      
      <div className="contact-info">
      <h2>Contact Me</h2>
      <p>Get in touch</p>
       
        <p>  <  FaFacebook   size={17} color="white"  />  &nbsp; Email: developer@javascript.com</p>
        <p>  <  FaFacebook   size={17} color="white"  />  &nbsp; Phone: +65 xxxx xxxx</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='forms'>
      <form className="contact-form">
        <input type="text" id="name" name="name" placeholder="Name" />
        <input type="email" id="email" name="email" placeholder="Email" />
        <textarea id="message" name="message" placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
      </div>
      </div>
    </div>

  )
}





 export default Contact;

