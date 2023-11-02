import React from "react";
import Hero from "./Hero";
import Contact from "./Contact";
import About from "./About";
import Course from "./Course";
import CourseSection from "./CourseSection";
import RevNavbar from "./RevNavbar";
import './App.css';

function App() {
  return (
    <div className="App" id="home">
<RevNavbar />
<Hero />
<Contact />
<About />
<Course />
<CourseSection />


    </div>
  );
}

export default App;
