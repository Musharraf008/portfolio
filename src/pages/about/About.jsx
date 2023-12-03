import React from "react";
import "./about.css";
import darkImg from "../../assets/img/about-img-dark.png";
import lightImg from "../../assets/img/about-img-light.png";
import whoAmI from "../../assets/puppies/who am i.png";
import WhatIDo from "../../assets/puppies/whatIDo.png";
import { BsCheck2Circle } from "react-icons/bs";
import whatICanDo from "../../assets/puppies/what i can do.png";

import mobileDesignGIF from "../../assets/gif/1.gif";
import monitorGIF from "../../assets/gif/2.gif";
import responsiveDesignGIF from "../../assets/gif/3.gif";
import settingGIF from "../../assets/gif/4.gif";

import Atq from "../../components/Atq";
import { BiMessageDetail } from "react-icons/bi";

const About = ({ changebg }) => {
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
      point: "I can manage and redesign your website or mobile app.",
    },
  ];
  const AQTQuestions = [
    {
      question: "“HOW MUCH DOES [X] COST?”",
      answer:
        "It honestly depends on many factors. While I can’t give you an accurate estimate without hearing the specifics of your project. I value my time and yours too. usually for a portfolio like me will cost 800-1200 $ range, but I am always open to discussing your specific needs and finding a solution that works for you. Let's work together to create something great!",
    },
    {
      question: "“DO YOU CHARGE BY THE HOUR?”",
      answer:
        "Almost never. I’m a big fan of project-based pricing, where you know how much you’ll pay upfront. With hourly pricing the slower you get the work done, the more you get paid. It motivates you to be slow. But if faster is better, why get paid less for it?",
    },
    {
      question: "“CAN YOU DO [XYZ]?”",
      answer:
        "If you have something in mind and don’t see any examples of it on my site, but want to work with me, hit me up and ask. I’m open to new challenges and learn new skills all the time. If I can’t do it, I’ll let you know upfront.",
    },
  ];
  return (
    <div>
      <div
        className="box"
        style={{
          background: changebg
            ? "linear-gradient(91deg, #0094FF -9.64%, #003DAB 185.3%)"
            : "",
        }}
      ></div>
      <div className="about-section-container">
        <div className="about-sec-top">
          <img
            src={changebg ? lightImg : darkImg}
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
            <p
              className="about-p"
              style={{
                color: changebg ? "rgba(0, 0, 0, 0.9)" : "",
              }}
            >
              "A self-taught{" "}
              <i
                style={{
                  background: changebg ? "#8BCEFF" : "",
                }}
              >
                Full Stack Web Developer and Designer
              </i>
              , driven by a profound passion for programming. My expertise lies
              in creating innovative web applications, underpinned by a
              comprehensive understanding of{" "}
              <i
                style={{
                  background: changebg ? "#8BCEFF" : "",
                }}
              >
                UI and UX principles
              </i>
              ."
            </p>
          </div>
        </div>
        <div className="what-i-do-wrapper">
          <div className="sections-wrapper">
            <h2
              style={{
                color: changebg ? "#003DAB" : "",
              }}
            >
              What i Do?
            </h2>
            <img src={WhatIDo} alt="" />
          </div>
          <p
            className="about-p"
            style={{
              color: changebg ? "rgba(0, 0, 0, 0.9)" : "",
            }}
          >
            "I specialize in developing{" "}
            <i
              style={{
                background: changebg ? "#8BCEFF" : "",
              }}
            >
              innovative web applications
            </i>
            . I blend creativity and technical expertise to create
            user-friendly, cutting-edge solutions. My commitment to{" "}
            <i
              style={{
                background: changebg ? "#8BCEFF" : "",
              }}
            >
              staying updated with industry trends
            </i>{" "}
            ensures I deliver{" "}
            <i
              style={{
                background: changebg ? "#8BCEFF" : "",
              }}
            >
              efficient, impactful web experiences
            </i>
            ."
          </p>
          {whatIDoBulletPoints.map((point, index) => {
            return (
              <div className="bullet-point-wrapper" key={index}>
                <BsCheck2Circle
                  size={25}
                  color={changebg ? "#003DAB" : "#22D3FE"}
                />
                <p
                  style={{
                    color: changebg ? "rgba(0, 0, 0, 0.8)" : "",
                  }}
                >
                  {point}
                </p>
              </div>
            );
          })}
        </div>
        <div className="what-i-can-do-wrapper">
          <div className="sections-wrapper">
            <h2>What i can Do?</h2>
            <img src={whatICanDo} alt="" />
          </div>
          <div
            className="second-bullet-wrapper"
            style={{
              background: changebg ? "#F2E9E4" : "",
              border: changebg ? "2px solid rgba(0, 0, 0, .2)" : "",
            }}
          >
            {whatICanDoBulletPoints.map((point, index) => {
              return (
                <div
                  className={
                    changebg
                      ? "box-bullet-point-wrapper-light"
                      : "box-bullet-point-wrapper"
                  }
                  key={index}
                >
                  <img src={point.gif} alt={point.gif} />
                  <p>{point.point}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ATQ-container">
          <div className="ATQ-heading-wrapper">
            <BiMessageDetail size={35} color={changebg ? "#0095ff" : ""} />
            <h2
              style={{
                color: changebg ? "rgba(0, 0, 0, 0.9)" : "",
              }}
            >
              <span>Answer</span> to your Questions
            </h2>
          </div>
          {AQTQuestions.map((info) => {
            return <Atq ques={info.question} ans={info.answer} changebg={changebg} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
