import React from "react";
import "./About.css";

export default function About() {
    return (
    <div className="About">
<div className="container-fluid">
    <div className="row title-row align-items-center">
        
        <div className="col title-col">
        <h3>
            <div className="section-title">About</div>
            Reverse Mentoring</h3>
         </div>
        <div className="col title-col">
       
        <img src="../images/about_undraw.png" className="img-fluid title-img" 
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
        <p>​Reverse Mentoring helps your business harness the power 
        of human <em>connection</em> in a virtual world...without the survey-fatigue!</p> 
        </div>
    </div>
    <div className="row mx-5">
    <h5>Why Reverse Mentoring is good for you, your employees & your business</h5>
    <iframe src="https://streamly.video/embed/video/why-reverse-mentoring-is-good-for-you-your-employees-and-your-business" 
    scrolling="no" 
    allowFullScreen={true} 
    title="Becca Early explains why reverse mentoring is good for you, your employees and your business"
    className="streamly-video"> </iframe>
    <h5>About Becca Early</h5>
    <div className="about-becca">
    <p> 20 years of working in support roles taught Becca how to manage 
        busy schedules as effectively as possible, whilst finding it impossible to ignore the severe
        lack of attendee diversity within crucial business meetings. 
        <br />
        <br />
        Following a year of mentoring with dentsu UK's Reverse Mentoring pilot, Becca was asked to project-manage the 
        programme for dentsu Global's Media service-line. Drawing upon an understanding of how to capture the attention 
        of busy Senior Leaders, with an aim to restore employee faith in equitable leadership, Becca built a framework 
        of workshops, peer-led group discussions and schedule-simplicity. 
        <br />
        <br />
        Global Media's reviews and 5-star ratings caught the interest of many others at dentsu. In fact, participant 
        numbers doubled by Becca's second year of project-management, with multiple service lines of varying international locations 
        requesting access to apply. Many needed to be wait-listed for future rollouts, demonstrating just how important Reverse Mentoring 
        had become to the organisation on a truly global scale. 
        <br />
        <br />
        Becca's Reverse Mentoring has the potential to restore human connection within businesses and industries 
        in an increasingly virtual world. For support in developing inclusive leadership within your organisation, 
        arrange your free consultation call today!
        </p>
    </div>
    </div>
</div>   
<span id="reviews"></span>   
</div>
       
       );
}