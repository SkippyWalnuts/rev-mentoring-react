import React, { useState } from "react";
import CourseSection from "./CourseSection";
import "./Course.css";

export default function Course(props) {
let [section, sectionSelect] = useState(props.defaultSection);
let [loaded, setLoaded] = useState(true);


function handleClick(event) {
    event.preventDefault();
    sectionSelect(event.target.value);
}

function load() {
setLoaded(true);
handleClick();
}

if (loaded) {
    return (
        <div className="Course">
          <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-4 title-col">
                <img src="../images/personal_opinion_undraw.png" className="img-fluid" 
                alt="person holding their personal opinion"></img>
                </div>
                <div className="col title-col">
                <h3>
                    <div className="section-title">Course</div>
                    Overview</h3>

                 </div>
            </div>
            <div className="row">
        <h4>"Diversity is the mix. <strong>Inclusion is 
             making the mix work.</strong>" <a href="https://inclusion-paradox.com/site/about-andres-tapia/"
            target="_blank"
            rel="noreferrer"
            alt="Andrés Tapia Inclusion Paradox"
            className="quote-link">Andrés Tapia</a>​</h4>
            </div> 
        </div>
        
        <div className="row course-buttons">
            <div className="col-md">
                <button value="Mentors" title="Mentors" onClick={handleClick}>Mentors​</button>
                <button value ="Mentees" title="Mentees" onClick={handleClick}>Mentees​</button>
            </div>
            <div className="col">
            <button value ="Advisors" title="Advisors" onClick={handleClick}>Advisors</button>
            <button value ="Workshops" title="Workshops" onClick={handleClick}>Workshops</button>
            </div>
            </div>
        <CourseSection title={section} />      
        <span id="Reviews"></span>
        </div>
    );
}
    else {
        load();
        return "Loading";
        }
}