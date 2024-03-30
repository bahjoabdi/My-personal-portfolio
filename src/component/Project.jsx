import React from 'react'
import csharp from '/download2.jpeg'
import python from '/download3.jpeg'
import java from '/download4.jpeg'


function Project() {
  return(
    <div  id='project' className="Projects">
             <h1> My project</h1>
             <div className="Projectsections" >
              <div className="section1">
                <img src={csharp } alt="" />
              <h5>C# projects</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora!</p>
      
              </div>
              <div className="section2">
                <img src={python} alt="" />
                <h5>Python Project</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora!</p>
           
              </div>
              <div className="section3">
                <img src={java} alt="" />
                <h5>JAva Projects</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tempora!</p>
            
              </div>
            </div>

    </div>
  )
    
      
}

export default Project;
