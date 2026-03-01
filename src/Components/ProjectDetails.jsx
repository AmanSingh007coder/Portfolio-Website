import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowLeft, FiUser, FiUsers } from "react-icons/fi";
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

// ── Team / Individual badge ───────────────────────────────────────────────────
function ProjectTypeBadge({ team }) {
  const isTeam = team && team.length > 0;
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
      style={{
        background: isTeam ? "rgba(99,102,241,0.1)" : "rgba(59,130,246,0.1)",
        border: isTeam ? "1px solid rgba(99,102,241,0.3)" : "1px solid rgba(59,130,246,0.3)",
        color: isTeam ? "#818cf8" : "#60a5fa",
      }}
    >
      {isTeam ? <FiUsers size={12} /> : <FiUser size={12} />}
      {isTeam ? "Team Project" : "Individual Project"}
    </div>
  );
}

// ── Team members section ──────────────────────────────────────────────────────
function TeamSection({ team }) {
  if (!team || team.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.6 }}
      className="w-full max-w-4xl mb-14"
    >
      {/* Section heading */}
      <h2 className="text-xl font-semibold text-center mb-6 flex items-center justify-center gap-2"
        style={{ color: "#a5b4fc" }}>
        <FiUsers size={18} /> Team Members
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {team.map((member, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-2xl px-5 py-4 flex items-center gap-3 min-w-[180px]"
            style={{
              background: "#0b0d14",
              border: "1px solid rgba(99,102,241,0.2)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 + i * 0.08 }}
            whileHover={{ y: -3 }}
          >
            {/* Top accent */}
            <div
              className="absolute top-0 left-4 right-4 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent)" }}
            />

            {/* Avatar circle with initials */}
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-sm font-bold"
              style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.2))",
                border: "1px solid rgba(99,102,241,0.4)",
                color: "#a5b4fc",
              }}
            >
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </div>

            <div className="flex flex-col min-w-0">
              <span className="text-white text-sm font-semibold leading-none mb-0.5 truncate">
                {member.name}
              </span>
              {member.role && (
                <span className="text-zinc-500 text-[11px] font-mono truncate">
                  {member.role}
                </span>
              )}
            </div>

            {/* Optional GitHub link */}
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-zinc-600 hover:text-indigo-400 transition-colors"
              >
                <FiGithub size={18} />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
function ProjectDetails() {
  const { id } = useParams();
  const project = ProjectData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#080808] via-[#0a0d15] to-[#0f1622] text-white flex flex-col items-center py-16 px-6 overflow-hidden font-Inter">

      {/* ── Back button — left aligned ── */}
      <div className="w-full max-w-5xl mb-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-zinc-400 border border-white/[0.08] hover:text-white hover:border-white/20 transition-all duration-200"
          style={{ background: "#0b0d14" }}
        >
          <FiArrowLeft size={15} />
          Back to Projects
        </Link>
      </div>

      {/* ── Title + type badge ── */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mb-4 flex flex-col items-center gap-4"
      >
        {/* Individual / Team badge */}
        <ProjectTypeBadge team={project.team} />

        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent leading-tight">
          {project.title}
        </h1>
        <p className="text-zinc-400 text-base md:text-lg italic tracking-wide">
          {project.subtitle || "A creative, modern project built with passion"}
        </p>
      </motion.div>

      <div className="mb-10" />

      {/* ── Project image ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl mb-12"
        style={{ border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[380px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* ── Description ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-3xl text-center leading-relaxed text-zinc-400 mb-12"
      >
        <p className="text-base md:text-lg">
          {project.longDescription ||
            "This project combines performance and design to deliver a clean, intuitive user experience."}
        </p>
      </motion.div>

      {/* ── Key Features ── */}
      {project.features && project.features.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-full max-w-4xl mb-14"
        >
          <h2 className="text-xl font-semibold text-center text-purple-400 mb-6">
            Key Features
          </h2>
          <ul className="text-zinc-400 space-y-3 text-sm md:text-base leading-relaxed">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 hover:text-white transition-colors duration-300"
              >
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: "#a855f7" }}
                />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* ── Team Members (only for team projects) ── */}
      <TeamSection team={project.team} />

      {/* ── Tech Stack ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="w-full max-w-4xl mb-14"
      >
        <h2 className="text-xl font-semibold text-center text-teal-400 mb-6">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {project.stack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm hover:brightness-110 transition-all duration-300"
              style={{
                background: "#0b0d14",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {techIcons[tech] && (
                <img src={techIcons[tech]} alt={tech} className="w-5 h-5 object-contain" />
              )}
              <span className="text-zinc-300">{tech}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <hr className="border-t border-zinc-800 w-full max-w-4xl mb-10" />

      {/* ── Platform ── */}
      {project.platform && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="text-center mb-10 text-zinc-500"
        >
          <span className="text-[11px] uppercase tracking-widest font-mono">Deployed On</span>
          <p className="text-base text-white font-medium mt-1">{project.platform}</p>
        </motion.div>
      )}

      {/* ── Buttons ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 text-sm font-medium"
          >
            <FiGithub size={16} /> View Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-purple-500/40 hover:bg-purple-500/10 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 text-sm font-medium"
          >
            <FiExternalLink size={16} /> Live Demo
          </a>
        )}
      </motion.div>

      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-64 md:w-96 h-64 md:h-96 bg-cyan-500 blur-3xl rounded-full absolute top-20 left-1/4 opacity-[0.06]" />
        <div className="w-56 md:w-80 h-56 md:h-80 bg-purple-600 blur-3xl rounded-full absolute bottom-20 right-1/4 opacity-[0.07]" />
      </div>
    </div>
  );
}

export default ProjectDetails;