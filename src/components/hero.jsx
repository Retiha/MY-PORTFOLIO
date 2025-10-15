// src/components/Hero.jsx
import React from "react";
import Typed from "react-typed";

function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Profile picture placeholder */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="Profile" 
        className="profile-pic"
      />

      <h1>Hi, I'm Your Name</h1>

      {/* Typing effect */}
      <Typed
        strings={["Frontend Developer", "React Enthusiast", "Problem Solver"]}
        typeSpeed={50}
        backSpeed={30}
        loop
      />

      {/* Action buttons */}
      <div className="hero-buttons">
        {/* Placeholder link for Resume download */}
        <a 
          href="https://example.com" 
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>

        {/* Scroll to Contact section */}
        <a href="#contact" className="btn btn-outline">Contact Me</a>
      </div>
    </section>
  );
}

export default Hero;
