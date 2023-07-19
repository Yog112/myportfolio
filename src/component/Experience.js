import React from 'react'
import '../css/Experience.css'


const Experience = () => {
  return (


    <section id="Experience">

      <h1 class="section-heading mb75px">
        <span>
          <i class="fas fa-briefcase"></i>
        </span>
        <span> Work Experience </span>
      </h1>

      <div class="timeline">
        <div class="timeline-box ">
          <h3 class="box1-heading">Web Developers<br /><span class="heading-color">Omninos Solution</span>
          </h3>
          <p class="box1-paragraph">
            During my Web Developers internship, I'll work on some projects and learn how to build interactive
            user interfaces using React. I'll learn how to create reusable components, manage state and
            props,use React hooks and libraries, and debug my code.
          </p>
        </div>


        <div class="timeline-box ">
          <h3 class="box1-heading">Photoshop<br /><span class="heading-color">Omninos Solution</span>
          </h3>
          <p class="box1-paragraph">
            In Photoshop. I am designing the Banner ext..
          </p>
        </div>
        <div id="timeline-divider">
          <div class="timeline-traveller">
            <div>
              <i class="fas fa-plane"></i>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Experience