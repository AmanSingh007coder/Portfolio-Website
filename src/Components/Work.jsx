import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projects from "../data/ProjectData";

// ─── Split featured vs regular ────────────────────────────────────────────────
// Adjust these IDs to match your ProjectData ids
const FEATURED_IDS = ["zentry-blog", "nishtha-ai"]; // ← change to your actual project ids

const featuredProjects = projects.filter((p) => FEATURED_IDS.includes(p.id));
const regularProjects  = projects.filter((p) => !FEATURED_IDS.includes(p.id));

// Accent colors per featured card (border glow + badge)
const FEATURED_ACCENTS = [
  {
    border:  "rgba(132,204,22,0.7)",   // lime
    glow:    "rgba(132,204,22,0.18)",
    badge:   "bg-lime-500/15 text-lime-400 border-lime-500/30",
    pill:    "bg-lime-500/10 text-lime-300 border-lime-500/20",
    link:    "text-lime-400 hover:text-lime-300",
  },
  {
    border:  "rgba(234,179,8,0.75)",   // amber
    glow:    "rgba(234,179,8,0.15)",
    badge:   "bg-amber-500/15 text-amber-400 border-amber-500/30",
    pill:    "bg-amber-500/10 text-amber-300 border-amber-500/20",
    link:    "text-amber-400 hover:text-amber-300",
  },
];

// ─── Featured Card ─────────────────────────────────────────────────────────────
function FeaturedCard({ project, index }) {
  const isFlipped = index % 2 === 1;
  const accent    = FEATURED_ACCENTS[index % FEATURED_ACCENTS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
      className="group relative w-full"
    >
      {/* Animated border wrapper */}
      <div
        className="absolute -inset-[1.5px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${accent.border}, transparent 60%, ${accent.border})`,
          boxShadow: `0 0 32px ${accent.glow}, inset 0 0 32px ${accent.glow}`,
        }}
      />

      {/* Card */}
      <div
        className="relative rounded-2xl overflow-hidden flex flex-col md:flex-row md:h-64"
        style={{
          background: "linear-gradient(135deg, #111520 0%, #0c0f1a 100%)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Image side */}
        <div
          className={`relative w-full md:w-[35%] overflow-hidden ${
            isFlipped ? "md:order-2" : "md:order-1"
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Image overlay gradient with shadow effect */}
          <div
            className={`absolute inset-0 ${
              isFlipped
                ? "bg-gradient-to-l from-[#0c0f1a] via-[#0c0f1a]/50 to-transparent"
                : "bg-gradient-to-r from-[#0c0f1a] via-[#0c0f1a]/50 to-transparent"
            }`}
          />
        </div>

        {/* Content side */}
        <div
          className={`relative flex flex-col justify-center gap-4 p-6 md:p-10 w-full md:w-[65%] ${
            isFlipped ? "md:order-1" : "md:order-2"
          }`}
        >

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-1">
              {project.title}
            </h2>
            {project.subtitle && (
              <p className="text-sm text-zinc-400 italic">{project.subtitle}</p>
            )}
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed line-clamp-4">
            {project.description}
          </p>

          {/* Tech stack pills */}
          {project.techStack && (
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${accent.pill}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-3 pt-1 flex-wrap">
            <Link
              to={`/project/${project.id}`}
              className={`px-5 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 transition-all duration-300 border ${accent.pill}`}
              style={{
                backgroundColor: `${accent.border}15`,
              }}
            >
              View Details
            </Link>

            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-all duration-300 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700 hover:border-zinc-600"
              >
                <FiGithub style={{ fontSize: "16px" }} />
                Github
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-all duration-300 border bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 hover:text-sky-300 border-sky-500/30 hover:border-sky-500/50"
              >
                <FiExternalLink style={{ fontSize: "16px" }} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Regular Card ──────────────────────────────────────────────────────────────
function RegularCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: (index % 3) * 0.12 }}
      className="group relative h-full"
    >
      {/* Glowing border on hover */}
      <div
        className="absolute -inset-[1.5px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(20,184,166,0.8), rgba(56,189,248,0.5) 50%, rgba(20,184,166,0.8))",
          boxShadow:
            "0 0 24px rgba(20,184,166,0.25), inset 0 0 24px rgba(20,184,166,0.1)",
        }}
      />

      <Link to={`/project/${project.id}`} className="block h-full">
        <div
          className="relative rounded-xl overflow-hidden flex flex-col h-full transition-transform duration-300 group-hover:-translate-y-1"
          style={{
            background: "linear-gradient(160deg, #111520 0%, #0c0f1a 100%)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-44 object-cover transition-transform duration-600 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f1a]/80 via-transparent to-transparent" />
          </div>

          {/* Body */}
          <div className="flex flex-col flex-1 p-5 gap-3">
            <div>
              <h2 className="text-base font-semibold text-white leading-snug mb-1">
                {project.title}
              </h2>
              {project.subtitle && (
                <p className="text-xs text-zinc-500 italic">{project.subtitle}</p>
              )}
            </div>

            <p className="text-zinc-400 text-sm line-clamp-3 leading-relaxed flex-1">
              {project.description}
            </p>

            {/* Tech pills — small */}
            {project.techStack && (
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-500 border border-zinc-700">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-zinc-800 mt-auto">
              <span className="text-sm font-medium text-teal-400 group-hover:text-teal-300 transition-colors">
                View Details →
              </span>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub
                      className="text-zinc-500 hover:text-white transition"
                      style={{ fontSize: "18px" }}
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
                      className="text-zinc-500 hover:text-sky-400 transition"
                      style={{ fontSize: "18px" }}
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Main Section ──────────────────────────────────────────────────────────────
const Work = () => {
  return (
    <section
      id="projects"
      className="md:mt-5 md:px-16 px-6 md:py-6 font-Inter space-y-16 mx-2 scroll-mt-20 py-10"
    >
      {/* Heading */}
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono tracking-[0.3em] text-zinc-500 uppercase mb-3"
        >
          Selected Work
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          My <span className="text-blue-400">Portfolio Projects</span>
        </motion.h1>
      </div>

      {/* ── Featured Projects ── */}
      {featuredProjects.length > 0 && (
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-[0.25em] text-zinc-600 uppercase"
          >
            ── Featured
          </motion.p>
          <div className="flex flex-col gap-8">
            {featuredProjects.map((project, index) => (
              <FeaturedCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      )}

      {/* ── Regular Projects ── */}
      {regularProjects.length > 0 && (
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-[0.25em] text-zinc-600 uppercase"
          >
            ── More Projects
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
            {regularProjects.map((project, index) => (
              <RegularCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      )}

      <hr className="border-t border-zinc-800 mx-auto w-3/4 mt-12" />
    </section>
  );
};

export default Work;