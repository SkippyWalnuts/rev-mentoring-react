import React, { useState } from "react";
import ReviewsSection from "./ReviewsSection";
import "./Reviews.css";

export default function Reviews(props) {
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
        <div className="Reviews">
          <div className="container-fluid">
            <div className="row title-row align-items-center">
                <div className="col-4 title-col">
                <img src="../images/reviews_undraw.png" className="title-img img-fluid" 
                alt="a person holds pages of paper while looking at instructions for what is next"></img>
                </div>
                <div className="col title-col">
                <h3>
                    <div className="section-title">Reviews</div>
                    Measuring Success</h3>

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
        
        <div className="row reviews-buttons">
            <div className="col-md">
                <button value="Mentor Reviews" title="Mentor Reviews" onClick={handleClick}>Mentor Reviews​</button>
            </div>
            <div className="col">
            <button value ="Mentee Reviews" title="Mentee Reviews" onClick={handleClick}>Mentee Reviews​</button>
            </div>
            </div>
        <ReviewsSection title={section} />      
        <span id="Reviews"></span>
        </div>
    );
}
    else {
        load();
        return "Loading";
        }
}