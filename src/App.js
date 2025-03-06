import React from "react";
import "./App.css";
import {
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaUsers,
  FaComments,
  FaLightbulb,
  FaPuzzlePiece,
} from "react-icons/fa";

function App() {
  return (
    <div className="container">
      {/* Presentation Section */}
      <div className="presentation">
        <h1>Welcome to my digital space</h1>
        <p className="description">
          I am <b>Faisury Salazar</b>, a web developer experienced in <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>React</b>.
          I am passionate about creating beautiful and functional interfaces, focusing on design and user experience.
          Welcome to my portfolio!
        </p>

        {/* Profile Image with Animated Light */}
        <div className="image-container">
        <img src={process.env.PUBLIC_URL + "/img.jpg"} alt="Ilustración" className="profile-image" />
          <div className="light-effect"></div>
        </div>
      </div>

      {/* Buttons */}
      <div className="buttons">
        <button className="btn cv">
          <a href="/cv-faisury.pdf" download="Faisury-Salazar-CV.pdf" className="cv-link">
            Download CV
          </a>
        </button>
        <button className="btn projects">
          View my projects
        </button>
      </div>

      {/* Technical Skills */}
      <div className="skills-container">
        <h2>Technical Skills</h2>
        <div className="skill">
          <span>
            <FaHtml5 className="icon-tech html-icon" /> HTML
          </span>
          <div className="progress-bar">
            <div className="html"></div>
          </div>
        </div>
        <div className="skill">
          <span>
            <FaCss3Alt className="icon-tech css-icon" /> CSS
          </span>
          <div className="progress-bar">
            <div className="css"></div>
          </div>
        </div>
        <div className="skill">
          <span>
            <FaJs className="icon-tech js-icon" /> JavaScript
          </span>
          <div className="progress-bar">
            <div className="javascript"></div>
          </div>
        </div>
        <div className="skill">
          <span>
            <FaReact className="icon-tech react-icon" /> React
          </span>
          <div className="progress-bar">
            <div className="react"></div>
          </div>
        </div>
      </div>

      {/* Soft Skills */}
      <div className="soft-skills">
        <h2>Soft Skills</h2>
        <div className="soft-skills-container">
          <div className="soft-skill" title="Ability to work as a team">
            <FaUsers className="icon-soft" /> Teamwork
          </div>
          <div className="soft-skill" title="Clear communication skills">
            <FaComments className="icon-soft" /> Communication
          </div>
          <div className="soft-skill" title="Innovation and creativity in projects">
            <FaLightbulb className="icon-soft" /> Creativity
          </div>
          <div className="soft-skill" title="Problem-solving skills">
            <FaPuzzlePiece className="icon-soft" /> Problem Solving
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="social-container">
        <h3>Connect with me</h3>
        <div className="social-links">
          <a href="https://wa.me/+573183391794" target="_blank" rel="noopener noreferrer" className="whatsapp">
            <FaWhatsapp className="icon" /> WhatsApp
          </a>
          <a href="https://www.instagram.com/faisurii.salazar" target="_blank" rel="noopener noreferrer" className="instagram">
            <FaInstagram className="icon" /> Instagram
          </a>
          <a href="https://github.com/fay123" target="_blank" rel="noopener noreferrer" className="github">
            <FaGithub className="icon" /> GitHub
          </a>
          <a href="https://linkedin.com/in/faisury-salazar-ba3b27354" target="_blank" rel="noopener noreferrer" className="linkedin">
            <FaLinkedin className="icon" /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;