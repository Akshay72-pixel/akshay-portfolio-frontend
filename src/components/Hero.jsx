// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="text-[var(--accent)]">Akshay</span>
      </motion.h1>

      <motion.p
        className="mt-4 max-w-2xl text-[var(--muted)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Full Stack Developer (MERN) — I build modern, scalable web applications and interactive developer tools.
      </motion.p>

      <motion.div className="mt-8 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <a href="#projects" className="border border-[rgba(255,255,255,0.06)] text-[var(--muted)] px-5 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.02)] transition">Projects</a>
      </motion.div>
    </section>
  );
};

export default Hero;