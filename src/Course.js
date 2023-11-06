import React from "react";
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
            alt="Andrés Tapia Inclusion Paradox">Andrés Tapia</a>​</h4>
            </div> 
            <div className="row course-buttons">
            <div className="col">
                <button><a href="#advisors">Advisors</a></button>
                <button>Applications</button>
                <button>Matches​</button>
                <button>Briefings</button>
            </div>
            <div className="col">
                <button>Introductions​</button>
                <button>Conversations​</button>
                <button>Workshops</button>
                <button>Accountability​</button>
            </div>
            </div>
        </div>      
        </div>
    )
}