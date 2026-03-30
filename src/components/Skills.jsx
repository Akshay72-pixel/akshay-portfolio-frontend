import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaJava,
  FaPython,
  FaPhp,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiCplusplus,
  SiLaravel,
  SiMysql,
} from "react-icons/si";

const Skills = () => {
  const skills = {
    "Programming Languages": [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "PHP", icon: <FaPhp /> },
    ],
    Frontend: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    Backend: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Laravel", icon: <SiLaravel /> },
    ],
    Database: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
    DevOps: [{ name: "Docker", icon: <FaDocker /> }],
  };

  return (
    <section className="py-24 px-6 bg-black">
      <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-10">
        My Skills
      </h2>

      <div className="max-w-4xl mx-auto space-y-8 text-left">
        {Object.entries(skills).map(([category, items], i) => (
          <div key={i}>
            <h3 className="text-xl md:text-2xl text-purple-400 mb-4">
              {category}
            </h3>

            <div className="flex flex-wrap gap-4">
              {items.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 text-gray-300 border border-gray-700 rounded-md hover:border-purple-500 hover:text-white transition duration-300"
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;