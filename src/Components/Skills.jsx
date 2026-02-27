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
        { img: js,     title: "JavaScript", desc: "Dynamic scripting for web and server-side apps." },
        { img: python, title: "Python",      desc: "Versatile, object-oriented, and beginner-friendly." },
        { img: c,      title: "C",           desc: "Structured, efficient language for low-level programming." },
        { img: cpp,    title: "C++",         desc: "Object-oriented, high-performance extension of C." },
      ],
    },
    {
      title: "Frameworks & Libraries",
      items: [
        { img: react,    title: "React.js",     desc: "Component-based library for modern UIs." },
        { img: node,     title: "Node.js",      desc: "Runtime for building scalable backend services." },
        { img: express,  title: "Express.js",   desc: "Minimalist framework for Node.js APIs." },
        { img: next,     title: "Next.js",      desc: "React framework for building full stack." },
        { img: tailwind, title: "Tailwind CSS", desc: "Utility-first CSS framework for fast styling." },
        { img: html,     title: "HTML",         desc: "Foundation for structuring web pages." },
        { img: css,      title: "CSS",          desc: "Design and style layer for clean layouts." },
        { img: firebase, title: "Firebase",     desc: "Google's cloud backend for auth & hosting." },
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
        { img: github,  title: "GitHub",  desc: "Version control, repositories, and collaboration." },
        { img: postman, title: "Postman", desc: "Comprehensive API testing and debugging tool." },
        { img: windows, title: "Windows", desc: "Primary development and testing environment." },
        { img: arduino, title: "Arduino", desc: "Platform for embedded and robotics projects." },
      ],
    },
    {
      title: "Design & Visualization",
      items: [
        { img: figma,   title: "Figma",    desc: "Collaborative tool for UI/UX design." },
        { img: canva,   title: "Canva",    desc: "Quick design creation for media and visuals." },
        { img: powerbi, title: "Power BI", desc: "Business intelligence and data visualization tool." },
      ],
    },
    {
      title: "Soft Skills",
      items: [
        { img: collab, title: "Team Collaboration", desc: "Communicates effectively across teams and roles." },
        { img: adapt,  title: "Adaptability",       desc: "Quickly learns and adjusts to new tools or environments." },
        { img: quick,  title: "Quick Learner",      desc: "Always eager to explore new technologies and methods." },
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.92 },
    show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <section
      id="skills"
      className="font-Inter px-6 md:px-20 md:scroll-mt-55 relative overflow-hidden"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-400 to-indigo-500 text-transparent bg-clip-text mb-4"
      >
        ToolKit I Use
      </motion.h1>

      {/* Intro */}
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
          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 via-green-300 to-teal-600 text-transparent bg-clip-text text-center mb-8">
            {section.title}
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.15 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4"
          >
            {section.items.map((skill, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hovered"
                className="group relative overflow-hidden rounded-2xl cursor-default"
                style={{
                  background: "linear-gradient(135deg, #131620 0%, #0e1118 50%, #0b0e15 100%)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                {/* Hover glow layer */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  variants={{
                    hovered: { opacity: 1 },
                  }}
                  transition={{ duration: 0.25 }}
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 70%)",
                    border: "1px solid rgba(59,130,246,0.25)",
                  }}
                />

                {/* Top shimmer line */}
                <div
                  className="absolute top-0 left-4 right-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(96,165,250,0.6), transparent)",
                  }}
                />

                {/* Card body — square-ish */}
                <div className="relative z-10 flex flex-col items-center justify-center gap-7 aspect-square ">
                  {/* Icon with tilt on hover */}
                  <motion.img
                    src={skill.img}
                    alt={skill.title}
                    className="w-12 h-12 md:w-20 md:h-20 object-contain"
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(59,130,246,0.3))",
                    }}
                    variants={{
                      hovered: {
                        rotate: -12,
                        scale: 1.18,
                        filter: [
                          "drop-shadow(0 0 8px rgba(59,130,246,0.3))",
                          "drop-shadow(0 0 18px rgba(59,130,246,0.7))",
                        ],
                      },
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 14 }}
                  />

                  {/* Title */}
                  <h3 className="text-white font-semibold text-md md:text-lg text-center leading-tight line-clamp-2">
                    {skill.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}

      <hr className="border-t border-zinc-700 mx-auto w-3/4 md:mt-40 mt-16" />

    </section>
  );
};

export default Skills;