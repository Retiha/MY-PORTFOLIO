import React, { useState } from "react";

function Projects() {
  const projects = [
    { 
      name: "Portfolio Website", 
      category: "React", 
      link: "https://github.com/yourusername/portfolio", 
      image: "https://via.placeholder.com/250" 
    },
    { 
      name: "Todo App", 
      category: "React", 
      link: "https://github.com/yourusername/todo-app", 
      image: "https://via.placeholder.com/250" 
    },
    { 
      name: "Food Delivery Website", 
      category: "MERN", 
      link: "https://github.com/yourusername/food-delivery", 
      image: "https://via.placeholder.com/250" 
    },
    { 
      name: "AI Recruiter Project", 
      category: "ML", 
      link: "https://github.com/yourusername/ai-recruiter", 
      image: "https://via.placeholder.com/250" 
    },
  ];

  const categories = ["All", "React", "MERN", "ML"];
  const [selected, setSelected] = useState("All");

  const filtered = selected === "All" 
    ? projects 
    : projects.filter(p => p.category === selected);

  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>

      {/* Category buttons */}
      <div className="project-categories">
        {categories.map((cat, idx) => (
          <button 
            key={idx} 
            onClick={() => setSelected(cat)} 
            className={selected === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project cards */}
      <div className="projects-container">
        {filtered.length === 0 && <p>No projects found in this category.</p>}
        {filtered.map((p, idx) => (
          <div key={idx} className="project-card">
            <img src={p.image} alt={p.name} className="project-image"/>
            <h3>{p.name}</h3>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              View
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
