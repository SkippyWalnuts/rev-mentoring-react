import React from "react";
import "./Hero.css";

export default function Hero() {
    return (
<div className="Hero mb-5">
    <div className="container-fluid">
        <div className="row">
            <div className="col-8">
        <h1>
           <div>Virtual</div>Reverse<div>Mentoring</div>
        </h1>
        </div>
        <div className="col">
        <img src="./images/teacher_undraw.svg" className="img-fluid teacher-img" alt="teacher at laptop teaching virtually"></img>
        </div>
        </div>
        <h2>
            Supporting the development of inclusive leadership
        </h2>
        </div> 
    
    <img src="./images/reverse-mentoring.webp"
    className="img-fluid rev-mentor-img"    
    alt="Reverse Mentoring" id="person pointing to a ladder against a wall of locks, while the person next to them holds a key"/>
    </div>
    );
}