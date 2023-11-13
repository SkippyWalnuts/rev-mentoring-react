import React from "react";

export default function CourseSection(props) {

function title() {
    return(<h3>{props.title}</h3>)
}


    return (
        <div className="CourseSection">
<div className=" container-fluid">
<div className="row align-items-center">
        
        <div className="col title-col">
            <div className="course-section-title">
        {title()}
            </div>
         </div>
        <div className="col-4 title-col">
        <img src="../images/mentor_advisors_undraw.png" className="img-fluid" 
        alt="person arranging images of people with speech bubbles"></img>
        </div>
    </div>
    <div className="row">
      <p>Advisors agree on timeline for overall programme, 
        resulting in agreed application closure and match-making date(s). 
        Update presentations with schedule and aim at town halls, team meetings, 
        Talent Champions, HR Huddles etc. – encourage word of mouth with Mentor
         & Mentee recommendations, ask for invites to relevant meetings. Share 
         advert with attendees of meetings following presentation, including 
         application links 
        </p>
    </div> 
    
</div>
        </div>
    )
}