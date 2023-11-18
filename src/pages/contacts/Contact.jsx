import React from "react";
import "./contact.css";
import footerImg1 from '../../assets/icons/footer-img-1.png'
import footerImg2 from '../../assets/icons/footer-img-2.png'
import footerImg3 from '../../assets/icons/footer-img-3.png'
import footerImg4 from '../../assets/icons/footer-img-4.png'

const Contact = () => {
  return (
    <div className="contact-container">
      <header>
        <h2>CONTACT</h2>
        <div className="grey-bar"></div>
        <h2>musharrafjamal08@gmail.com</h2>
      </header>
      <div className="availability-wrapper">
        <span>Currently: Available</span>
      </div>
      <div className="contact-description-wrapper">
        <div>
          <h2>Hello there,</h2>
          <p>
            Kindly send me a letter at{" "}
            <a
              href="mailto: musharrafjamal08@gmail.com"
              target="_blank"
              className="underline"
            >
              musharrafjamal08@gmail.com
            </a>
            , with a detailed description of your goals outlined with a budget,
            I'd be happy to assist you! Let's work together to achieve your
            goals!
          </p>
        </div>
        <div className="contact-urls-wrapper">
          Also, Connect with me on{" "}
          <a
            href="https://www.instagram.com/musharraf_codeverse"
            target="_blank"
          >
            Instagram
          </a>
          ,{" "}
          <a href="http://twitter.com/MusharrafJamal8" target="_blank">
            TwitterX
          </a>
          ,{" "}
          <a href="http://www.linkedin.com/in/musharrafjamal8" target="_blank">
            LinkedIn
          </a>
          .
        </div>
      </div>
      <footer className="footer-wrapper">
        <div className="copyright-wrapper">
          <h1>© Musharraf Jamal 2023</h1>
          <p>
            I design and code this website with my own hands. Feel free to
            explore, Take inspiration and be more creative. Thanks for visiting!
          </p>
        </div>
        <div className="footer-thin-bar"></div>
        <div className="footer-ending-wrapper">
          <div className="footer-navigation-wrapper">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#tools">Tools</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-icons-wrapper">
            <img src={footerImg1} alt="" />
            <img src={footerImg2} alt="" />
            <img src={footerImg3} alt="" />
            <img src={footerImg4} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
