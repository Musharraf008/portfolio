import React from "react";
import "./Home.css";
import Nav from "../components/Nav";
import img from "../assets/img/my-photo.png";
import { motion } from "framer-motion";
import { BsArrowDown } from "react-icons/bs";

const Home = () => {
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
      scale: 1.1,
      transition: {
        duration: 1
      }
    },
    hidden: { y: 400,scale: 1 },
  };
  return (
    <div>
      <Nav />
      <div className="home-wrapper">
        <motion.div
          className="home-main-section"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <div className="home-main-section-first-child">
            <span>Hello, i'm</span>
            <div className="name">Musharraf Jamal</div>
            <div className="post">Full stack developer</div>
            <div className="home-btns">
              <button className="primary-btn">Download CV</button>
              {/* <button className="secondary-btn">Contact me</button> */}
            </div>
          </div>
            <a href="#about" className="arrow-btn">
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
