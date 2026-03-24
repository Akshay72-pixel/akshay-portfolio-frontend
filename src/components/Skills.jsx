const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Docker",
    "Tailwind CSS",
  ];

  return (
    <section className="py-24 px-6 bg-black text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10">
        My Skills
      </h2>

      <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-3">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 text-sm md:text-base text-gray-300 border border-gray-700 rounded-md hover:border-purple-500 hover:text-white transition duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;