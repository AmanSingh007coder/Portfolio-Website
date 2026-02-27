import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiGithub, FiLinkedin, FiInstagram, FiSend, FiLogOut } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { auth, googleProvider } from "../Firebase.js";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

const socials = [
  {
    icon: <FiGithub size={17} />,
    label: "GitHub",
    sub: "AmanSingh007coder",
    href: "https://github.com/AmanSingh007coder",
    iconColor: "#e2e8f0",
    borderHover: "hover:border-slate-400/40",
    textHover: "hover:text-slate-200",
    bg: "rgba(226,232,240,0.06)",
  },
  {
    icon: <FiLinkedin size={17} />,
    label: "LinkedIn",
    sub: "aman-kumar-singh-be",
    href: "https://www.linkedin.com/in/aman-kumar-singh-be/",
    iconColor: "#60a5fa",
    borderHover: "hover:border-blue-400/40",
    textHover: "hover:text-blue-400",
    bg: "rgba(96,165,250,0.06)",
  },
  {
    icon: <FaEnvelope size={17} />,
    label: "Email",
    sub: "amansinghrajput9005@gmail.com",
    href: "mailto:amansinghrajput9005@gmail.com",
    iconColor: "#fb923c",
    borderHover: "hover:border-orange-400/40",
    textHover: "hover:text-orange-400",
    bg: "rgba(251,146,60,0.06)",
  },
  {
    icon: <FiInstagram size={17} />,
    label: "Instagram",
    sub: "@itz_aman_rajput_007",
    href: "https://www.instagram.com/itz_aman_rajput_007/",
    iconColor: "#f472b6",
    borderHover: "hover:border-pink-400/40",
    textHover: "hover:text-pink-400",
    bg: "rgba(244,114,182,0.06)",
  },
];

