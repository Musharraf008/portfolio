import React from "react";
import "./app.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Tools from "./pages/tools/Tools";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contacts/Contact";

const App = () => {
  return (
    <div className="app-container">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="tools">
        <Tools />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
