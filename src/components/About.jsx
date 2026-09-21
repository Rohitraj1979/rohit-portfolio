function About() {
  return (
    <section className="about" id="about">
      <div className="section-heading">
        <p>GET TO KNOW ME</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">

        <div className="about-text">
          <p>
            I'm Rohit Rajbhar, a B.Sc. Information Technology graduate
            interested in Java Full Stack Development.
          </p>

          <p>
            I enjoy building practical applications and learning how
            frontend and backend technologies work together.
          </p>

          <p>
            Currently, I'm strengthening my skills in Java, JavaScript,
            React.js, SQL and Spring Boot.
          </p>
        </div>

        <div className="about-stats">

          <div className="stat-card">
            <h3>9.7/10</h3>
            <p>CGPA</p>
          </div>

          <div className="stat-card">
            <h3>B.Sc. IT</h3>
            <p>2023–2026</p>
          </div>

          <div className="stat-card">
            <h3>Java</h3>
            <p>Primary Focus</p>
          </div>

          <div className="stat-card">
            <h3>React</h3>
            <p>Learning & Building</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;