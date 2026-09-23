function Skills() {
  const skills = [
    {
      category: "Programming",
      items: ["Java", "JavaScript"]
    },
    {
      category: "Frontend",
      items: ["HTML", "CSS", "React.js"]
    },
    {
      category: "Database",
      items: ["SQL", "MySQL", "Oracle"]
    },
    {
      category: "Backend",
      items: ["Spring Boot"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code"]
    }
  ];

  return (
    <section className="skills" id="skills">

      <div className="section-heading">
        <p className="text-shimmer">WHAT I WORK WITH</p>
        <h2 className="text-shimmer">Skills</h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div className="skill-card" key={skill.category}>

            <h3>{skill.category}</h3>

            <div className="skill-list">

              {skill.items.map((item) => (
                <span key={item}>
                  {item}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;
