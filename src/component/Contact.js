import React from 'react'
import '../css/Contect.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Facebook   from '@mui/icons-material/Facebook';

const Contact = () => {
  return (
    <section id="contact">
            <h1 class="section-heading mb50px">
                <span>
                    <i class="far fa-address-card"></i>
                </span>
                <span> Contact </span>
            </h1>
            <div id="contact-container">

                <div id="contact-form-container">
                    <h3> Get In touch </h3>
                    <form id="contact-form"action="https://formspree.io/f/mzblbpqr" method="POST">
                        <input id="input-name" name="name" type="text" placeholder="Your Name"/>
                        <input id="input-email" name="email" type="text" required placeholder="Your Email"/>
                        <textarea id="input-message" name="message" rows="2" cols='40' placeholder="Message"></textarea>
                        <button class="sub-btn" type="submit">SEND MESSAGE</button>
                    </form>
                </div>
                <div id="my-details-container">
                    <h3> My Address </h3>
                    <div class="my-details-info-container">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Hamirpur(H.P)</span>
                    </div>
                    <div class="my-details-info-container">
                        <i class="fas fa-mobile-alt"></i>
                        <span>+91-7018382540</span>
                    </div>
                    <div class="my-details-info-container">
                        <i class="far fa-envelope"></i>
                        <span>yraj24167@gmail.com</span>
                    </div>
                </div>
                <div id="my-details-container">

                    <h4> social-Links </h4>
                    <ul class="horizontal-list-social">
                        <li>
                            <a href="https://www.linkedin.com/in/yograj-singh-380b9715b/">
                                <LinkedInIcon/>
                            </a>
                        </li>

                        <li>
                            <a href="https://github.com/Yog112">
                                <GitHubIcon/>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.facebook.com/roy.33483">
                                <Facebook/>
                            </a>
                        </li>

                    </ul>

                </div>
            </div>
        </section>
  )
}

export default Contact