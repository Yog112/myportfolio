import React from 'react'
import '../css/Education.css'


const Education=()=>{
    return(
          <section id="education">

            <h1 class="section-heading mb75px">
                <span>
                    <i class="fas fa-briefcase"></i>
                </span>
                <span> Education </span>
            </h1>


            <div class="timeline">
                <div class="timeline-box ">
                    <h3 class="box1-heading">Vidya Jyoti Educational Society<br/><span
                            class="heading-color">BSc.IT</span><br/><br/><span
                            class="duration">2022</span></h3>
                </div>

                <div class="timeline-box ">
                    <h3 class="box1-heading">Govt.s.s.school Biar<br/><span
                            class="heading-color">Intermediate</span><br/><br/><span class="duration">2015</span>
                    </h3>
                </div>

                <div class="timeline-box ">
                    <h3 class="box1-heading"><br/>Govt.s.s.<br></br>school Biar<span
                            class="heading-color"><br/>Matriculate</span><br/><br/><span class="duration">2013</span>
                    </h3>
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

export default Education