const Contact = () => {
  const [user, setUser] = useState(null);
  const [sending, setSending] = useState(false);
  const form = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e) {
      alert(e.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!user) return;
    setSending(true);
    emailjs
      .sendForm("service_4jjynif", "template_agsdpjr", form.current, "jILyT651QttXA7XEY")
      .then(
        () => { setSending(false); navigate("/Success"); },
        () => { setSending(false); alert("Failed. Try again."); }
      );
  };

  return (
    <section
      id="contact"
      className="font-Inter px-6 md:px-16 md:scroll-mt-55 scroll-mt-20 py-12 text-white"
    >
      {/* Label */}
      <motion.p
        className="text-[12px] font-mono tracking-[0.3em] text-zinc-600 uppercase mb-3"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: false }} transition={{ duration: 0.6 }}
      >
        — Get In Touch
      </motion.p>

      <motion.h2
        className="text-4xl md:text-5xl font-black text-white mb-2 leading-none"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.1 }}
      >
        Let's <span className="text-blue-400">Work Together.</span>
      </motion.h2>

      <div className="mt-12 md:mt-14" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

        {/* ── LEFT ── */}
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to collaborate. Whether you have a question, want to
            work together, or just want to say hello — reach out and I'll get
            back to you as soon as possible.
          </p>

          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-mono tracking-[0.25em] text-zinc-600 uppercase mb-1">
              Find me on
            </p>
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 px-4 py-4 rounded-2xl border border-white/[0.07] transition-all duration-250 ${s.borderHover}`}
                style={{ background: "#0b0d14" }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ x: 4 }}
              >
                {/* Colored icon box */}
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200"
                  style={{
                    background: s.bg,
                    border: `1px solid ${s.iconColor}22`,
                    color: s.iconColor,
                  }}
                >
                  {s.icon}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className={`text-zinc-300 text-md font-semibold leading-none mb-0.5 transition-colors duration-200 ${s.textHover}`}>
                    {s.label}
                  </span>
                  <span className="text-zinc-600 text-[14px] font-mono truncate">{s.sub}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT — Form card ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          {/* Card border — always visible, blue tint */}
          <div
            className="absolute -inset-[1px] rounded-2xl pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.5) 0%, rgba(56,189,248,0.15) 40%, rgba(56,189,248,0.15) 60%, rgba(99,102,241,0.4) 100%)",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              padding: "1px",
            }}
          />

          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ background: "#0b0d14" }}
          >
            {/* Top color bar */}
            <div
              className="h-1 w-full"
              style={{
                background: "linear-gradient(90deg, #3b82f6, #06b6d4, #6366f1)",
              }}
            />

            <div className="p-6 md:p-8">
              <AnimatePresence mode="wait">
                {!user ? (
                  /* ── Sign-in state ── */
                  <motion.div
                    key="signin"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col items-center gap-6 py-10 text-center"
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.1))",
                        border: "1px solid rgba(59,130,246,0.25)",
                      }}
                    >
                      <FiSend size={24} className="text-blue-400" />
                    </div>

                    <div>
                      <p className="text-white font-bold text-lg mb-1">
                        Send me a message
                      </p>
                      <p className="text-zinc-500 text-xs leading-relaxed max-w-xs">
                        Sign in with Google to unlock the contact form. Your email
                        will be auto-filled so I know who I'm replying to.
                      </p>
                    </div>

                    <button
                      onClick={handleGoogleSignIn}
                      className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-100 transition-colors w-full justify-center shadow-lg"
                    >
                      <FcGoogle size={20} /> Continue with Google
                    </button>
                  </motion.div>

                ) : (
                  /* ── Form state ── */
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col gap-5"
                  >
                    {/* User info row */}
                    <div
                      className="flex items-center gap-3 p-3 rounded-xl"
                      style={{
                        background: "rgba(74,222,128,0.05)",
                        border: "1px solid rgba(74,222,128,0.15)",
                      }}
                    >
                      {user.photoURL && (
                        <img
                          src={user.photoURL}
                          alt="avatar"
                          className="w-8 h-8 rounded-full ring-2 ring-green-500/30"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-green-400 text-xs font-semibold leading-none mb-0.5">
                          Signed in
                        </p>
                        <p className="text-zinc-400 text-[11px] font-mono truncate">
                          {user.displayName || user.email}
                        </p>
                      </div>
                      {/* Sign out button — clearly visible */}
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold text-red-400 border border-red-500/25 bg-red-500/10 hover:bg-red-500/20 hover:border-red-400/40 transition-all duration-200 shrink-0"
                      >
                        <FiLogOut size={12} />
                        Sign out
                      </button>
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">

                      {/* Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
                            Name
                          </label>
                          <input
                            type="text"
                            name="from_name"
                            placeholder="Your name"
                            defaultValue={user.displayName || ""}
                            required
                            className="px-3 py-2.5 rounded-xl text-sm text-white placeholder-zinc-700 outline-none transition focus:ring-1 focus:ring-blue-500/60"
                            style={{
                              background: "#080a12",
                              border: "1px solid rgba(255,255,255,0.08)",
                            }}
                            onFocus={e => e.target.style.borderColor = "rgba(59,130,246,0.5)"}
                            onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
                            Email
                          </label>
                          <input
                            type="email"
                            name="from_email"
                            defaultValue={user.email}
                            readOnly
                            className="px-3 py-2.5 rounded-xl text-sm text-zinc-600 outline-none cursor-not-allowed"
                            style={{
                              background: "#080a12",
                              border: "1px solid rgba(255,255,255,0.04)",
                            }}
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
                          Message
                        </label>
                        <textarea
                          name="message"
                          placeholder="Tell me about your project or idea..."
                          rows={5}
                          required
                          className="px-3 py-2.5 rounded-xl text-sm text-white placeholder-zinc-700 outline-none resize-none w-full transition"
                          style={{
                            background: "#080a12",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}
                          onFocus={e => e.target.style.borderColor = "rgba(59,130,246,0.5)"}
                          onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={sending}
                        className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white transition-all disabled:opacity-60 hover:brightness-110"
                        style={{
                          background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
                          boxShadow: "0 4px 20px rgba(59,130,246,0.25)",
                        }}
                      >
                        <FiSend size={15} />
                        {sending ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      <hr className="border-t border-zinc-800 mx-auto w-3/4 md:mt-24 mt-16" />
    </section>
  );
};

export default Contact;