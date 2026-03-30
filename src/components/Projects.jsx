// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const projects = [
  {
    title: "Chat Website",
    desc: "Real-time chat application with authentication and live messaging.",
    code: "https://github.com/yourusername/chat-app",
  },
  {
    title: "Thinker Board",
    desc: "Idea management app to create and organize thoughts.",
    code: "https://github.com/yourusername/thinker-board",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-black">
      <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12">
        Projects
      </h2>

      {/* Center grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6 justify-center">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="w-full max-w-sm mx-auto border border-gray-800 rounded-xl p-6 bg-gray-900 hover:border-purple-500 transition duration-300"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              {p.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {p.desc}
            </p>

            <a
              href={p.code}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-sm text-white border border-gray-700 px-4 py-1.5 rounded hover:border-purple-500 hover:text-purple-400 transition"
            >
              View Code
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;