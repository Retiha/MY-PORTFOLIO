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

  // Persist dark mode using localStorage
  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <h1 className="logo">Your Name</h1>
      <ul className="nav-links">
        {["hero","about","skills","projects","contact"].map((id) => (
          <li key={id} className={active === id ? "active" : ""}>
            <a href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
          </li>
        ))}
      </ul>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light" : "Dark"}
      </button>
    </nav>
  );
}

export default Navbar;
