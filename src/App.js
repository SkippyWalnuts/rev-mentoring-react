import React from "react";
import Hero from "./Hero";
import Contact from "./Contact";
import About from "./About";
import Overview from "./Overview";
import RevNavbar from "./RevNavbar";
import './App.css';

function App() {
  return (
    <div className="App" id="home">
<RevNavbar />
<Hero />
<Contact />
<About />
<Overview />

    </div>
  );
}

export default App;
