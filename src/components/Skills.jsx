import React, { useEffect, useRef } from "react";

function Skills() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Node.js", level: 70 },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const bars = containerRef.current.querySelectorAll(".skill-level");
          bars.forEach((bar, idx) => {
            bar.style.width = skills[idx].level + "%";
          });
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills" ref={containerRef}>
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <p>{skill.name}</p>
          <div className="skill-bar">
            <div className="skill-level"></div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
