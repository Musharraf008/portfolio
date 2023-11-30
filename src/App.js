import React, { useState } from "react";
import "./app.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Tools from "./pages/tools/Tools";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contacts/Contact";

const App = () => {
  const [changeBg, setChangeBg] = useState(false);
  return (
    <div className="app-container" style={{
      background: changeBg ? '#FFF' : '',
      
    }}>
      <section id="home">
        <Home setBg={setChangeBg} />
      </section>
      <section id="about">
        <About changebg={changeBg} />
      </section>
      <section id="tools">
        <Tools changebg={changeBg} />
      </section>
      <section id="projects">
        <Projects changebg={changeBg} />
      </section>
      <section id="contact">
        <Contact changebg={changeBg} />
      </section>
    </div>
  );
};

export default App;
