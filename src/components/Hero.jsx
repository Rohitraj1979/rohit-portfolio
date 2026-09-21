function Hero() {
  return (
    <section className="hero" id="home">
      
      <div className="hero-content">

        <p className="hero-greeting">
          HELLO, I'M ROHIT 👋
        </p>

        <h1>
          Rohit Rajbhar
        </h1>

        <h2>
          Java Full Stack Developer
        </h2>

        <p className="hero-description">
          B.Sc. Information Technology graduate focused on
          building practical and user-friendly web applications.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View My Projects
          </a>

          <a href="/resume.pdf" className="secondary-button">
            Download Resume
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

      </div>

      <div className="hero-card">

        <div className="code-card">
          <span>&lt;developer&gt;</span>

          <div>
            <strong>Java</strong>
          </div>

          <div>
            <strong>React.js</strong>
          </div>

          <div>
            <strong>JavaScript</strong>
          </div>

          <div>
            <strong>Spring Boot</strong>
          </div>

          <span>&lt;/developer&gt;</span>
        </div>

      </div>

    </section>
  );
}

export default Hero;