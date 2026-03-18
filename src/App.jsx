import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-(--bg) text-white min-h-screen">
      <Navbar />
      <main className="pt-20 px-6">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Footer />
      </main>
    </div>
  );
}

export default App;