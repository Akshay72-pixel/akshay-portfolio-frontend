const About = () => {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-center"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
        About{" "}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Me
        </span>
      </h2>

      <div className="max-w-3xl mx-auto p-[1px] rounded-2xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 hover:from-purple-500 hover:to-pink-500 transition duration-500">
        <div className="bg-gray-900/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl shadow-xl">
          <p className="text-gray-300 text-lg leading-relaxed">
            I am a passionate{" "}
            <span className="text-white font-semibold">
              Full Stack Developer
            </span>{" "}
            skilled in the MERN stack. I love building modern, scalable web
            applications with clean UI and smooth user experience.
            <br />
            <br />
            I also have knowledge of{" "}
            <span className="text-purple-400">
              Java, Python, MySQL, and Data Structures
            </span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;