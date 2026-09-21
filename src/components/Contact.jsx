function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="section-heading">
        <p>GET IN TOUCH</p>
        <h2>Let's Connect</h2>
      </div>

      <div className="contact-content">

        <div className="contact-text">
          <h3>
            Have a project or opportunity?
          </h3>

          <p>
            I'm currently interested in Java Full Stack Developer
            opportunities, internships, and projects where I can
            learn, contribute, and grow as a developer.
          </p>

          <div className="contact-links">

            <a href="mailto:your-email@gmail.com">
              Email →
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub →
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn →
            </a>

          </div>
        </div>

        <div className="contact-card">

          <span>AVAILABLE FOR</span>

          <h3>
            Full Stack Development
          </h3>

          <p>
            Java • Spring Boot • React • SQL
          </p>

        </div>

      </div>

    </section>
  );
}

export default Contact;