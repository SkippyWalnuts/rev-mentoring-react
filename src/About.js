import React from "react";
import "./About.css";

export default function About() {
    return (
    <div className="About">
<div className="container-fluid">
    <div className="row align-items-center">
        
        <div className="col title-col">
        <h3>
            <div className="section-title" id="about">About</div>
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
                What makes something better is <strong>connection</strong>" (Dr. Brené Brown)​</h4>
    </div> 
    <div className="row">
        <div className="col">
    <p>By <em>reversing</em> the role of Mentor​, 
        Employees are empowered & supported in mentoring Senior Leaders on their experiences, perspectives & skills. 
        These include topics discussed during our group <a href="/#workshops">Workshops</a> & conversations.​</p></div>
        <div className="col">
<p>​Reverse Mentoring provides opportunities to expand understanding of those without the same privileges, developing inclusive leadership by using the power of <em>connection</em>.​
        ​</p></div>
    </div>
</div>      
</div>
       
       );
}