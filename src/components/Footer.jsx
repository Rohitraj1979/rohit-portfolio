function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">
        RR.
      </div>

      <p>
        Designed & Built by Rohit Rajbhar
      </p>

      <div className="footer-links">

        <a href="#home">Home</a>

        <a href="#about">About</a>

        <a href="#projects">Projects</a>

        <a href="#contact">Contact</a>

      </div>

      <span>
        © {new Date().getFullYear()} Rohit Rajbhar
      </span>

    </footer>
  );
}

export default Footer;