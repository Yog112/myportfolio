import React from 'react'
import img from '../image/logo.jpg'
import '../css/About.css'

const About = () => {
  return (
    <>
    
    <section id="about">
            <div id="my-image">
                <img src={img} alt='avi'/>
            </div>

            <div id="about-para">

                <p>
                    I believe that I can be a good team player with the ability to work under minimum guidance
                    especially when carrying out challenging assignment. I consider myself as a very ambitious,
                    motivated, career oriented person, willing to accept challenges,
                    energetic and results oriented, with excellent leadership abilities,and an active and hardworking
                    person who is patient and diligent, with great adaptability to changing working conditions.
                </p>

            </div>

        </section>
    </>
  )
}

export default About