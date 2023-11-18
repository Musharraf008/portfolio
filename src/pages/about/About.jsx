import React from "react";
import "./about.css";
import img from "../../assets/img/myImg.png";
import whoAmI from "../../assets/icons/who am i.png";
import WhatIDo from "../../assets/icons/whatIDo.png";
import { BsCheck2Circle } from "react-icons/bs";
import whatICanDo from "../../assets/icons/what i can do.png";
import mobileDesignGIF from "../../assets/gif/output-onlinegiftools.gif";
import monitorGIF from "../../assets/gif/monitor-unscreen.gif";
import responsiveDesignGIF from "../../assets/gif/responsive-design-unscreen.gif";
import settingGIF from "../../assets/gif/output-onlinegiftools (1).gif";
import ATQFrame from "../../assets/frames/Frame 72.png";
import { BiMessageDetail } from "react-icons/bi";

const About = () => {
  const whatIDoBulletPoints = [
    "Proficient in both front-end and back-end development.",
    "Ability to adapt new programming languages and frameworks swiftly.",
    "Eager to collaborate with teams and contribute to the tech community.",
  ];
  const whatICanDoBulletPoints = [
    { gif: mobileDesignGIF, point: " I can do web and mobile designing." },
    { gif: monitorGIF, point: "I can make react interactive web pages." },
    {
      gif: responsiveDesignGIF,
      point: "I can make full-stack web pages for personal and commercial use.",
    },
    {
      gif: settingGIF,
      point:
        "I can manage your website and redesign your site or mobile app user interface.",
    },
  ];
  const AQTQuestions = [
    {question: '“HOW MUCH DOES [X] COST?”', answer: "Determining the cost of my services is a process that involves understanding the specifics of your project. I would be happy to discuss your needs and provide you with an estimate that reflects the value of my time and expertise. While I cannot offer rock-bottom prices, I believe that my prices are fair and reasonable given the quality of work that I deliver. Typically, a portfolio of my caliber falls within the price range of $800 to $1200, but I am always open to discussing your specific needs and finding a solution that works for you. Let's work together to create something great!"},
    {question: '“DO YOU CHARGE BY THE HOUR?”', answer: "Almost never. I’m a big fan of project-based pricing, where you know how much you’ll pay upfront. With hourly pricing the slower you get the work done, the more you get paid. It motivates you to be slow. But if faster is better, why get paid less for it?"},
    {question: '“CAN YOU DO [XYZ]?”', answer: "If you have something in mind and don’t see any examples of it on my site, but want to work with me, hit me up and ask. I’m open to new challenges and learn new skills all the time. If I can’t do it, I’ll let you know upfront."}
  ]
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
            <p className="about-p">
              "I am a 19-year-old, self-taught Full Stack Web Developer{" "}
              <b>and Designer</b>, driven by a profound passion for programming.
              My expertise lies in creating innovative web applications,
              underpinned by a comprehensive understanding of{" "}
              <b>UI and UX principles</b>."
            </p>
          </div>
        </div>
        <div className="what-i-do-wrapper">
          <div className="sections-wrapper">
            <h2>What i Do?</h2>
            <img src={WhatIDo} alt="" />
          </div>
          <p className="about-p">
            "I specialize in developing <b>innovative web applications</b>. I
            blend creativity and technical expertise to create user-friendly,
            cutting-edge solutions. My commitment to
            <b> staying updated with industry trends</b> ensures I deliver{" "}
            <b>efficient, impactful web experiences</b>."
          </p>
          {whatIDoBulletPoints.map((point, index) => {
            return (
              <div className="bullet-point-wrapper" key={index}>
                <BsCheck2Circle size={25} color="#22D3FE" />
                <p>{point}</p>
              </div>
            );
          })}
        </div>
        <div className="what-i-can-do-wrapper">
          <div className="sections-wrapper">
            <h2>What i can Do?</h2>
            <img src={whatICanDo} alt="" />
          </div>
          <div className="second-bullet-wrapper">
            {whatICanDoBulletPoints.map((point, index) => {
              return (
                <div className="box-bullet-point-wrapper" key={index}>
                  <img src={point.gif} alt={point.gif} />
                  <p>{point.point}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ATQ-container">
          <img src={ATQFrame} alt="" />
          <div className="ATQ-wrapper">
            <div className="ATQ-heading-wrapper">
              <BiMessageDetail size={35} color="black" />
              <h2>"Answers to your Questions"</h2>
            </div>
            <div className="ATQ-questions-wrapper">
              <i>“HOW MUCH DOES [X] COST?”</i>
              <p>Determining the cost of my services is a process that involves understanding the specifics of your project. I would be happy to discuss your needs and provide you with an estimate that reflects the value of my time and expertise. I believe that my prices are fair and reasonable given the quality of work that I deliver. Typically, a portfolio like mine falls within the price range of $800 to $1200, but I am always open to discussing your specific needs and finding a solution that works for you. Let's work together to create something great!</p>
            </div>
            <div className="ATQ-questions-wrapper">
              <i>“DO YOU CHARGE BY THE HOUR?”</i>
              <p>Almost never. I’m a big fan of project-based pricing, where you know how much you’ll pay upfront. With hourly pricing the slower you get the work done, the more you get paid. It motivates you to be slow. But if faster is better, why get paid less for it?</p>
            </div>
            <div className="ATQ-questions-wrapper">
              <i>“CAN YOU DO [XYZ]?”</i>
              <p>If you have something in mind and don’t see any examples of it on my site, but want to work with me, <span>hit me up</span> and ask. I’m open to new challenges and learn new skills all the time. If I can’t do it, I’ll let you know upfront.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
