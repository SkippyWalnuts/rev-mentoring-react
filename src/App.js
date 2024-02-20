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
<div class="container container-fluid footer-container fixed-bottom">
<div class="d-flex justify-content-center">
  <a href="https://www.linkedin.com/in/becca-early/" 
  target="_blank"
  rel="noreferrer"
  alt="Becca Early, Reverse Mentor Consultant, LinkedIn Profile">
    <i class="fa-brands fa-linkedin"></i></a>
<p>A Better Understanding 2022</p>
<a href="https://www.instagram.com/a_becca_understanding" 
target="_blank"
rel="noreferrer"
alt="Becca Early AKA a-becca-understanding, Reverse Mentor Consultant, Instagram Profile"><i class="fa-brands fa-instagram"></i></a>
</div>
</div>
    </div>
  );
}

export default App;
