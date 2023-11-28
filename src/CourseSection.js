import React from "react";
import CourseDetails from "./CourseDetails";
import "./CourseSection.css";


export default function CourseSection(props) {

return (
        <div className="CourseSection">
<div className=" container-fluid">
<div className="row align-items-center">
        
        <div className="col title-col">
        <h3>{props.title}</h3>
         </div>
        <div className="col-4 title-col">
        <img src="../images/mentor_advisors_undraw.png" className="img-fluid" 
        alt="person arranging images of people with speech bubbles"></img>
        </div>
    </div>
    <div className="row">
<CourseDetails contents={props.title}/>
    </div>
</div>
        </div>
    )
}