import { motion } from "framer-motion";
import react from "../Assets/react.png";
import js from "../Assets/js.png";
import tailwind from "../Assets/tailwind.png";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import figma from "../Assets/figma.png";
import github from "../Assets/github.png";
import canva from "../Assets/canva.png";
import firebase from "../Assets/firebase.png";
import node from "../Assets/nodejs.png";
import express from "../Assets/express.png";
import mongo from "../Assets/mongo.png";
import powerbi from "../Assets/powerbi.png";

const Skills = () => {
  const skills = [
    { img: react, title: "React", description: "A JavaScript library." },
    { img: js, title: "JavaScript", description: "A programming language." },
    { img: tailwind, title: "Tailwind CSS", description: "A Utility-First CSS framework." },
    { img: html, title: "HTML", description: "A markup language for creating web pages." },
    { img: css, title: "CSS", description: "A style sheet language for a document." },
    { img: figma, title: "Figma", description: "A web-based UI/UX design application." },
    { img: github, title: "GitHub", description: "A platform for version control." },
    { img: canva, title: "Canva", description: "A graphic design platform." },
    { img: firebase, title: "Firebase", description: "A platform for user authentication." },
    { img: node, title: "Node.js", description: "A JavaScript Runtime Environment." },
    { img: express, title: "Express", description: "A web application framework." },
    { img: mongo, title: "MongoDB", description: "A NoSQL database." },
    { img: powerbi, title: "PowerBI", description: "A business analytics tool." },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="font-Inter px-10 md:px-20 md:scroll-mt-55 scroll-mt-22 relative overflow-hidden"
    >
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-400 to-indigo-500 text-transparent bg-clip-text relative z-20 mb-4"
      >
        ToolKit I Use
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.9 }}
        className="mt-2 text-zinc-300 relative z-20"
      >
        Discover the powerful and latest technologies that I use to create
        high-performing, stand-out websites and <br />
        applications — explore these amazing tools below.
      </motion.p>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 md:gap-6 gap-3 mt-10 px-2 relative z-10"
      >
        {skills.map((skill, index) => (
          <motion.a
            variants={cardVariants}
            key={index}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 10 }}
            className="card flex justify-start space-x-4 items-center border border-zinc-600 rounded-lg py-2 px-2 bg-[#0f0f2b]/50 backdrop-blur-sm hover:bg-[#1a1a40]/80 transition-all duration-300"
          >
            <img src={skill.img} alt={skill.title} className="w-12 h-12" />
            <div className="text">
              <h2 className="font-bold text-white">{skill.title}</h2>
              <p className="text-zinc-400">{skill.description}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <hr className="border-t border-zinc-700 mx-auto w-3/4 md:mt-40 mt-13 relative z-10" />

      {/* Animated Floating Blob */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0.25 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.35, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none"
      ></motion.div>
    </section>
  );
};

export default Skills;