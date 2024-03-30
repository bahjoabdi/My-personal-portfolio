import React from 'react'
import { FaFontAwesome } from 'react-icons/fa';
import {  FaFacebook, FaFacebookMessenger, FaTelegram, FaSnapchat, FaInstagramSquare  } from "react-icons/fa";

function Banner() {
  return (
    <div className="hero">
  
    

    <div className="hero-content">
        <a href=""> <  FaFacebook   size={20} color="white"  /></a> 
    <a href="">  <  FaFacebookMessenger  size={20} color="white"  /></a>
    <a href="">  <  FaSnapchat   size={20} color="white"  /></a>
    <a href=""> <   FaInstagramSquare     size={20} color="white"  /></a>
    <a href="">   <  FaTelegram   size={20} color="white"  /></a>
      <h1>Hello, I'M <span>Bahja</span></h1>
      <h2>Cross</h2>
      <p>Knack of building applications with front and back end operations.</p>
      <div className="hero-buttons">
        <button className="btn hire-me">Hire Me</button>
        <button className="btn get-resume">Get Resume</button>
      </div>
    </div>
    <div className="hero-image">
      {/* Assuming you have the image locally */}
      <img src="profile.jpg" alt="Ehiedu" />
    </div>
  </div>
   
  )
}

export default Banner
