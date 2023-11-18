import React, { useState } from "react";
import "./Nav.css";
import logo from "../assets/icons/logo.svg";
import { AiOutlineClose, AiFillHome } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import linkedin from "../assets/icons/Linkedin.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import { motion } from "framer-motion";
import { MdMarkEmailRead } from "react-icons/md";
import { HiInformationCircle } from "react-icons/hi";
import { BsTools } from "react-icons/bs";
import { RiLightbulbFlashFill } from "react-icons/ri";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(150% at 88% 8%)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(8% at 88% 8%)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const socialsIconsVariants = {
    hover: {
      rotate: "360deg",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 40,
      },
    },
  };
  const variant = {
    visible: {
      y: 0,
      transition: {
        type: "spring",
      },
    },
    hidden: { y: -100 },
  };
  const logoVariant = {
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
    hidden: { x: -150 },
  };
  return (
    <nav className="navbar">
      <div className="main-nav">
        <motion.img
          src={logo}
          className="nav-logo"
          initial="hidden"
          animate="visible"
          variants={logoVariant}
        />
        <div className="hamburger">
          <motion.div
            className="menu-wrapper"
            initial="hidden"
            animate="visible"
            variants={variant}
          >
            <motion.div
              className="nav-bg"
              variants={variants}
              animate={openMenu ? "open" : "closed"}
            >
              <button
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              >
                {openMenu ? <AiOutlineClose size={35} /> : <FiMenu size={35} />}
              </button>
              <div className="nav-links">
                <a href="#home">
                  <AiFillHome /> <span>Home</span>
                </a>
                <a href="#about">
                  <HiInformationCircle /> <span>About</span>
                </a>
                <a href="#tools">
                  <BsTools /> <span>Tools</span>
                </a>
                <a href="#projects">
                  {" "}
                  <RiLightbulbFlashFill /> <span>Projects</span>
                </a>
                <a href="#contact">
                  {" "}
                  <MdMarkEmailRead /> <span>Contact</span>
                </a>
              </div>
              <div className="socials">
                <a
                  href="http://www.linkedin.com/in/musharrafjamal8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={linkedin}
                    alt="linkedin"
                    whileHover={"hover"}
                    variants={socialsIconsVariants}
                  />
                </a>
                <a
                  href="https://www.instagram.com/musharraf_codeverse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={instagram}
                    alt="instagram"
                    whileHover={"hover"}
                    variants={socialsIconsVariants}
                  />
                </a>
                <a
                  href="http://twitter.com/MusharrafJamal8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={twitter}
                    alt="twitter"
                    whileHover={"hover"}
                    variants={socialsIconsVariants}
                  />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
