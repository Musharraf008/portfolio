import React from "react";
import "./projects.css";
import projectsPuppy from "../../assets/icons/projects-puppy.png";
import test1 from "../../assets/img/Test-project-1.png";
import test11 from "../../assets/img/Test-project-11.png";
import test2 from "../../assets/img/Test-project-2.png";
import test22 from "../../assets/img/Test-project-22.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <header>
        Project Gallery: Where <span className="orange"> Ideas</span> Come to <span className="green">Life!</span>
        <img src={projectsPuppy} alt="" />
      </header>
      <main>
        <div className="project-wrapper-bg">
          <img src={test11} alt="blured-bg" className="bg-img" />
          <div className="project-blur-bg">
            <img src={test1} alt="project-img" className="project-img" />
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
        <div className="project-wrapper-bg">
          <img src={test22} alt="blured-bg" className="bg-img" />
          <div className="project-blur-bg">
            <img src={test2} alt="project-img" className="project-img" />
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
