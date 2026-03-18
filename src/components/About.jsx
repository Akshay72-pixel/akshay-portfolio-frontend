const About = () => {
  return (
    <section id="about" className="py-24 text-center">
      <h2 className="text-4xl font-bold mb-6">
        About <span className="text-purple-500">Me</span>
      </h2>

      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg">
        <p className="text-gray-300 leading-relaxed">
          I am a passionate Full Stack Developer skilled in MERN stack.
          I love building modern, scalable web applications with clean UI.
          I also have knowledge of Java, Python, MySQL and Data Structures.
        </p>
      </div>
    </section>
  );
};

export default About;