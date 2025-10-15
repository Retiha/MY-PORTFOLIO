import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section id="hero" className="hero">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="profile-pic"
      />
      <h1>Hi, I'm Your Name</h1>
      <h2>
        <Typewriter
          words={["Frontend Developer", "React Enthusiast", "Problem Solver"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
        />
      </h2>
      <div className="hero-buttons">
        <a href="src/assets/Resume.pdf" download className="btn">
          Download CV
        </a>
        <a href="#contact" className="btn btn-outline">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
