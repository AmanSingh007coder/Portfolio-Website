import { motion } from "framer-motion";

const Academics = () => {
  return (
    <>
      <section
        id="academics"
        className="md:px-16 px-6 text-white overflow-hidden"
      >
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2
            className="text-4xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Academics <span className="text-blue-400">& Extra-Curricular</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A glimpse into my academic performance, technical team involvement,
            and language proficiency.
          </motion.p>

          {/* Technical Team */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
              Technical Team
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I’m an active{" "}
              <span className="text-blue-500 font-medium">Tech Member</span> of
              the <span className="text-red-600 font-semibold">Genesis</span>{" "}
              technical team, where I collaborate on innovative projects,
              technical events, and automation initiatives that enhance student
              engagement and technical excellence.
            </p>
          </motion.div>

          {/* Academic Performance */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-teal-400 to-teal-600 text-transparent bg-clip-text">
              Academic Performance
            </h3>

            <div className="grid md:grid-cols-3 gap-6 justify-center">
              {[
                { title: "1st Semester", gpa: "9.8" },
                { title: "2nd Semester", gpa: "9.95" },
                { title: "3rd Semester", gpa: "In Progress..." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-[#17173e] backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-105 transition-transform"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: false }}
                >
                  <h4 className="text-lg font-semibold text-yellow-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 mt-2">
                    GPA: {" "}
                    <span className="text-green-400 font-medium">
                      {item.gpa}
                    </span>
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-blue-500">
              Languages Known
            </h3>
            <ul className="flex flex-wrap justify-center gap-6 mt-4 text-gray-300">
              {[
                { lang: "English", level: "Proficient", color: "text-green-400" },
                { lang: "Kannada", level: "Medium", color: "text-yellow-400" },
                { lang: "Hindi", level: "Proficient", color: "text-green-400" },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="bg-white/5 px-6 py-3 rounded-xl border border-white/10 hover:bg-blue-600/20 transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  {item.lang} –{" "}
                  <span className={`${item.color}`}>{item.level}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      <hr className="border-t border-zinc-700 mx-auto w-3/4 md:mt-25 mt-13" />
    </>
  );
};

export default Academics;
