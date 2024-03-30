import React from "react";


function Bio (){
    return(
      <div id="bio" className="about-me">
      <div className="left-column">
        {/* Place your image in the public folder or import it at the top */}
        <img src="profile.jpg" alt="Your Name" className="profile-picture"/>
      </div>
      <div className="right-column">
        <h2>About Me</h2>
        <div className="why-me">
          <h3>Why Choose Me?</h3>
          <div className="underline">
            {/* This is an empty div just for the underline effect */}
          </div>
        </div>
        <p>Full stack web and mobile developer with background knowledge of MERN stacks...</p>
        <ul className="highlights">
          {/* List your highlights here */}
          <li>Full Stack web and mobile development</li>
          <li>Interactive Front End as per the design</li>
          <li>Interactive Front End as per the design</li>
          <li>Interactive Front End as per the design</li>
          <li>Interactive Front End as per the design</li>
          <li>Interactive Front End as per the design</li>

          {/* ... other list items */}
        </ul>
        <div className="buttons">
          <button className="btn hire-me">Hire Me</button>
          <button className="btn get-resume">Get Resume</button>
        </div>
      </div>
    </div>
    
    )
}

export default Bio;