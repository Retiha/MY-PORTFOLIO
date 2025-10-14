import React from "react";

function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      description: "My personal portfolio built with React and Vite.",
      link: "#",
    },
    {
      name: "Todo App",
      description: "A simple CRUD Todo application using React.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" className="btn btn-outline">View</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
