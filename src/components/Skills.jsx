const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB","Docker","Express,js","Tailwindcss"];

  return (
    <section className="py-24 text-center">
      <h2 className="text-4xl font-bold mb-10">
        My <span className="text-purple-500">Skills</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-purple-500/20 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;