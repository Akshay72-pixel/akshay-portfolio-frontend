const Education = () => {
  return (
    <section className="py-24 px-6 bg-black text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10">
        Education
      </h2>

      <div className="max-w-2xl mx-auto text-left">
        <div className="border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition duration-300">
          
          <h3 className="text-xl md:text-2xl font-medium text-white mb-1">
            BSc Information Technology
          </h3>

          <p className="text-sm text-gray-400 mb-3">
            Mumbai University • Completed
          </p>

          <p className="text-gray-300 text-sm leading-relaxed">
            Learned core concepts of programming, web development, databases,
            and data structures. Built projects using modern technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;