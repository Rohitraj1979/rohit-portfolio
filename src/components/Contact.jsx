function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="section-heading">
        <p className="text-shimmer">GET IN TOUCH</p>
        <h2 className="text-shimmer">Let's Connect</h2>
      </div>

      <div className="contact-content">

        <div className="contact-text">
          <h3 className="text-shimmer">
            Have a project or opportunity?
          </h3>

          <p>
            I'm currently interested in Java Full Stack Developer
            opportunities, internships, and projects where I can
            learn, contribute, and grow as a developer.
          </p>

          <div className="contact-links">

            <a href="mailto:rajbharrohit1979@gmail.com">
              Email →
            </a>

            <a
              href="https://github.com/Rohitraj1979/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub →
            </a>

            <a
              href="https://www.linkedin.com/in/rohitraj2006"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn →
            </a>

          </div>
        </div>

        <div className="contact-card">

          <span>AVAILABLE FOR</span>

          <h3 className="text-shimmer">
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
