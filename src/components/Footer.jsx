const Footer = () => {
  return (
    <footer className="bg-black border-t border-[rgba(255,255,255,0.05)] py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-xl font-semibold text-white">
          Akshay.dev
        </h2>

        <p className="text-gray-400 mt-2 text-sm">
          Full Stack Developer | MERN Stack
        </p>

        {/* Links */}
        <div className="flex justify-center gap-6 mt-4 text-gray-400">
          <a href="#home" className="hover:text-purple-500">Home</a>
          <a href="#about" className="hover:text-purple-500">About</a>
          <a href="#projects" className="hover:text-purple-500">Projects</a>
          
        </div>

        {/* Bottom */}
        <p className="text-gray-500 text-xs mt-4">
          © {new Date().getFullYear()} Akshay. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;