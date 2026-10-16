import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "");
  if (pathname === "/projects/iv-drop-monitoring") {
    return <ProjectDetails />;
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />

       <About />

        <Skills />

        <Projects />

        <Education />

        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
