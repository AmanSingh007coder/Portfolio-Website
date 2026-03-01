import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const sitemap = [
  { label: "Home",         href: "#home"         },
  { label: "Skills",       href: "#skills"       },
  { label: "Projects",     href: "#projects"     },
  { label: "Academics",    href: "#academics"    },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact",      href: "#contact"      },
];

const socials = [
  { icon: <FiGithub size={15} />,    label: "GitHub",    href: "https://github.com/AmanSingh007coder"              },
  { icon: <FiLinkedin size={15} />,  label: "LinkedIn",  href: "https://www.linkedin.com/in/aman-kumar-singh-be/" },
  { icon: <FaEnvelope size={15} />,  label: "Email",     href: "mailto:amansinghrajput9005@gmail.com"             },
  { icon: <FiInstagram size={15} />, label: "Instagram", href: "https://www.instagram.com/itz_aman_rajput_007/"   },
];

const Footer = () => {
  return (
    <footer className="font-Inter px-6 md:px-16 pt-14 pb-0 text-white">

      {/* ── Top section ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 pb-12 border-b border-white/[0.06]">

        {/* Left — CTA */}
        <motion.div
          className="md:col-span-1 flex flex-col gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-[11px] font-mono tracking-[0.3em] text-zinc-600 uppercase mb-3">
              Open to work
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight text-white">
              Let's Build<br />
              <span className="text-blue-400">Something Great.</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-md leading-relaxed max-w-xs">
            Have a project in mind or just want to connect? I'm always a message away.
          </p>
          <a
            href="#contact"
            className="w-fit flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              boxShadow: "0 4px 18px rgba(59,130,246,0.25)",
            }}
          >
            Get in Touch →
          </a>
        </motion.div>

        {/* Middle — Sitemap */}
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-[11px] font-mono tracking-[0.25em] text-zinc-600 uppercase mb-1">
            Sitemap
          </p>
          {sitemap.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="text-zinc-400 text-md hover:text-white hover:translate-x-1 transition-all duration-200 w-fit"
            >
              {item.label}
            </a>
          ))}
        </motion.div>

        {/* Right — Socials */}
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-[11px] font-mono tracking-[0.25em] text-zinc-600 uppercase mb-1">
            Socials
          </p>
          {socials.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-zinc-400 text-md hover:text-white hover:translate-x-1 transition-all duration-200 w-fit"
            >
              <span className="text-zinc-600">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-yellow-600 text-[11px] font-mono tracking-widest uppercase">
          © {new Date().getFullYear()} Aman Kumar Singh
        </p>

        {/* Catchy one-liner */}
        <p className="text-zinc-700 text-[11px] font-mono tracking-wider text-center">
          Crafted with curiosity and code by{" "}
          <span className="text-purple-400/70">Aman Kumar Singh</span>
          {" "}— turning ideas into interfaces, one commit at a time.
        </p>
      </div>

    </footer>
  );
};

export default Footer;