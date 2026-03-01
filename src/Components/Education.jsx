import { motion } from "framer-motion";
import { MapPin, Calendar, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Primary School — Computer Basics",
    college: "St Joseph's Boys High School",
    location: "Ballari",
    date: "Until 2021",
    description:
      "Discovered the Computer Science field and became fascinated by the principles of how computers work.",
    skills: ["SQL", "Computer Basics"],
    accent: "#6366f1",
    glow:   "rgba(99,102,241,0.25)",
  },
  {
    title: "High School — C++",
    college: "Sri Chaitanya P.U College",
    location: "Ballari",
    date: "2022 — 2024",
    description:
      "Studied PCM with programming in C++, building a foundation in problem-solving and Object Oriented Programming.",
    skills: ["C++", "OOP", "Data Structures"],
    accent: "#06b6d4",
    glow:   "rgba(6,182,212,0.25)",
  },
  {
    title: "Full Stack Developer",
    college: "DSCE",
    location: "Bangalore",
    date: "2024 — Present",
    description:
      "Currently pursuing B.E. in Engineering with a strong focus on full stack web development and building modern, responsive digital experiences.",
    skills: ["MongoDB", "Express", "Node.js", "JavaScript", "React", "Tailwind"],
    accent: "#3b82f6",
    glow:   "rgba(59,130,246,0.25)",
  },
];

// ── Desktop alternating card ──────────────────────────────────────────────────
function SignCard({ exp, index }) {
  const isRight = index % 2 === 0;

  return (
    <div className="relative flex items-center w-full">

      {/* LEFT SLOT */}
      <div className="w-[46%] flex justify-end">
        {!isRight && <CardContent exp={exp} isRight={false} index={index} />}
      </div>

      {/* Center NODE */}
      <div className="w-[8%] flex justify-center z-10">
        <motion.div
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: exp.accent,
            boxShadow: `0 0 0 5px #080808, 0 0 18px ${exp.glow}`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          animate={{ boxShadow: [`0 0 0 5px #080808, 0 0 12px ${exp.glow}`, `0 0 0 5px #080808, 0 0 28px ${exp.glow}`, `0 0 0 5px #080808, 0 0 12px ${exp.glow}`] }}
        >
          <GraduationCap size={13} className="text-white" />
        </motion.div>
      </div>

      {/* RIGHT SLOT */}
      <div className="w-[46%]">
        {isRight && <CardContent exp={exp} isRight={true} index={index} />}
      </div>
    </div>
  );
}

function CardContent({ exp, isRight, index }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl w-full"
      style={{
        background: "#0b0d14",
        border: `1px solid ${exp.accent}28`,
      }}
      initial={{ opacity: 0, x: isRight ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.1 }}
    >
      {/* Hover border glow */}
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${exp.accent}88 0%, transparent 50%, ${exp.accent}66 100%)`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />

      {/* Top color bar — like a sign header */}
      <div
        className="h-[3px] w-full"
        style={{ background: `linear-gradient(90deg, ${exp.accent}, transparent)` }}
      />

      {/* Direction indicator bar */}
      <div
        className={`absolute top-4 bottom-4 w-[3px] rounded-full ${isRight ? "right-0" : "left-0"}`}
        style={{ background: `linear-gradient(to bottom, transparent, ${exp.accent}60, transparent)` }}
      />

      <div className="p-7">
        {/* Date */}
        <div className="flex items-center gap-2 mb-3">
          <Calendar size={13} style={{ color: exp.accent }} />
          <span
            className="text-xs font-mono tracking-[0.2em] uppercase"
            style={{ color: exp.accent }}
          >
            {exp.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white leading-snug mb-2">
          {exp.title}
        </h3>

        {/* College + location */}
        <div className="flex items-center gap-1 mb-4 flex-wrap">
          <span className="text-zinc-300 text-sm font-medium">{exp.college}</span>
          <MapPin size={12} className="text-zinc-500 mx-1" />
          <span className="text-zinc-500 text-sm">{exp.location}</span>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed mb-5">{exp.description}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {exp.skills.map((s, i) => (
            <span
              key={i}
              className="text-xs font-mono px-3 py-1 rounded-full"
              style={{
                color: exp.accent,
                background: `${exp.accent}12`,
                border: `1px solid ${exp.accent}30`,
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Mobile card ───────────────────────────────────────────────────────────────
function MobileCard({ exp, index, isLast }) {
  return (
    <motion.div
      className="flex gap-4 items-start"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
    >
      {/* Dot + line */}
      <div className="flex flex-col items-center pt-1 shrink-0">
        <div
          className="w-3.5 h-3.5 rounded-full shrink-0"
          style={{ background: exp.accent, boxShadow: `0 0 10px ${exp.glow}` }}
        />
        {!isLast && (
          <div
            className="w-px mt-2 flex-1"
            style={{ background: "rgba(255,255,255,0.06)", minHeight: "60px" }}
          />
        )}
      </div>

      {/* Card */}
      <div
        className="flex-1 rounded-2xl overflow-hidden mb-6"
        style={{ background: "#0b0d14", border: `1px solid ${exp.accent}22` }}
      >
        <div
          className="h-[3px] w-full"
          style={{ background: `linear-gradient(90deg, ${exp.accent}, transparent)` }}
        />
        <div className="p-4">
          <div className="flex items-center gap-1.5 mb-2">
            <Calendar size={10} style={{ color: exp.accent }} />
            <span
              className="text-[10px] font-mono tracking-widest uppercase"
              style={{ color: exp.accent }}
            >
              {exp.date}
            </span>
          </div>
          <h3 className="text-sm font-bold text-white mb-1">{exp.title}</h3>
          <p className="text-zinc-500 text-[11px] mb-2">
            {exp.college} · {exp.location}
          </p>
          <p className="text-zinc-500 text-xs leading-relaxed mb-3">{exp.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {exp.skills.map((s, i) => (
              <span
                key={i}
                className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                style={{
                  color: exp.accent,
                  background: `${exp.accent}12`,
                  border: `1px solid ${exp.accent}28`,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
const Education = () => {
  return (
    <section
      id="education"
      className="text-white font-Inter px-5 md:px-16 scroll-mt-20 py-10 md:py-16"
    >
      {/* Heading */}
      <motion.p
        className="text-[11px] font-mono tracking-[0.3em] text-zinc-600 uppercase mb-3"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: false }} transition={{ duration: 0.6 }}
      >
        — My Journey
      </motion.p>

      <motion.h2
        className="text-4xl md:text-5xl font-black text-white mb-2 leading-none"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.1 }}
      >
        Education & <span className="text-blue-400">Experience</span>
      </motion.h2>

      <motion.p
        className="text-zinc-500 text-sm mb-12 md:mb-16"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.2 }}
      >
        Milestones that shaped my expertise in web development.
      </motion.p>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block relative max-w-5xl mx-auto">
        {/* Center vertical line */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(255,255,255,0.07) 15%, rgba(255,255,255,0.07) 85%, transparent)",
          }}
        />
        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <SignCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="block md:hidden">
        {experiences.map((exp, i) => (
          <MobileCard
            key={i}
            exp={exp}
            index={i}
            isLast={i === experiences.length - 1}
          />
        ))}
      </div>

      <hr className="border-t border-zinc-800 mx-auto w-3/4 md:mt-20 mt-14" />
    </section>
  );
};

export default Education;