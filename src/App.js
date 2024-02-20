import React from "react";
import Hero from "./Hero";
import About from "./About";
import Reviews from "./Reviews";
import RevNavbar from "./RevNavbar";
import './App.css';

function App() {
  return (
    <div className="App">
<RevNavbar />
<Hero />
<About />
<Reviews defaultSection="Mentor Reviews" />
<div className="container container-fluid footer-container fixed-bottom">
<div className="d-flex justify-content-center">
  <a href="https://www.linkedin.com/in/becca-early/" 
  target="_blank"
  rel="noreferrer"
  alt="Becca Early, Reverse Mentor Consultant, LinkedIn Profile">
    <i className="fa-brands fa-linkedin"></i></a>
<p>A Better Understanding - Intellectual Property (IP) since 2022</p>
<a href="https://www.instagram.com/a_becca_understanding" 
target="_blank"
rel="noreferrer"
alt="Becca Early's Instagram profile, a_becca_understanding"><i className="fa-brands fa-instagram"></i></a>
</div>
</div>
    </div>
  );
}

export default App;
