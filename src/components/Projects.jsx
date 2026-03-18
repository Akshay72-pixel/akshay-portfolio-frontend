// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const projects = [
  { title: "Chat Website", desc: "Real-time chat app", tech: ["MERN"] },
  { title: "Product Store", desc: "E-commerce app", tech: ["MERN"] },
  { title: "Thinker Board", desc: "Idea management app", tech: ["React"] },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-purple-500">Projects</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-lg hover:shadow-purple-500/20 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>

            <div className="mt-4 flex gap-2">
              {p.tech.map((t, index) => (
                <span key={index} className="text-sm bg-purple-500/20 px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;