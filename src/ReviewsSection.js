import React from "react";
import ReviewsText from "./ReviewsText";
import "./ReviewsSection.css";


export default function ReviewsSection(props) {

return (
        <div className="ReviewsSection">
<div className=" container-fluid">
<div className="row align-items-center">
        
        <div className="col title-col">
        <h3>{props.title}</h3>
         </div>

    </div>
    <div className="row">
<ReviewsText contents={props.title}/>
    </div>
</div>
        </div>
    )
}