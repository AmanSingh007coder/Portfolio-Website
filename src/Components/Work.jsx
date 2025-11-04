import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projects from "../data/ProjectData";

const Work = () => {
  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="projects"
      className="md:mt-5 md:px-16 px-6 md:py-6 font-Inter space-y-7 mx-4 scroll-mt-20 py-10"
    >
      <h1 className="text-3xl font-bold text-white mb-13 text-center">
        My <span className="text-blue-400">Portfolio Highlights</span>
      </h1>

      {/* Cards Grid */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={index}
            className="flex"
          >
            <Link to={`/project/${project.id}`} className="flex-1">
              <div className="relative group rounded-xl transition-transform duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col">
                
                {/* Gradient Hover Shadow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-blue-300 to-teal-200 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>

                {/* Actual Card */}
                <div className="relative bg-[#0f0f2b] rounded-xl border border-zinc-700 overflow-hidden shadow-lg flex flex-col justify-between h-full">
                  <div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />

                    <div className="p-4">
                      <h2 className="text-lg font-semibold text-white mb-2">
                        {project.title}
                      </h2>

                      {/* Subtitle or Short line under title */}
                      {project.subtitle && (
                        <p className="text-sm text-gray-400 mb-3 italic">
                          {project.subtitle}
                        </p>
                      )}

                      {/* Short Description */}
                      <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between p-4 border-t border-zinc-700 mt-auto">
                    <Link
                      to={`/project/${project.id}`}
                      className="text-md font-medium text-teal-400"
                    >
                      View Details →
                    </Link>

                    <div className="flex gap-x-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiGithub
                            className="text-gray-300 hover:text-red-400 transition"
                            style={{ fontSize: "22px" }}
                          />
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiExternalLink
                            className="text-sky-500 hover:text-white transition"
                            style={{ fontSize: "22px" }}
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <hr className="border-t border-zinc-700 mx-auto w-3/4 md:mt-20 mt-12" />
    </section>
  );
};

export default Work;
