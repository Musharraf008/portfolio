import React from "react";
import "./projects.css";
import projectsPuppy from "../../assets/puppies/projects-puppy.png";
import test1 from "../../assets/img/Test-project-1.png";
import test11 from "../../assets/img/Test-project-11.png";
import test2 from "../../assets/img/Test-project-2.png";
import test22 from "../../assets/img/Test-project-22.png";

const Projects = ({ changebg }) => {
  return (
    <div className="projects-container">
      <header
        style={{
          color: changebg ? "black" : "",
        }}
      >
        <div className="project-header-test-wrapper">
          <div>Project Gallery:</div>
          <div>
            Where <span className="orange"> Ideas</span> Come to{" "}
            <span className="green">Life!</span>
          </div>
        </div>
        <img src={projectsPuppy} alt="" loading="lazy" />
      </header>
      <main>
        <div
          className="project-wrapper-bg"
          style={{
            boxShadow: changebg ? "2px 3px 12px 1px rgba(0, 0, 0, 0.3)" : "",
          }}
        >
          <img src={test11} alt="blured-bg" className="bg-img" loading="lazy" />
          <div className="project-blur-bg">
            <img
              src={test1}
              alt="project-img"
              className="project-img"
              loading="lazy"
            />
            <div className="project-description-wrapper">
              <h3>E-commerce App</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,
                esse nam dignissimos hic quae deserunt adipisci. Magni
                perspiciatis tempora repellendus nisi,
              </p>
            </div>
          </div>
        </div>
        <div
          className="project-wrapper-bg"
          style={{
            boxShadow: changebg ? "2px 3px 12px 1px rgba(0, 0, 0, 0.3)" : "",
          }}
        >
          <img src={test22} alt="blured-bg" className="bg-img" loading="lazy" />
          <div className="project-blur-bg">
            <img
              src={test2}
              alt="project-img"
              className="project-img"
              loading="lazy"
            />
            <div className="project-description-wrapper">
              <h3>Self development App</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,
                esse nam dignissimos hic quae deserunt adipisci. Magni
                perspiciatis tempora repellendus nisi,
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
