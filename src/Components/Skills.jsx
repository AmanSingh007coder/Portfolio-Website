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
import c from "../Assets/c.png";
import cpp from "../Assets/cpp.png";
import python from "../Assets/Python.png";
import arduino from "../Assets/arduino.png";
import windows from "../Assets/windows.png";
import collab from "../Assets/collabaration.png";
import adapt from "../Assets/adapt.png";
import quick from "../Assets/quick.png";
import postman from "../Assets/postman.png";
import next from "../Assets/next.png";


const Skills = () => {
  const sections = [
    {
      title: "Programming Languages",
      items: [
        { img: js, title: "JavaScript", desc: "Dynamic scripting for web and server-side apps." },
        { img: python, title: "Python", desc: "Versatile, object-oriented, and beginner-friendly." },
        { img: c, title: "C", desc: "Structured, efficient language for low-level programming." },
        { img: cpp, title: "C++", desc: "Object-oriented, high-performance extension of C." },
      ],
    },
    {
      title: "Frameworks & Libraries",
      items: [
        { img: react, title: "React.js", desc: "Component-based library for modern UIs." },
        { img: node, title: "Node.js", desc: "Runtime for building scalable backend services." },
        { img: express, title: "Express.js", desc: "Minimalist framework for Node.js APIs." },
        { img: next, title: "Next.js", desc: "React framework for building full stack." },
        { img: tailwind, title: "Tailwind CSS", desc: "Utility-first CSS framework for fast styling." },
        { img: html, title: "HTML", desc: "Foundation for structuring web pages." },
        { img: css, title: "CSS", desc: "Design and style layer for clean layouts." },
        { img: firebase, title: "Firebase", desc: "Google's cloud backend for authentication & hosting." },
      ],
    },
    {
      title: "Databases",
      items: [
        { img: mongo, title: "MongoDB", desc: "NoSQL database for scalable, document-based storage." },
      ],
    },
    {
      title: "Development Tools & Platforms",
      items: [
        { img: github, title: "GitHub", desc: "Version control, repositories, and collaboration." },
        { img: postman, title: "Postman", desc: "Comprehensive API testing and debugging tool." },
        { img: windows, title: "Windows", desc: "Primary development and testing environment." },
        { img: arduino, title: "Arduino", desc: "Platform for embedded and robotics projects." },
      ],
    },
    {
      title: "Design & Visualization",
      items: [
        { img: figma, title: "Figma", desc: "Collaborative tool for UI/UX design." },
        { img: canva, title: "Canva", desc: "Quick design creation for media and visuals." },
        { img: powerbi, title: "Power BI", desc: "Business intelligence and data visualization tool." },
      ],
    },
    {
      title: "Soft Skills",
      items: [
        { img: collab, title: "Team Collaboration", desc: "Communicates effectively across teams and roles." },
        { img: adapt, title: "Adaptability", desc: "Quickly learns and adjusts to new tools or environments." },
        { img: quick, title: "Quick Learner", desc: "Always eager to explore new technologies and methods." },
      ],
    },
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
      className="font-Inter px-10 md:px-20 md:scroll-mt-55 relative overflow-hidden"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-400 to-indigo-500 text-transparent bg-clip-text mb-4"
      >
        ToolKit I Use
      </motion.h1>

      {/* Intro text */}
      <motion.p
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.9 }}
        className="mt-2 text-zinc-300"
      >
        A quick look at the powerful and modern technologies I use to design,
        build, and deploy efficient applications across web, IoT, and data domains.
      </motion.p>

      {/* Skill Sections */}
      {sections.map((section, sIndex) => (
        <div key={sIndex} className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 via-green-300 to-teal-600 text-transparent bg-clip-text text-center mb-6">
            {section.title}
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
          >
            {section.items.map((skill, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 150, damping: 10 }}
                className="flex items-center space-x-4 border border-zinc-600 rounded-lg py-3 px-3 bg-[#0f0f2b]/50 backdrop-blur-sm hover:bg-[#1a1a40]/80 transition-all"
              >
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <h3 className="text-white font-semibold">{skill.title}</h3>
                  <p className="text-zinc-400 text-sm">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}

      <hr className="border-t border-zinc-700 mx-auto w-3/4 md:mt-40 mt-16" />

      {/* Floating blob */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0.25 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.35, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none"
      />
    </section>
  );
};

export default Skills;
