import React, { useState, useEffect } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState("hero");

  // Track scrolling for active section
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      const scrollY = window.scrollY;
      sections.forEach((section) => {
        if (
          scrollY >= section.offsetTop - 50 &&
          scrollY < section.offsetTop + section.offsetHeight - 50
        ) {
          setActive(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <h1 className="logo">Your Name</h1>
      <ul className="nav-links">
        <li className={active === "hero" ? "active" : ""}><a href="#hero">Home</a></li>
        <li className={active === "about" ? "active" : ""}><a href="#about">About</a></li>
        <li className={active === "skills" ? "active" : ""}><a href="#skills">Skills</a></li>
        <li className={active === "projects" ? "active" : ""}><a href="#projects">Projects</a></li>
        <li className={active === "contact" ? "active" : ""}><a href="#contact">Contact</a></li>
      </ul>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light" : "Dark"}
      </button>
    </nav>
  );
}

export default Navbar;

