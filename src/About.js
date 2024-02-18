import React from "react";
import "./About.css";

export default function About() {
    return (
    <div className="About">
<div className="container-fluid">
    <div className="row title-row align-items-center">
        
        <div className="col title-col">
        <div className="section-title">
           <h3>Do You Need 
            <div>A Better</div> 
            Understanding?
            </h3>
            </div>
         </div>
        <div className="col title-col">
        <img src="../images/about_undraw.png" className="img-fluid title-img" 
        alt="a person in a wheelchair holds a phone in one hand while raising a comment box above their head"></img>
        </div>
    </div>
    <div className="row">
        <h4>"...ask with genuine curiosity, why do YOU think that is?"{" "}
         <div>  <a href="https://www.instagram.com/a_becca_understanding"
            target="_blank"
            rel="noreferrer"
            alt="Becca Early's Instagram Profile"
            className="quote-link">a_becca_understanding <i class="fa-brands fa-instagram"></i></a>
            </div>
            </h4>

    </div> 
    <div className="row about-row">
        <div className="col-sm">
        <p> 

            A Better Understanding teaches teams how to 
            <strong>{" "}stay connected across digital work-environments</strong>, 
            empowering employees to<strong>{" "}Mentor-the-Managers{" "}</strong>(i.e. 'reverse' mentoring), 
            and encourage <strong>{" "}equitably inclusive decision-making{" "}</strong>
            in company board-rooms.
            <div className="about-bold">
            Goodbye, survey-fatigue!
            </div> 
        ​</p>
</div>
        <div className="col mb-3">
            <p> 
             A Better Understanding offers a <strong>safe space{" "}</strong> 
             to learn how to lead with <strong>vulnerability and friendship</strong>, 
             assisted by mediated, peer-led discussion topics throughout the year: 
            <div className="about-bold workshops">
            <ul>
            <li>Empathy</li>
            <li>Taking Accountability</li>
            <li>Setting Boundaries</li>
            <li>Privilege</li>
            </ul>
            </div>  
        </p>
        </div>
    </div>

    <div className="row about-row">
    <h5>Do You Have the Time <div>(and Budget...)?</div></h5>
    <p>A Better Understanding uses <strong>The Power of The PA{" "}</strong>
    to create <strong>sustainable</strong> bridges between employees and their managers. Designed 
    and led by a team of Personal and Executive Assistants, <strong>scheduling efficiency</strong> is 
    key to success. 
       <br />
       <br />
    <strong>A Better Understanding Consultation{" "}</strong>includes:
    <br />
    <ul>
    <li>1 x Consultant Advisor</li>
     <li>5 Mentors - 5 Mentees</li>
    </ul>
    
    Our Consultant Advisors have extensive Assistant and Administrator experience, including qualifications in 
    counselling, psychology and Mental Health First Aid. Each Advisor brings their own 
    perspective during group discussions, aids in matching Mentors to Mentees, and can 
    speak confidently with participants, regardless of seniority. 
    <br />
    <br />   
    <strong>The Power of The PA Training{" "}</strong> increases the chances for long-term success, 
    regardless of budget cuts! Give your own Assistants and Administrators the opportunity to facilitate alongside 
    a Consultant Advisor, taking 'tailor-made' to a whole new level. Keep the momentum going with annual refreshers 
    and consider it like DEI First Aid; wouldn't it be great to have trained Advisors in every business? 
    </p>
    </div>
</div>   
<span id="reviews"></span>   
</div>
       
       );
}