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
          A Better
          <br /> Understanding
        </h1>
        </div>
        <div className="col">
        <img src="./images/teacher_undraw.svg" className="img-fluid teacher-img" 
        alt="a person holds up a piece of paper with text on it to show someone on their laptop's webcam"></img>
        </div>
        </div>
        <div className="row">
        <h2>
        Building bridges between employees and business leaders
        </h2>
        </div>
        <div className="row">
        <div className="col">
        <h3>
            How helpful has Reverse Mentoring been at your company?*
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
               <div className="ratings">  
               Mentors{" "}
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i> 4.8
                Mentees{" "}
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i> 4.8
                </div>
        </div>
        <div className="col">
             <div className="ratings">
                Mentors{" "}
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i> 4.7
                Mentees{" "}
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i> 5.0
</div>
        </div>
        </div>
        <div className="col">
            <div className="contact-button">
        <a href="mailto:becca.early@outlook.com?subject=A Better Understanding Enquiry" title="Email Becca Early with any of your A Better Understanding questions or comments"><button>Contact</button></a>
        </div>
        </div>
         </div>
         <span id="about"></span>
         <p>*dentsu International, Oct 2022</p>
  </div>
    );
}