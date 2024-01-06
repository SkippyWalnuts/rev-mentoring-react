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
<Reviews defaultSection="Mentors" />

    </div>
  );
}

export default App;
