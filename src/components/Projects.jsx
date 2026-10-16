function Projects() {
  const projects = [
    {
      number: "01",
      title: "IV Drop Monitoring & Heart Rate Alert System",
      description: "An IoT-based patient monitoring prototype for IV fluid status and pulse readings, with local and connected alerts.",
      technologies: ["ESP32", "IoT", "Blynk", "MAX30100"],
      details: "/projects/iv-drop-monitoring",
    },
    {
      number: "02",
      title: "SkillSwap – Peer-to-Peer Learning Platform",
      description: "A web platform concept designed to help users connect with others, exchange knowledge, and learn skills through peer-to-peer interaction.",
      technologies: ["Java", "Spring Boot", "React", "SQL"],
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-heading"><p className="text-shimmer">MY RECENT WORK</p><h2 className="text-shimmer">Projects</h2></div>
      <div className="projects-grid">
        {projects.map((project) => {
          const Card = project.details ? "a" : "article";
          return (
          <Card
            className={`project-card${project.details ? " project-card-clickable" : ""}`}
            href={project.details}
            key={project.number}
          >
            <div className="project-top"><span className="project-number">{project.number}</span></div>
            <div className="project-content">
              <h3 className="text-shimmer">{project.title}</h3><p>{project.description}</p>
              <div className="project-technologies">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            </div>
            {project.details && <span className="project-demo">View Project →</span>}
          </Card>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
