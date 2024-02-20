import React from "react";
import PriceGuide from "./PriceGuide";
import "./About.css";

export default function About() {
    return (
    <div className="About">
<div className="container-fluid">
    <div className="row title-row align-items-center">
        
        <div className="col title-col">
                   <h3>Need</h3>
           <h4> A Better
            Understanding?</h4>
            
         
         </div>
        <div className="col title-col">
        <img src="../images/about_undraw.png" className="img-fluid title-img" 
        alt="a person in a wheelchair holds a phone in one hand while raising a comment box above their head"></img>
        </div>
    </div>
    <div className="row section-quote">
        <p>Ask with genuine curiosity, "why do YOU think that is?"
            <br/>
           <a href="https://www.instagram.com/a_becca_understanding"
            target="_blank"
            rel="noreferrer"
            alt="Becca Early's Instagram Profile"
            className="quote-link">a_becca_understanding <i className="fa-brands fa-instagram"></i></a>

            </p>

    </div> 
    <div className="row row-margin">
        <div className="col-sm">
        <p> 

            A Better Understanding teaches teams how to 
            <strong>{" "}stay connected across digital work-environments</strong>, 
            empowering employees to<strong>{" "}Mentor-the-Managers{" "}</strong>(using 'reverse' mentoring), 
            and encourage<strong>{" "}more equitable, inclusive decision-making{" "}</strong>
            to be made in company board-rooms.
        </p>
            <div className="about-bold text-standout">
            Get to know your business, without the survey-fatigue!
            </div> 
        
</div>
        <div className="col mb-3">
            <p> 
             A Better Understanding offers a <strong>safe space{" "}</strong> 
             to learn how to lead with <strong>vulnerability and friendship</strong>, 
             reinforced by mediated, peer-led discussion topics on: 
            </p>
            <div className="about-bold text-standout">
            <ul>
            <li>Empathy</li>
            <li>Taking Accountability</li>
            <li>Setting Boundaries</li>
            <li>Privilege</li>
            </ul>
            </div>  
        </div>
        <div>
        <p> A Better Understanding uses <strong>Power of The PA{" "}</strong>
            to create <strong>sustainable</strong> bridges between employees and their managers. Designed 
            and led by a team of Personal and Executive Assistants, <strong>scheduling efficiency</strong> is 
            key to success. 
            </p> 
            </div> 
    </div>

    <div className="row row-margin">
    <h5>Do You Have the Time <div>(and Budget...)?</div></h5>
    <p><strong>A Better Understanding Consultation{" "}</strong>includes:
    </p>
    <div className="text-standout consultation-details">
    <ul>
    <li>1 - 4 Consultant Advisor(s)</li>
     <li>5 - 20 Matches/10 - 40 Participants</li>
     <li>12 Month Commitment</li>
    <li><strong>5 - 11hr 'Successful' Engagement</strong></li>
    </ul>
    </div>
    <p>
        
    Consultant Advisors have extensive Assistant and Administrator experience, including qualifications in 
    counselling, psychology and Mental Health support. Each Advisor brings their<strong>{" "}own 
    perspective</strong> during group discussions, matches Mentors to Mentees, and commits to
    <strong>{" "}supporting all participants equally</strong>, no matter the busines title. 
    <br />
    <br />
    
    <strong>Power of The PA Training{" "}</strong> increases the chances for long-term success, 
    <strong>{" "}regardless of budget cuts</strong>. Give 1 - 3 of your company Assistants and/or Administrators the opportunity to facilitate 
    alongside a Consultant Advisor, taking 'tailor-made' to a whole new level. Keep the momentum going with annual 
    refreshers, and consider this along the lines of<strong>{" "}DEI First-Aid</strong>; we dream of training Advisors in every industry imaginable...
</p> 
<div className="text-standout consultation-details">
    <ul>
    <li>12+ Month Commitment</li>
     <li><strong>14hr+ 'Successful' Training</strong></li>
     <li>Annual Refresher Training (optional)</li>
    </ul>
    </div>
    </div>
</div>   
<span id="reviews"></span>   
<PriceGuide />
</div>
       
       );
}