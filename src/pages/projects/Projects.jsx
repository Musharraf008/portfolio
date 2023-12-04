import React from "react";
import "./projects.css";
import projectsPuppy from "../../assets/puppies/projects-puppy.png";
import test1 from "../../assets/img/Test-project-1.png";
import test11 from "../../assets/img/Test-project-11.png";
import test2 from "../../assets/img/Test-project-2.png";
import test22 from "../../assets/img/Test-project-22.png";

import { IoOpenOutline } from "react-icons/io5";

const Projects = ({ changebg }) => {
  const peojectInfo = [
    {
      img: test1,
      title: "E-commerce App",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, esse nam dignissimos hic quae deserunt adipisci. Magni perspiciatis tempora repellendus nisi,",
    },
    {
      img: test2,
      title: "E-commerce App",
      des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, esse nam dignissimos hic quae deserunt adipisci. Magni perspiciatis tempora repellendus nisi,",
    },
  ];
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
      <div className="project-sub-container">
        {peojectInfo.map((info) => {
          return (
            <div className="project-wrapper">
              <span className="project-open-icon">
                <IoOpenOutline size={25} />
              </span>
              <img src={info.img} alt="" loading="lazy" />
              <div
                className="project-text-wrapper"
                style={{
                  color: changebg ? "" : "#2f0743",
                }}
              >
                <div className="project-hover-text">TOUCH ME</div>
                <h3 className="project-text-wrapper-heading">{info.title}</h3>
                <p className="project-text-wrapper-p">{info.des}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;