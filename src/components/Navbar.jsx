import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Projects"];

  return (
    <nav className="fixed w-full bg-black/60 backdrop-blur-md text-white z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl md:text-2xl font-bold text-[var(--accent)] cursor-pointer"
        >
          Akshay.dev
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-300">
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={`#${link.toLowerCase()}`}
                className="relative hover:text-[var(--accent)] transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[var(--accent)] after:transition-all hover:after:w-full"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/95 backdrop-blur-lg text-center py-6 space-y-6 border-t border-white/5"
          >
            {links.map((link, i) => (
              <a
                key={i}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block text-lg text-gray-300 hover:text-[var(--accent)] transition"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;