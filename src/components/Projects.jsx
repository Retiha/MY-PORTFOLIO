import React, { useState } from "react";

function Projects() {
  const projects = [
    { name: "Portfolio Website", category: "React", link: "#", image: "https://via.placeholder.com/250", description: "My personal portfolio built with React." },
    { name: "Todo App", category: "React", link: "#", image: "https://via.placeholder.com/250", description: "A simple todo app to manage tasks." },
    { name: "Food Delivery Website", category: "MERN", link: "#", image: "https://via.placeholder.com/250", description: "A MERN stack food ordering website." },
    { name: "AI Recruiter Project", category: "ML", link: "#", image: "https://via.placeholder.com/250", description: "Machine learning project for resume screening." },
  ];

  const categories = ["All", "React", "MERN", "ML"];
  const [selected, setSelected] = useState("All");

  const filtered = selected === "All" ? projects : projects.filter(p => p.category === selected);

  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>

      {/* Category buttons */}
      <div className="project-categories">
        {categories.map((cat, idx) => (
          <button key={idx} onClick={() => setSelected(cat)} className={selected === cat ? "active" : ""}>
            {cat}
          </button>
        ))}
      </div>

      {/* Projects list */}
      <div className="projects-container">
        {filtered.map((p, idx) => (
          <div key={idx} className="project-card">
            <img src={p.image} alt={p.name} className="project-image"/>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline">View</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
