import React from "react";
import "./About.css";

export default function About() {
    return (
    <div className="About">
<div className="container-fluid">
    <div className="row align-items-center">
        
        <div className="col title-col">
        <h3>
            <div className="section-title">About</div>
            Reverse Mentoring</h3>
         </div>
        <div className="col title-col">
       <a href="https://www.marieclaire.fr/le-reverse-mentoring-ou-le-phenomene-du-mentorat-inverse,1250730.asp" target="_blank" rel="noreferrer"
       title="(Fr) Reverse mentoring or the Phenomenon of Reverse Mentoring by Julia Kadri">
        <img src="../images/reverse-mentoring-ladder.png" className="img-fluid" 
        alt="person pointing up a ladder against a wall of locks, as another person looks up holding a key"></img></a>
        </div>
    </div>
    <div className="row">
        <h4>"…rarely can a <strong>response</strong> make something better. 
                What makes something better is <strong>connection.</strong>"{" "}
           <a href="https://brenebrown.com/"
            target="_blank"
            rel="noreferrer"
            alt="Brené Brown's Website"
            className="quote-link">Brené Brown</a></h4>
    </div> 
    <div className="row align-items-center">
        <div className="col">
        <p><em>Reversing</em> the role of Mentor​ gives 
    Senior Leaders the chance to be mentored by Employees on perspectives the board-rooms 
    are missing out on. 
        ​</p>
</div>
        <div className="col">
        <p className="p-right">In an increasingly virtual world, ​Reverse Mentoring helps your business harness the power 
        of human <em>connection</em>...without the survey-fatigue!</p> 
        </div>
    </div>
    <div className="row mx-5">
    <h3>why reverse mentoring is good for you, your employees & your business</h3>
    <iframe src="https://streamly.video/embed/video/why-reverse-mentoring-is-good-for-you-your-employees-and-your-business" 
    scrolling="no" 
    allowFullScreen={true} 
    title="Becca Early explains why reverse mentoring is good for you, your employees and your business"
    className="streamly-video"> </iframe>
        </div>
</div>   
<span id="course"></span>   
</div>
       
       );
}