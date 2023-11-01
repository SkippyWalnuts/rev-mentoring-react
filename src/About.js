import React from "react";
import "./About.css";

export default function About() {
    return (
    <div className="About">
<div className="container-fluid">
    <div className="row align-items-center">
        
        <div className="col about-col">
        <h3>
            <div className="about-title" id="about">About</div>
            Reverse Mentoring</h3>
         </div>
        <div className="col about-col">
        <img src="../images/reverse-mentoring.webp" className="img-fluid" 
        alt="person pointing up a ladder against a wall of locks, as another person looks up holding a key"></img>
        </div>
    </div>
    <div className="row">
                <h4><em>Dr. Brené Brown:</em> "…rarely can a <strong>response</strong> make something better. 
                     What makes something better is <strong>connection</strong>"​</h4>
                </div> 
</div>      
</div>
       
       );
}