import React from "react";
import "./about.css";
import img from "../assets/img/myImg.png";

const About = () => {
  return (
    <div>
      <div className="box"></div>
      <img
        src={img}
        className="about-img"
        alt=""
        style={{
          width: 250,
        }}
      />
      
    </div>
  );
};

export default About;
