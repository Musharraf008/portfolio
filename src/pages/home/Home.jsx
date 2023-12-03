import React, { useEffect, useState } from "react";
import "./Home.css";
import Nav from "../../components/Nav";
import img from "../../assets/img/my-photo.png";
import compressedImg from "../../assets/img/my-photo.webp";
import { motion } from "framer-motion";

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
              Full stack developer & Designer
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
            <a
              href="https://drive.google.com/file/d/14ls76hyXCQVMZ5QYtw6NXrqgLw-QhmwV/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              title="Download Resume"
              className={changebg ? "changed-primary-btn" : "primary-btn"}
            >
              <span>Resume</span>
            </a>
          </div>
        </motion.div>
        <div
          className={
            changebg ? "home-img-wrapper-light" : "home-img-wrapper-dark"
          }
        >
          {/* <motion.img
            src={img}
            className="my-photo"
            alt="My Image"
            initial="hidden"
            animate="visible"
            variants={nameVariant}
            loading="lazy"
          /> */}
          <motion.img
            src={compressedImg}
            className="my-photo"
            alt="My Image"
            initial="hidden"
            animate="visible"
            variants={nameVariant}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
