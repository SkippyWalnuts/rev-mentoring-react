import React from "react";

export default function Overview() {
    return (
        <div className="Overview">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col title-col">
                <img src="../images/personal_opinion_undraw.png" className="img-fluid" 
                alt="person holding their personal opinion"></img>
                </div>
                <div className="col-7 title-col">
                <h3>
                    <div className="section-title" id="course-overview">Course</div>
                    Overview</h3>
                 </div>
            </div>
            <div className="row">
                <ul>
                    <li>MENTOR ADVISORS</li>
                    <li>APPLICATIONS</li>
                    <li>MATCH-MAKING​</li>
                    <li>MENTOR & MENTEE BRIEFINGS</li>
                    <li>INTRODUCING A MATCH​</li>
                    <li>MONTHLY MENTOR CONVERSATIONS​</li>
                    <li>WORKSHOPS​</li>
                    <li>TAKING ACCOUNTABILITY​</li>
                ​</ul>
   </div> 
        </div>      
        </div>
    )
}