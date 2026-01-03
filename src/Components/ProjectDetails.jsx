import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import ProjectData from "../data/ProjectData";

// Importing Stack Icons
import react from "../Assets/react.png";
import js from "../Assets/js.png";
import tailwind from "../Assets/tailwind.png";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import figma from "../Assets/figma.png";
import githubIcon from "../Assets/github.png";
import canva from "../Assets/canva.png";
import firebase from "../Assets/firebase.png";
import node from "../Assets/nodejs.png";
import express from "../Assets/express.png";
import mongo from "../Assets/mongo.png";
import powerbi from "../Assets/powerbi.png";
import nextjs from "../Assets/next.png";
import blockchain from "../Assets/blockchain.png";

// Mapping stack name → icon
const techIcons = {
  "React JS": react,
  React: react,
  JavaScript: js,
  JS: js,
  Tailwind: tailwind,
  "Tailwind CSS": tailwind,
  HTML: html,
  CSS: css,
  Figma: figma,
  GitHub: githubIcon,
  Canva: canva,
  Firebase: firebase,
  Node: node,
  "Node JS": node,
  Express: express,
  "Express JS": express,
  MongoDB: mongo,
  PowerBI: powerbi,
  "Next JS": nextjs,
  Next: nextjs,
  Blockchain: blockchain,
};

function ProjectDetails() {
  const { id } = useParams();
  const project = ProjectData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white bg-gradient-to-b from-gray-900 to-black">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <Link to="/" className="mt-6 text-blue-400 hover:underline">
          Go Back Home
        </Link>
      </div>
    );
  }

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0b0b1d] via-[#0b0b1b] to-[#0c0c1f] text-white flex flex-col items-center py-24 px-6 overflow-hidden">
      {/* Back Button */}
      <div className="mb-10 rounded-3xl py-2 px-4 bg-gradient-to-r from-blue-500 to-cyan-600 
       hover:from-blue-600 hover:to-blue-600 text-white transition cursor-pointer shadow-md">
        <Link to="/" className="text-sm tracking-wide">
          ← Back to Projects
        </Link>
      </div>

      {/* Project Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mb-10"
      >
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 via-yellow-300 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg leading-tight overflow-visible">
          {project.title}
        </h1>
        <p className="text-gray-200 text-lg italic tracking-wide">
          {project.subtitle || "A creative, modern project built with passion"}
        </p>
      </motion.div>

      {/* Project Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-gray-800 mb-12"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-4xl text-center leading-relaxed text-gray-400 mb-12"
      >
        <p className="text-[17px] md:text-lg">
          {project.longDescription ||
            "This project combines performance and design to deliver a clean, intuitive user experience built with modern web technologies and elegant motion."}
        </p>
      </motion.div>

      {/* 🔹 Key Features Section (NEW) */}
      {project.features && project.features.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-full max-w-4xl mb-14"
        >
          <h2 className="text-2xl font-semibold text-center text-purple-400 mb-6">
            Key Features
          </h2>
          <ul className="text-gray-400 list-disc list-inside space-y-3 text-base leading-relaxed">
            {project.features.map((feature, index) => (
              <li key={index} className="hover:text-white transition-colors duration-300">
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="w-full max-w-4xl mb-14"
      >
        <h2 className="text-2xl font-semibold text-center text-teal-400 mb-6">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {project.stack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-5 py-2 bg-[#14142b] rounded-full border border-gray-700 text-sm md:text-base hover:bg-[#1b1b3a] transition-all duration-300 shadow-md"
            >
              {techIcons[tech] && (
                <img
                  src={techIcons[tech]}
                  alt={tech}
                  className="w-5 h-5 object-contain"
                />
              )}
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </motion.div>

         <hr className="border-t border-zinc-700 mx-auto w-3/4" />

      {/* Platform Info */}
      {project.platform && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-10 text-gray-400 mt-5"
        >
          <span className="text-sm uppercase tracking-widest">Deployed On</span>
          <p className="text-lg text-white font-medium mt-1">
            {project.platform}
          </p>
        </motion.div>
      )}

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="flex gap-6 flex-wrap justify-center"
      >
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3 rounded-xl border border-cyan-500 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_#06b6d4] transition-all duration-300"
          >
            <FiGithub className="text-xl" />
            View Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3 rounded-xl border border-purple-500 hover:bg-purple-500/10 hover:shadow-[0_0_20px_#a855f7] transition-all duration-300"
          >
            <FiExternalLink className="text-xl" />
            Live Demo
          </a>
        )}
      </motion.div>

      {/* Soft Ambient Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 1 }}
        className="absolute inset-0 -z-10"
      >
        <div className="w-[400px] h-[400px] bg-cyan-500 blur-3xl rounded-full absolute top-20 left-1/4 opacity-20 animate-pulse"></div>
        <div className="w-[350px] h-[350px] bg-purple-600 blur-3xl rounded-full absolute bottom-10 right-1/4 opacity-20 animate-pulse"></div>
      </motion.div>
    </div>
  );
}

export default ProjectDetails;
