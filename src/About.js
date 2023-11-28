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
        busy Senior Executives' time effectively, whilst highlighting the lack of 
        attendee diversity during crucial business meetings and work events. Building on the 
        learnings of a Reverse Mentoring pilot-run with previous employer, dentsu, 
        Becca led a newly designed version of the programme for 2-years, teaching others 
        how to continue its success. Not only did the number of participants double in the second year, the feedback of those in attendance reflected how necessary
        they felt Reverse Mentoring has become to any leadership team and organisation hoping to become inclusive. 
        <br />
        Becca believes Reverse Mentoring has the power to change the world of business for the better, if done correctly, restoring the human-side of the virtual working environment
        to suit even the trickiest of schedules.
        </p>
    </div>
    </div>
</div>   
<span id="course"></span>   
</div>
       
       );
}