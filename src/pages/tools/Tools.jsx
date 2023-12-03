import React from "react";
import "./tools.css";
import toolsPuppy from "../../assets/puppies/tools-puppy.png";
import html from "../../assets/tools-icons/html.svg";
import css from "../../assets/tools-icons/css.svg";
import javaScript from "../../assets/tools-icons/javascript.svg";
import react from "../../assets/tools-icons/react.svg";
import python from "../../assets/tools-icons/python.svg";
import github from "../../assets/tools-icons/github.svg";
import figma from "../../assets/tools-icons/figma.svg";
import illustrator from "../../assets/tools-icons/illustrator.svg";
import nodeJS from "../../assets/tools-icons/nodeJS.svg";
import firebase from "../../assets/tools-icons/firebase.svg";
import notion from "../../assets/tools-icons/notion.svg";
import mongoDB from "../../assets/tools-icons/mongoDB.svg";

const Tools = ({ changebg }) => {
  const toolsInformation = [
    {
      logo: html,
      name: "HTML - Hypertext Markup Language",
      description:
        "Web pages are built and structured using these elements to display content in browsers.",
    },
    {
      logo: css,
      name: "CSS - Cascading Style Sheets ",
      description:
        "Control the design, colors, and layout of web pages with ease. It's like having a paintbrush for the web.",
    },
    {
      logo: javaScript,
      name: "javaScript",
      description:
        "This is the magic of web pages - making things move, change, and amaze.",
    },
    {
      logo: react,
      name: "React",
      description:
        "React is a widely-used JavaScript library that simplifies the process of creating user interfaces, resulting in enhanced efficiency and a better user experience.",
    },
    {
      logo: python,
      name: "Python",
      description:
        "Python is a programming language that is known for its simplicity, readability, versatility, and ease of learning.",
    },
    {
      logo: github,
      name: "Git & Github",
      description:
        "Git is a version control system that helps manage code changes. GitHub is a web-based platform that uses Git to host, share, and collaborate on code repositories.",
    },
    {
      logo: figma,
      name: "Figma",
      description:
        "This designing tool covers an essential part of my web development process because of its user-friendly collaboration and powerful features.",
    },
    {
      logo: illustrator,
      name: "Adbobe Illustrator",
      description:
        "Adobe Illustrator is a vector-based graphic design software used for creating and editing images without losing quality.",
    },
    {
      logo: nodeJS,
      name: "NodeJS - JavaScript runtime environment",
      description:
        "Node.js runtime environment enables JavaScript developers to create efficient server-side applications for real-time, data-intensive, and network-driven tasks.",
    },
    {
      logo: firebase,
      name: "Firebase by Google",
      description:
        "Firebase is a platform created by Google for developing mobile and web applications. Firebase makes it easier to create, launch, and manage apps.",
    },
    {
      logo: notion,
      name: "Notion",
      description:
        "Notion is a versatile collaboration tool and workspace that helps individuals and teams stay organized and manage projects.",
    },
    {
      logo: mongoDB,
      name: "MongoDB - NoSQL Database",
      description:
        "MongoDB is a scalable, flexible, and high-performance NoSQL database that excels at handling large amounts of unstructured data in a fast and efficient manner. ",
    },
  ];

  return (
    <div className="tools-container">
      <header className="tools-section-heading">
        <h1
          style={{
            color: changebg ? "black" : "",
          }}
        >
          <span>Tools</span> I use!
        </h1>
        <img src={toolsPuppy} alt="tools-puppy-icon" />
      </header>
      <div
        className="tool-box-wrapper"
        style={{
          background: changebg ? "rgba(0, 0, 0, 0.15)" : "",
        }}
      >
        {toolsInformation.map((info, index) => {
          return (
            <div className="tool-box" key={index}>
              <div className="tool-img">
                <img src={info.logo} alt="tool-logo" loading="lazy" />
              </div>
              <div className="tool-description">
                <h3>{info.name}</h3>
                <p>{info.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tools;
