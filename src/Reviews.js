import React, { useState } from "react";
import PriceGuide from "./PriceGuide";
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
                alt="a person holds their speech bubble and stands to the right of a larger speech bubble"></img>
                </div>
                <div className="col title-col">
                <h3>Reviews</h3>
                    <h4>Measuring Success</h4>

                 </div>
            </div>
            <div className="row section-quote">
            <p>"Diversity is the mix. <strong>Inclusion is 
             making the mix work.</strong>" <a href="https://inclusion-paradox.com/site/about-andres-tapia/"
            target="_blank"
            rel="noreferrer"
            alt="Andrés Tapia Inclusion Paradox"
            className="quote-link">Andrés Tapia</a>
            ​</p>
            
            </div> 
        </div>
        
        <div className="row reviews-buttons">
            <div className="col-md">
                <button value="Mentor Reviews" title="Mentor Reviews" onClick={handleClick}>View Mentor Reviews​</button>
            </div>
            <div className="col">
            <button value ="Mentee Reviews" title="Mentee Reviews" onClick={handleClick}>View Mentee Reviews​</button>
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