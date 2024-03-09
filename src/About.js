import React from "react";
import PriceGuide from "./Contact";
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
           <div className="about-bold text-standout">
        <p> 
        Connecting employees across increasingly digital work environments, whilst paving the way for equitably inclusive business leaders 
            </p> 
            </div>  
        <div className="col-sm">
        <p> 
        Over 20 years of Personal Assistant (PA) experience left A Better Understanding’s Founder & Advisor, Becca Early, feeling complicit with the lack of attendee diversity of C-Suite board-rooms. Eager to join the fight for Diversity, Equity & Inclusion (DEI) Becca understood why many projects are unsustainable and first cut when budgets tighten: 
DEI needs Assistants. 
        </p>

        
</div>
        <div className="col mb-3">
            <p> 
Measuring success with attendance and participant reviews was the only PR necessary; 
5-star ratings and consistent engagement meant participant numbers doubled by the second year, with many more applicants wait-listed across eager service lines.

A Better Understanding’s framework draws upon Becca’s Power of the PA: time efficiency, an appreciation for simplicity, and the confidence to speak comfortably with anyone, regardless of business titles. After all, who better to create sustainable, budget-friendly bridges between employees than the Assistants already doing so within the busiest of business schedules? 
            </p>

        </div>
        <div className="about-bold text-standout">
            <p>Get to know your business, without the survey-fatigue!</p>
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
    <strong>{" "}supporting all participants equally</strong>, no matter the business title. 
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