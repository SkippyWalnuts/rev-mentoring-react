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
        <h4>"…rarely can a <strong>response</strong> make something better. 
                What makes something better is <strong>connection</strong>" (Dr. Brené Brown)​</h4>
        <p>We <em>reverse</em> the standard mentoring practice of a Senior Leader mentoring an Employee for career advancement​.
​This time, an Employee mentors a Senior Leader on their experiences and perspectives. These include topics discussed during our workshops, or others that may come up organically during conversation. ​
<br />
<br />
​Reverse Mentoring provides opportunities to expand our understanding of those without the same privileges, developing a more inclusive leadership mentality by using nothing more than human connection.​
​</p>
        </div> 
</div>      
</div>
       
       );
}