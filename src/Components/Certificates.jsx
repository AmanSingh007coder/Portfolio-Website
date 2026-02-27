import { motion } from "framer-motion";
import { Download, Award, Calendar, Trophy, Star } from "lucide-react";

const certificates = [
  {
    college: "R.V College of Engineering",
    event: "Ctrl + Alt + Compete",
    place: "Participants — Team Achievement",
    tier: "participant",
    description:
      "Built an AI-Driven Web application for Hazard Routing using AI model and geo-location.",
    date: "June 2025",
    link: "raahi.pdf",
  },
  {
    college: "Dayananda Sagar Academy",
    event: "CypherQuest",
    place: "Participants — Team Achievement",
    tier: "participant",
    description:
      "Created a decentralized application to reduce Carbon Emissions by LLM Models.",
    date: "April 2025",
    link: "carbon.pdf",
  },
  {
    college: "Dayananda Sagar College of Engineering",
    event: "MakerBlitz",
    place: "Cash Prize — Team Achievement",
    tier: "winner",
    description:
      "A Hardware-oriented Glider integrated with Avionics systems and Aerodynamics principles.",
    date: "April 2025",
    link: "Hardware.pdf",
  },
  {
    college: "Dayananda Sagar College of Engineering",
    event: "TechTrek",
    place: "Participants — Team Achievement",
    tier: "participant",
    description:
      "Designed and developed a MERN stack web application to find PGs nearby.",
    date: "March 2025",
    link: "pg.pdf",
  },
  {
    college: "Dayananda Sagar College of Engineering",
    event: "Bytexync",
    place: "Participants — Team Achievement",
    tier: "participant",
    description:
      "Built a website that helps students to participate and enroll in inter-college events.",
    date: "November 2024",
    link: "bytexync.pdf",
  },
  {
    college: "DSCE — Point Blank",
    event: "Smart India Hackathon",
    place: "Qualified in Internal Hackathon — Team Achievement",
    tier: "qualified",
    description:
      "AI for Rockfall Detection and Prevention in Mining Regions using LSTM model.",
    date: "Sept 2025",
  },
  {
    college: "Acharya Institute of Technology",
    event: "Tech Habba",
    place: "Participants — Team Achievement",
    tier: "participant",
    description:
      "AI + Blockchain platform that converts YouTube courses into verifiable credentials.",
    date: "Nov 2025",
    link: "techhabba.pdf",
  },
];

const TIER = {
  winner: {
    dot:       "#facc15",
    border:    "rgba(250,204,21,0.7)",
    glow:      "rgba(250,204,21,0.25)",
    textAccent:"text-yellow-300",
    divider:   "rgba(250,204,21,0.2)",
  },
  qualified: {
    dot:       "#a78bfa",
    border:    "rgba(167,139,250,0.7)",
    glow:      "rgba(167,139,250,0.2)",
    textAccent:"text-violet-300",
    divider:   "rgba(167,139,250,0.2)",
  },
  participant: {
    dot:       "#38bdf8",
    border:    "rgba(56,189,248,0.65)",
    glow:      "rgba(56,189,248,0.18)",
    textAccent:"text-sky-300",
    divider:   "rgba(56,189,248,0.18)",
  },
};

function CertificateCard({ cert, index }) {
  const t = TIER[cert.tier];
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
    >
      {/*
        Glow border layer — sits at -inset-[1px], hidden at rest, visible on hover.
        This is the ONLY thing that changes on hover. The card itself is untouched.
      */}
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none z-0"
        style={{
          background: `linear-gradient(135deg, ${t.border} 0%, transparent 40%, transparent 60%, ${t.border} 100%)`,
          boxShadow: `0 0 18px ${t.glow}, 0 0 40px ${t.glow}`,
        }}
      />

      {/*
        Card — static bg, static border. No hover classes on this element at all.
        The -inset-[1px] glow layer above "wraps" it, so the card border stays put.
      */}
      <div
        className="relative z-10 h-full rounded-2xl overflow-hidden flex flex-col justify-between p-8"
        style={{
          background: "#0b0d14",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Date */}
        <div className="mb-3">
          <p className="text-zinc-600 text-[11px] font-mono tracking-widest uppercase">
            {cert.date}
          </p>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <p className="text-zinc-600 text-[11px] font-mono tracking-widest uppercase mb-3">
            {cert.college}
          </p>
          <h2 className="text-2xl font-bold text-white leading-tight mb-4">
            {cert.event}
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {cert.description}
          </p>
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between pt-5 mt-6 border-t"
          style={{ borderColor: t.divider }}
        >
          <p className={`text-xs font-semibold uppercase tracking-wider ${t.textAccent}`}>
            {cert.place}
          </p>
          {cert.link ? (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-xs font-medium transition-opacity hover:opacity-70 ${t.textAccent}`}
            >
              <Download className="w-4 h-4" /> Download
            </a>
          ) : (
            <span className="text-[11px] text-zinc-700 italic">No cert yet</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Certificates() {
  return (
    <div
      id="certificates"
      className="h-auto text-white py-12 px-6 md:px-14 scroll-mt-20 md:scroll-mt-40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h1 className="text-4xl md:text-5xl font-black text-white leading-none">
              My
              <span className="text-blue-400"> Hackathons.</span>
            </h1>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
              A record of battles fought, ideas shipped, and lessons learned across competitive arenas.
            </p>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-blue-500/40 via-zinc-700 to-transparent" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, i) => (
            <CertificateCard key={i} cert={cert} index={i} />
          ))}
        </div>

      </div>

      <hr className="border-t border-zinc-800 mx-auto w-3/4 md:mt-24 mt-16" />
    </div>
  );
}

export default Certificates;