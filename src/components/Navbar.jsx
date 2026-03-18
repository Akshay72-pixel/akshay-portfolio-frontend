import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/60 backdrop-blur-md text-white z-50 border-b border-[rgba(255,255,255,0.03)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <motion.h1
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl md:text-2xl font-bold text-[var(--accent)]"
        >
          Akshay.dev
        </motion.h1>

        <ul className="hidden md:flex gap-8 font-medium text-[rgba(230,238,248,0.9)]">
          <li><a href="#home" className="hover:text-[var(--accent)] transition">Home</a></li>
          <li><a href="#about" className="hover:text-[var(--accent)] transition">About</a></li>
          <li><a href="#projects" className="hover:text-[var(--accent)] transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-[var(--accent)] transition">Contact</a></li>
        </ul>

        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--bg)] text-center py-4 space-y-4 border-t border-[rgba(255,255,255,0.03)]">
          <a href="#home" onClick={() => setOpen(false)} className="block hover:text-[var(--accent)]">Home</a>
          <a href="#about" onClick={() => setOpen(false)} className="block hover:text-[var(--accent)]">About</a>
          <a href="#projects" onClick={() => setOpen(false)} className="block hover:text-[var(--accent)]">Projects</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block hover:text-[var(--accent)]">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;