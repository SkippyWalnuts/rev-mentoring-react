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
            className="quote-link">a_becca_understanding <i className="fa-brands fa-instagram"></i></a>
            </div>
            </h4>

    </div> 
    <div className="row about-row">
        <div className="col-sm">
        <p> 

            A Better Understanding teaches teams how to 
            <strong>{" "}stay connected across digital work-environments</strong>, 
            empowering employees to<strong>{" "}Mentor-the-Managers{" "}</strong>(using 'reverse' mentoring), 
            and encouraging <strong>{" "}more equitable, inclusive decision-making{" "}</strong>
            into company board-rooms.
        </p>
            <div className="about-bold about-standout mb-2">
            Get to know your colleagues, without the survey-fatigue!
            </div> 
        
</div>
        <div className="col mb-3">
            <p> 
             A Better Understanding offers a <strong>safe space{" "}</strong> 
             to learn how to lead with <strong>vulnerability and friendship</strong>, 
             reinforced by mediated, peer-led discussion topics on: 
            </p>
            <div className="about-bold about-standout">
            <ul>
            <li>Empathy</li>
            <li>Taking Accountability</li>
            <li>Setting Boundaries</li>
            <li>Privilege</li>
            </ul>
            </div>  
        
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
    </p>
    <div className="about-standout">
    <ul>
    <li>1 x Consultant Advisor = 5 Matches/10 Participants</li>
     <li>5 - 20 Matches/10 - 40 Participants</li>
     <li>1 x 4min Application Form</li>
     <li>1 x 1hr Introduction & Briefing Call</li>
     <li>1 x 1hr Mentor Conversations (Min. 3) </li>
     <li>3 x 1hr Annual Mentor Guided Discussions</li>
     <li>3 x 1hr Annual Mentee Guided Discussions</li>
     <li>1 x 1hr Beyond A Better Understanding</li>
     <li>Time Commitment  = <strong>5hr 4min - 11hr 4min</strong></li>
    </ul>
    </div>
    <p>
    Our Consultant Advisors have extensive Assistant and Administrator experience, including qualifications in 
    counselling, psychology and Mental Health First Aid. Each Advisor brings their<strong>{" "}own 
    perspective</strong> during group discussions, matches Mentors to Mentees, and commits to
    <strong>{" "}supporting all participants equally</strong>, no matter the seniority within the business. 
    <br />
    <br />
    <strong>The Power of The PA Training{" "}</strong> increases the chances for long-term success, 
    <strong>{" "}regardless of budget cuts</strong>! Give up to 3 of your company Assistants and Administrators the opportunity to facilitate 
    alongside a Consultant Advisor, taking 'tailor-made' to a whole new level. Keep the momentum going with annual 
    refreshers and <strong>consider it to be like DEI First Aid</strong>; we hope to have trained Advisors in every business, someday...
</p> 
    </div>
</div>   
<span id="reviews"></span>   
</div>
       
       );
}