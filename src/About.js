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
       
        <img src="../images/about_undraw.png" className="img-fluid" 
        alt="a person in a wheelchair holds a phone in one hand while raising a comment box above their head"></img>
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
        <p className="p-right">​Reverse Mentoring helps your business harness the power 
        of human <em>connection</em> in an increasingly virtual world...without the survey-fatigue!</p> 
        </div>
    </div>
    <div className="row mx-5">
    <h3>why reverse mentoring is good for you, your employees & your business</h3>
    <iframe src="https://streamly.video/embed/video/why-reverse-mentoring-is-good-for-you-your-employees-and-your-business" 
    scrolling="no" 
    allowFullScreen={true} 
    title="Becca Early explains why reverse mentoring is good for you, your employees and your business"
    className="streamly-video"> </iframe>
    <h3>About Becca Early</h3>
    <div className="about-becca">
    <p> 20 years of working in support roles taught Becca how to manage 
        busy Senior Executives' time effectively, whilst overseeing a lack of 
        attendee diversity during crucial business meetings and events. Building upon the 
        learnings of a Reverse Mentoring pilot-run with previous employer, dentsu, 
        Becca led a newly designed version of the programme for 2-years, with a focus on peer-led discussions and 
        schedule efficiency. Not only did the participants double in number by the second year (with plenty more applicants 
        wait-listed), the feedback of those in attendance reflected how necessary
        they felt Reverse Mentoring had become to their leaders and organisation. 
        <br />
        Becca believes, if done right, Reverse Mentoring can change the world for good, bringing 
        human connection into increasingly-virtual work environments, adapting to even the tightest of schedules.
        </p>
    </div>
    </div>
</div>   
<span id="course"></span>   
</div>
       
       );
}