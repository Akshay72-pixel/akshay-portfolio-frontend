import { motion } from "framer-motion";

const projects = [
  {
    title: "Chat Website",
    desc: "Real-time chat application with authentication and live messaging.",
    tech: ["MERN"],
  },
  {
    title: "Thinker Board",
    desc: "Idea management app to create and organize thoughts.",
    tech: ["React"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-black">
      <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="border border-gray-800 rounded-xl p-6 bg-gray-900 hover:border-purple-500 transition duration-300"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              {p.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 border border-gray-700 rounded text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="text-sm text-white border border-gray-700 px-3 py-1 rounded hover:border-purple-500 transition">
                Live
              </button>
              <button className="text-sm text-white border border-gray-700 px-3 py-1 rounded hover:border-purple-500 transition">
                Code
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;