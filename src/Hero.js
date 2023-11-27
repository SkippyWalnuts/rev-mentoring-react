import React from "react";
import "./Hero.css";

export default function Hero() {
    return (
<div className="Hero">
    <span id="home"></span>
    <div className="container-fluid hero-container">
        <div className="row align-items-center mb-2">
        <div className="col">
        <h1>
           Reverse
           <br />
           Mentoring
        </h1>
        </div>
        <div className="col">
        <img src="./images/teacher_undraw.svg" className="img-fluid teacher-img" alt="teaching at a laptop"></img>
        </div>
        </div>
        <div className="row">
        <h2>
            Supporting the development of inclusive leadership
        </h2>
        </div>
        <div className="row">
        <div className="col">
        <h3>
            How helpful has our Reverse Mentoring been at your company?*
        </h3>
        </div>
        <div className="col">
        <h3>
         Would you recommend Reverse Mentoring to a colleague?*
        </h3>
        </div>
        </div>
        <div className="row">
        <div className="col">
               <div className="ratings">  Mentors{" "}
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i> 4.8
                </div>
                 <div className="ratings">
                Mentees{" "}
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i> 4.8
                </div>
        </div>
        <div className="col">
             <div className="ratings">
                Mentors{" "}
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i> 4.7
                </div> 
                 <div className="ratings">
                Mentees{" "}
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i> 5.0
</div>
        </div>
        </div>
        <div className="row">
            <div className="contact-button">
        <a href="mailto:becca.early@outlook.com?subject=Reverse Mentoring Query" title="Email Becca Early with Reverse Mentoring queries"><button>Contact</button></a>
        </div>
        </div>
         </div>
         <p>*22 participants, dentsu International, Oct 2022</p>
         <span id="about"></span>
  </div>
    );
}