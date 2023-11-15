import React from "react";
import "./Hero.css";

export default function Hero() {
    return (
<div className="Hero">
    <div className="container-fluid">
        <div className="row align-items-center mb-2">
        <div className="col">
        <img src="./images/teacher_undraw.svg" className="img-fluid teacher-img" alt="teaching at a laptop"></img>
        </div>
            <div className="col">
        <h1>
           Reverse
           <br />
           Mentoring
        </h1>
        </div>

        </div>
        <div className="row">
        <h2>
            Supporting the development of inclusive leadership
        </h2>
        </div>
        <div className="row">
        <div className="col">
        <ul>
            <li>
                Mentors ⭐4.8 / 5⭐
            </li>
            <li> Mentees ⭐4.8 / 5⭐</li>

        </ul>
        </div>
        <div className="col">
        <ul>
            <li>Mentors ⭐4.7 / 5⭐</li>
            <li>Mentees ⭐5 / 5⭐</li>
        </ul>
        </div>
        </div>
        <div className="row">
        <div className="col">
        <h3>
            How helpful Reverse Mentoring has been at their company
        </h3>
        </div>
        <div className="col">
        <h3>
         Would recommend Reverse Mentoring to a colleague
        </h3>
        </div>
        </div>
        <div className="col">
        <button>Contact</button></div>
         </div>
  </div>
    );
}