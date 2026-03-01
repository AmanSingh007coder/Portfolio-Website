import clubImg from "../Assets/clubimg2.jpg";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

// ── Animated counter hook ─────────────────────────────────────────────────────
function useCountUp(target, inView) {
  const motionVal = useMotionValue(0);
  const spring    = useSpring(motionVal, { duration: 1800, bounce: 0 });
  const ref       = useRef(null);

  useEffect(() => {
    if (inView) {
      motionVal.set(0);
      spring.set(target);
    }
  }, [inView, target]);

  return { spring, ref };
}

// ── Single animated stat ──────────────────────────────────────────────────────
function StatNumber({ value, label, inView }) {
  const { spring } = useCountUp(value, inView);
  const display    = useRef(null);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (display.current) {
        display.current.textContent =
          String(Math.floor(v)).padStart(2, "0") + "+";
      }
    });
    return unsub;
  }, [spring]);

  return (
    <div className="flex flex-col gap-1">
      <p
        ref={display}
        className="text-3xl md:text-4xl font-black text-white"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        00+
      </p>
      <p className="text-zinc-500 text-sm">{label}</p>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
const About = () => {
  const statsRef = useRef(null);
  const inView   = useInView(statsRef, { once: false, margin: "-80px" });

  const stats = [
    { value: 10, label: "Projects done"          },
    { value:  1, label: "Year of experience"     },
    { value:  7, label: "Hackathons participated" },
  ];

  return (
    <main
      id="about"
      className="text-white font-Inter mt-12 md:mt-16 px-5 md:px-16"
    >
      {/* Section label */}
      <motion.p
        className="text-[11px] font-mono tracking-[0.3em] text-zinc-600 uppercase mb-3"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: false }} transition={{ duration: 0.6 }}
      >
        — Who I Am
      </motion.p>

      <motion.h2
        className="text-4xl md:text-5xl font-black text-white mb-2 leading-none"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.1 }}
      >
        About <span className="text-blue-400">Me.</span>
      </motion.h2>

      <div className="mt-12 md:mt-14" />

      {/* ── Main layout ── */}
      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">

        {/* LEFT — image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="group relative flex-shrink-0 flex flex-col items-center"
        >
          {/* Border glow wrapper */}
          <div
            className="relative p-[2.5px] rounded-3xl"
            style={{
              background: "linear-gradient(135deg, rgba(59,130,246,0.6), rgba(6,182,212,0.3) 50%, rgba(99,102,241,0.5))",
              boxShadow: "0 0 40px rgba(59,130,246,0.15)",
            }}
          >
            <div className="w-60 h-68 md:w-68 md:h-80 rounded-[1.4rem] overflow-hidden bg-[#080a12]">
              <img
                src={clubImg}
                alt="Genesis Technical Club"
                className="w-full h-full object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <p className="text-[11px] text-zinc-600 font-mono tracking-widest uppercase mt-3">
            Team Genesis — DSCE
          </p>
        </motion.div>

        {/* RIGHT — content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col gap-6"
        >
          <p className="text-zinc-400 text-[15px] md:text-base leading-relaxed">
            Hey! I'm{" "}
            <span className="text-blue-400 font-semibold">Aman Kumar Singh</span>,
            a passionate full-stack web developer dedicated to crafting impactful
            and user-focused digital experiences. What began as curiosity about
            technology's role in solving real-world problems evolved into a solid
            foundation in both front-end and back-end development.
          </p>

          <p className="text-zinc-400 text-[15px] md:text-base leading-relaxed">
            I specialise in the{" "}
            <span className="text-blue-400 font-semibold">MERN Stack</span> —
            MongoDB, Express.js, React, and Node.js — building scalable, fast, and
            visually engaging web apps. I love blending clean UI with powerful logic
            to deliver reliable, intuitive products.
          </p>

          <p className="text-zinc-400 text-[15px] md:text-base leading-relaxed">
            Currently honing my problem-solving skills through{" "}
            <span className="text-blue-400 font-semibold">Data Structures & Algorithms</span>{" "}
            in C++, while staying open to new technologies and innovative collaborations.
          </p>

          {/* ── Stats ── */}
          <div
            ref={statsRef}
            className="grid grid-cols-3 gap-4 mt-2"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-2xl p-4 flex flex-col gap-1"
                style={{
                  background: "#0b0d14",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-4 right-4 h-px"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)",
                  }}
                />
                <StatNumber value={s.value} label={s.label} inView={inView} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <hr className="border-t border-zinc-800 mx-auto w-3/4 mt-14 md:mt-18" />
    </main>
  );
};

export default About;