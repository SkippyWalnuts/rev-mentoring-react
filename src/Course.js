import React from "react";
import CourseSection from "./CourseSection";
import "./Course.css";

export default function Course() {
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
        <h4> "Diversity is the mix. Inclusion is <strong>making the mix work</strong>" ​ 
            <a href="https://inclusion-paradox.com/site/about-andres-tapia/"
            target="_blank"
            rel="noreferrer"
            alt="Andrés Tapia Inclusion Paradox"
            className="quote-link">Andrés Tapia</a>​</h4>
            </div> 
        </div>
        <CourseSection />      
        </div>
    )
}