import React, { useEffect, useState } from "react";
import "./Home.css";
import Nav from "../../components/Nav";
import img from "../../assets/img/my-photo.png";
import { motion } from "framer-motion";
import { BsArrowDown } from "react-icons/bs";
import LightBg from "./white-home-bg copy.svg";
import darkBg from "./dark-home-bg.svg";

const Home = ({ setBg }) => {
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 3,
      },
    },
    hidden: { opacity: 0 },
  };
  const nameVariant = {
    visible: {
      y: 0,
      transition: {
        duration: 1,
      },
    },
    hidden: { y: 400 },
  };
  const [changebg, setChangeBg] = useState(false);
  useEffect(() => {
    setBg(changebg);
  }, [changebg, setBg]);
  return (
    <div>
      <Nav setBg={setChangeBg} />
      <div className="home-wrapper">
        {changebg ? (
          <img src={darkBg} alt="" className="home-victor-bg" />
        ) : (
          <img src={LightBg} alt="" className="home-victor-bg" />
        )}
        <motion.div
          className="home-main-section"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <div className="home-main-section-first-child">
            <span
              className="home-main-section-first-child-span"
              style={{
                color: changebg ? "rgba(0, 0, 0, 0.9)" : "",
              }}
            >
              Hello, i'm
            </span>
            <div
              className="name"
              style={{
                color: changebg ? "#003DAB" : "",
              }}
            >
              Musharraf Jamal
            </div>
            <div
              className="post"
              style={{
                color: changebg ? "rgba(0, 61, 173, 0.5)" : "",
              }}
            >
              Full stack developer
            </div>
            <div className="sub-post">
              <i
                style={{
                  color: changebg ? "white" : "",
                  background: changebg ? "#0094ff" : "",
                }}
              >
                By merging coding and design, I produce eye-catching digital
                artworks that capture attention.
              </i>
            </div>
            <button
              className={changebg ? "changed-primary-btn" : "primary-btn"}
            >
              Download CV
            </button>
          </div>
          <a
            href="#about"
            className="arrow-btn"
            style={{
              color: changebg ? "rgba(0, 61, 173, 0.5)" : "",
            }}
          >
            <BsArrowDown size={30} />
            Explore About me
          </a>
        </motion.div>
        <motion.img
          src={img}
          className="my-photo"
          alt="My Image"
          initial="hidden"
          animate="visible"
          variants={nameVariant}
        />
      </div>
    </div>
  );
};

export default Home;
