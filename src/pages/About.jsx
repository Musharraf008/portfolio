import React from "react";
import "./about.css";
import img from "../assets/img/myImg.png";
import whoAmI from "../assets/icons/who am i.png";
import WhatIDo from "../assets/icons/whatIDo.png";
import { BsCheck2Circle } from "react-icons/bs";

const About = () => {
  return (
    <div>
      <div className="box"></div>
      <div className="about-section-container">
        <div className="about-sec-top">
          <img
            src={img}
            className="about-img"
            alt=""
            style={{
              width: 250,
            }}
          />

          <div className="who-am-i-wrapper">
            <div className="sections-wrapper">
              <h2>Who am I?</h2>
              <img src={whoAmI} alt="" />
            </div>
            <p>
              “A 19 years old self-taught Full Stack Web Developer and Designer
              with a strong passion for coding and{" "}
              <b>
                creating innovative web applications by understandings of UI &
                UX
              </b>
              .”
            </p>
          </div>
        </div>
        <div className="what-i-do-wrapper">
          <div className="sections-wrapper">
            <h2>What i Do?</h2>
            <img src={WhatIDo} alt="" />
          </div>
          <p>
            "I specialize in developing innovative web applications. I blend
            creativity and technical expertise to create user-friendly,
            cutting-edge solutions. My commitment to staying updated with
            industry trends ensures I deliver efficient, impactful web
            experiences."
          </p>
          <div className="bullet-point-wrapper">
            <BsCheck2Circle size={25} color="#FF3D55" />
            <p>Proficient in both front-end and back-end development.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
