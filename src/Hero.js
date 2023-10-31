import React from "react";
import "./Hero.css";

export default function Hero() {
    return (
<div className="Hero mb-5">
    <div className="container-fluid">
        <div className="row align-items-center mb-2">
        <div className="col">
        <img src="./images/teacher_undraw.svg" className="img-fluid teacher-img" alt="teacher at laptop teaching virtually"></img>
        </div>
            <div className="col-8">
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
    </div>
</div>
    );
}