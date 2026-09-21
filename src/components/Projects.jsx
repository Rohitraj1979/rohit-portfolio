function Projects() {
  const projects = [
    {
      number: "01",
      title: "IV Drop Monitoring & Heart Rate Alert System",
      description:
        "An IoT-based patient monitoring system designed to monitor IV fluid levels and heart rate and provide alerts for timely attention.",
      technologies: ["ESP32", "IoT", "Blynk", "MAX30100"],
      github: "#",
      demo: "#",
    },
    {
      number: "02",
      title: "SkillSwap – Peer-to-Peer Learning Platform",
      description:
        "A web platform concept designed to help users connect with others, exchange knowledge, and learn skills through peer-to-peer interaction.",
      technologies: ["Java", "Spring Boot", "React", "SQL"],
      github: "#",
      demo: "#",
    },
    // {
    //   number: "03",
    //   title: "Developer Project",
    //   description:
    //     "A full-stack web application demonstrating frontend development, backend integration, database operations, and REST API concepts.",
    //   technologies: ["JavaScript", "React", "Java", "SQL"],
    //   github: "#",
    //   demo: "#",
    // },
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-heading">
        <p>MY RECENT WORK</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            
            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} GitHub`}
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-demo"
            >
              View Project →
            </a>

          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;