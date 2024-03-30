import React from "react";
import '../global.css'
import { BsPatchCheckFill } from 'react-icons/bs';

const Skills = () => {
  return (
    <section id='experience'>
      <h5 className="h5">What Skills I Have</h5>
      <h2 className="h2">My SKIILS</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill  className="experience__details-icon"/>
             <div>
                <h4>BootStrap</h4>
                <small className="text-light">Advanced</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Advanced</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Advanced</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Advances</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Basic</small>
             </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>BackEnd Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Advanced</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Php</h4>
                <small className="text-light">Basic</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Advanced</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>.NET</h4>
                <small className="text-light">Advanced</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Sql</h4>
                <small className="text-light">Advanced</small>
             </div>
            </article>        
            </div>
            </div>

      </div>
    </section>
  );
}
export default Skills;