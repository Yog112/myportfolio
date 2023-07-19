import React from 'react'
import '../css/Projects.css'
import img1 from '../image/project1.jpg'
import img2 from '../image/rover2.png'
import img3 from '../image/rover3.png'
import img4 from '../image/rover4.png'
import img5 from '../image/rover5.png'
import img6 from '../image/rover6.png'
import img7 from '../image/rover7.png'

const Projects = () => {
  return (

    <section id="portfolio">
            <h1 class="section-heading mb75px">
                <span>
                    <i class="fas fa-th-list"></i>
                </span>
                <span> Projects</span>
            </h1>

            <div id="portfolio-container">
              
                <a href="https://">
                    <div class="portfolio-image-container">
                        <img src={img1} alt='img'/>
                        <div class="portfolio-details">
                            <p>
                            <h6>Rove India</h6>
                            It is Trave-Website in this there is booking section , contact section ,and also some
                            packages .
                            </p>
                        </div>

                    </div>
                </a>
     
                <a href="https://#">
                    <div class="portfolio-image-container">
                        <img src={img2} alt='img'/>
                        <div class="portfolio-details">
                            <p>
                            <h6>MOVIE-APP</h6>
                            It is a Movie App Website You can search movie and add to favourite list and can also store
                            it unfavourite.
                            </p>
                        </div>
                    </div>
                </a>

              

                <a href="https://#">
                    <div class="portfolio-image-container">
                        <img src={img3} alt='img'/>
                        <div class="portfolio-details">
                            <p>
                            <h6>IMDB Rating</h6>
                            In this you can search any movie and see all the detail of movies like release date , star
                            cast , imbd rating and also add in favourite list.
                            </p>
                        </div>
                    </div>
                </a>

               
                <a href="https://#/">
                    <div class="portfolio-image-container">
                        <img src={img4} alt='img'/>
                        <div class="portfolio-details">
                            <p>
                            <h6>TO-DO List</h6>
                            In this you can add any task , mark it as a complete , delete the task , edit the task.
                            </p>
                        </div>
                    </div>
                </a>

               
                <a href="https://#/">

                    <div class="portfolio-image-container">

                        <img src={img5} alt='img'/>
                        <div class="portfolio-details">
                            <p>
                            <h6>Habit-Tracker</h6>
                            In this you can add any habit like exercise and track it all the week as the day pass you
                            can mark it done, in progress, or not done.
                            </p>
                        </div>
                    </div>
                </a>

              
                <a href="https://#/">
                    <div class="portfolio-image-container">
                        <img src={img6} alt='img'/>
                        <div class="portfolio-details">
                            <p>
                            <h6>Album List</h6>
                            It is Album list project , in this you can add your favourite album and also you can update
                            it and delete it .
                            </p>
                        </div>
                    </div>
                </a>
               

              
                <a href="https:///">
                    <div class="portfolio-image-container">
                        <img src={img7} alt='img'/>
                        <div class="portfolio-details">
                            <p>
                            <h6>Album List</h6>
                            IT is Ping-pong game build using javaScrip. in which you can play the game easily with
                            enjoyment.
                            .
                            </p>
                        </div>
                    </div>
                </a>

            </div>
        </section>


    
    
   
  )
}

export default Projects