import React from "react";

function Hero() {
  return (
    <section id="hero" className="hero">
      <img src="https://via.placeholder.com/150" alt="Profile" className="profile-pic"/>
      <h1>Hi, I'm Retiha C</h1>
      <p>Frontend Developer | React Enthusiast | Problem Solver</p>
      <div className="hero-buttons">
        <a href="#contact" className="btn">Contact Me</a>
      </div>
    </section>
  );
}

export default Hero;
