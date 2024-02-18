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
        <h4>"Ask with genuine curiosity, why do YOU think that is?"{" "}
         <div>  <a href="https://www.instagram.com/a_becca_understanding"
            target="_blank"
            rel="noreferrer"
            alt="Becca Early's Instagram Profile"
            className="quote-link">a_becca_understanding <i class="fa-brands fa-instagram"></i></a>
            </div>
            </h4>

    </div> 
    <div className="row align-items-top about-row">
        <div className="col-sm">
        <p> A Better Understanding teaches teams how to 
            <strong>{" "}stay connected across digital work-environments</strong>, 
            empowering employees to<strong>{" "}Mentor-the-Managers</strong>, 
            and encourage the<strong>{" "}equitable inclusivity{" "}</strong> 
            business decisions often miss out on.
            <div className="about-bold">
            Goodbye survey-fatigue!
            </div> 
        ​</p>
</div>

        <div className="col">
           
       <p> 
             A Better Understanding offers a <strong>safe space{" "}</strong> 
             to build bridges with <strong>vulnerability and friendship{" "}</strong> 
             with mediated, peer-led discussions about: 
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

    <div>
    <h5>Do We Have the Time (and Budget...)?</h5>
    <p>Designed and led by a team of Assistants and Administrators, we know how to create sustainable bridges
        between employees and their managers. 
    </p>
    </div>

    <div className="row">
    <h5>Why Reverse Mentoring* is good for you, your employees & your business</h5>
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