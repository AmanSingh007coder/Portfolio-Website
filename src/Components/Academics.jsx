import { motion } from "framer-motion";
import learningImg from "../Assets/ed.png";
import genesisImg from "../Assets/clubimg2.jpg";

const semesters = [
  { title: "Semester 1", gpa: "9.8"         },
  { title: "Semester 2", gpa: "9.95"        },
  { title: "Semester 3", gpa: "In Progress" },
];

const languages = [
  { lang: "English", level: "Proficient", color: "#4ade80" },
  { lang: "Hindi",   level: "Proficient", color: "#4ade80" },
  { lang: "Kannada", level: "Medium",     color: "#facc15" },
];

const floatVariants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

const Academics = () => {
  return (
    <>
      <section
        id="academics"
        className="md:px-16 px-6 text-white overflow-hidden scroll-mt-20"
      >
        {/* Heading */}
        <motion.p
          className="text-[11px] font-mono tracking-[0.3em] text-zinc-600 uppercase mb-3"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: false }} transition={{ duration: 0.6 }}
        >
          — Education & Involvement
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-black text-white mb-2 leading-none"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          Academics & <span className="text-blue-400">Extra-Curricular</span>
        </motion.h2>

        <motion.p
          className="text-zinc-500 text-sm"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          Academic performance, technical team involvement, and language proficiency.
        </motion.p>

        <div className="mt-14 md:mt-16" />

        {/* ── Two-column layout ── */}
        <div className="flex flex-col md:flex-row items-start gap-14 md:gap-16">

          {/* LEFT — Illustration */}
          <motion.div
            className="w-full md:w-[34%] flex items-start justify-center md:sticky md:top-28"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src={learningImg}
              alt="Learning illustration"
              variants={floatVariants}
              animate="animate"
              className="w-[80%] md:w-[85%] drop-shadow-[0_0_24px_rgba(59,130,246,0.12)]"
            />
          </motion.div>

          {/* RIGHT — Content */}
          <div className="w-full md:w-[66%] flex flex-col gap-9">

            {/* ── GPA Cards — 3 col, this sets the reference width ── */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[11px] font-mono tracking-[0.25em] text-zinc-600 uppercase mb-4">
                Academic Performance
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {semesters.map((item, i) => {
                  const isOngoing = item.gpa === "In Progress";
                  const accent = isOngoing ? "#facc15" : "#4ade80";
                  return (
                    <motion.div
                      key={i}
                      className="group relative overflow-hidden rounded-xl p-5 flex flex-col gap-3"
                      style={{
                        background: "#0b0d14",
                        border: "1px solid rgba(255,255,255,0.05)",
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      <div
                        className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background: `linear-gradient(135deg, ${accent}99 0%, transparent 40%, transparent 60%, ${accent}88 100%)`,
                          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",
                          padding: "1px",
                        }}
                      />
                      <div
                        className="absolute top-0 left-4 right-4 h-px"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${accent}70, transparent)`,
                        }}
                      />
                      <p className="relative text-zinc-500 text-[11px] font-mono tracking-widest uppercase">
                        {item.title}
                      </p>
                      <p
                        className="relative text-2xl font-black leading-none"
                        style={{ color: accent }}
                      >
                        {item.gpa}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* ── Genesis + Languages — exactly 2 cols, same width as GPA row ── */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-3 items-stretch"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {/* Genesis Card */}
              <div
                className="group relative overflow-hidden rounded-2xl"
                style={{
                  background: "#0b0d14",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                  style={{
                    background: "linear-gradient(160deg, rgba(251,146,60,0.9) 0%, transparent 40%, transparent 60%, rgba(239,68,68,0.8) 100%)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "1px",
                  }}
                />
                <div className="relative z-10 flex flex-col items-center text-center p-5 gap-3 h-full">
                  {/* Circular photo */}
                  <div
                    className="w-16 h-16 rounded-full overflow-hidden border-2 shrink-0"
                    style={{
                      borderColor: "rgba(251,146,60,0.4)",
                      boxShadow: "0 0 14px rgba(251,146,60,0.15)",
                    }}
                  >
                    <img
                      src={genesisImg}
                      alt="Genesis"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-sm font-bold text-white leading-snug">
                      <span className="text-red-400">Genesis</span> Club
                    </h3>
                    <p className="text-orange-400 text-xs font-medium mt-0.5">
                      Tech Member
                    </p>
                  </div>

                  <div className="w-full h-px" style={{ background: "rgba(255,255,255,0.05)" }} />

                  <div className="w-full text-left flex flex-col gap-1.5 flex-1">
                    <p className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase">
                      Technical Team — DSCE
                    </p>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      Collaborating on projects, events & automation initiatives.
                    </p>
                  </div>

                  <div
                    className="w-full flex items-center gap-2 pt-2 border-t"
                    style={{ borderColor: "rgba(255,255,255,0.04)" }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-[10px] font-mono tracking-widest uppercase">
                      Currently Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Languages Card */}
              <div
                className="group relative overflow-hidden rounded-2xl"
                style={{
                  background: "#0b0d14",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(96,165,250,0.9) 0%, transparent 40%, transparent 60%, rgba(56,189,248,0.8) 100%)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "1px",
                  }}
                />
                <div className="relative z-10 p-5 flex flex-col justify-between h-full gap-4">
                  <p className="text-[11px] font-mono tracking-[0.25em] text-zinc-600 uppercase">
                    Languages Known
                  </p>

                  <div className="flex flex-col gap-4 flex-1 justify-center">
                    {languages.map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-white text-sm font-medium">{item.lang}</span>
                        <span
                          className="text-xs font-mono px-2.5 py-0.5 rounded-full"
                          style={{
                            color: item.color,
                            background: `${item.color}14`,
                            border: `1px solid ${item.color}33`,
                          }}
                        >
                          {item.level}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="h-px w-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, rgba(96,165,250,0.3), transparent)",
                    }}
                  />
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      <hr className="border-t border-zinc-800 mx-auto w-3/4 md:mt-20 mt-14" />
    </>
  );
};

export default Academics;