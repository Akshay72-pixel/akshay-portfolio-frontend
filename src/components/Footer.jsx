import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-6">

        {/* Logo */}
        <h2 className="text-2xl font-semibold text-white">
          Akshay.dev
        </h2>

        {/* Tagline */}
        <p className="text-gray-400 text-sm">
          Full Stack Developer
        </p>

        {/* Navigation Links */}
        <div className="flex justify-center gap-6 text-gray-400 text-sm">
          <a href="#home" className="hover:text-[var(--accent)] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[var(--accent)] transition">
            About
          </a>
          <a href="#projects" className="hover:text-[var(--accent)] transition">
            Projects
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-gray-400 text-lg">
          <a
            href="#"
            className="hover:text-[var(--accent)] transition"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="hover:text-[var(--accent)] transition"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
         
        </div>

        {/* Bottom */}
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Akshay. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;