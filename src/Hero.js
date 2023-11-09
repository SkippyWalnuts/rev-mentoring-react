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
        <iframe src="https://streamly.video/embed/video/why-reverse-mentoring-is-good-for-you-your-employees-and-your-business" allowFullScreen="true" title="Becca Early explains Reverse Mentoring"
        className="streamly-video"> </iframe>
        </div>
    </div>
</div>
    );
}