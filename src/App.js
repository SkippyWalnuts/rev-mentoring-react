import React from "react";
import Hero from "./Hero";
import About from "./About";
import Course from "./Course";

import Reviews from "./Reviews";
import RevNavbar from "./RevNavbar";
import './App.css';

function App() {
  return (
    <div className="App" id="home">
<RevNavbar />
<Hero />
<About />
<Course />
<Reviews />

    </div>
  );
}

export default App;
