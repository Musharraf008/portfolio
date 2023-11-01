import React from "react";
import "./app.css";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <div className="app-container">
      <section id="home">
        <Home />
      </section>
      
      <section id="about"><About /></section>
      <section id="projects">Projects</section>
      <section id="contact">Contact</section>
    </div>
  );
};

export default App;
