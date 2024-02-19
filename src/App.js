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
  <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Ftherealtops" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
  <a href="https://www.facebook.com/ukTOpS/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
<p>Copyright A Better Understanding 2022. All rights reserved</p>
<a href="https://www.instagram.com/uktopsofficial/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
<a href="https://www.youtube.com/channel/UC9eoFzJrTXfVLf5PLiTQ_yg" target="_blank"><i class="fa-brands fa-youtube"></i></a>
</div>
</div>
    </div>
  );
}

export default App;
