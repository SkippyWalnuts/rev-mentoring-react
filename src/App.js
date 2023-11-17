import React from "react";
import Hero from "./Hero";
import About from "./About";
import Course from "./Course";

import Reviews from "./Reviews";
import RevNavbar from "./RevNavbar";
import './App.css';

function App() {
  return (
    <div className="App">
<RevNavbar />
<Hero />
<About />
<Course defaultSection="Mentors" />
<Reviews />

    </div>
  );
}

export default App;
