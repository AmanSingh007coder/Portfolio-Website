import reactIcon    from "../Assets/react.png";
import jsIcon       from "../Assets/js.png";
import tailwindIcon from "../Assets/tailwind.png";
import htmlIcon     from "../Assets/html.png";
import nodeIcon     from "../Assets/nodejs.png";
import mongoIcon    from "../Assets/mongo.png";
import pythonIcon   from "../Assets/Python.png";
import nextIcon     from "../Assets/next.png";

/* 8 icons only */
const icons = [
  { src: reactIcon,    name: "React"      },
  { src: jsIcon,       name: "JavaScript" },
  { src: tailwindIcon, name: "Tailwind"   },
  { src: htmlIcon,     name: "HTML"       },
  { src: nodeIcon,     name: "Node.js"    },
  { src: mongoIcon,    name: "MongoDB"    },
  { src: pythonIcon,   name: "Python"     },
  { src: nextIcon,     name: "Next.js"    },
];

/* Exactly 2 copies — -50% translateX = one full set = seamless loop */
const looped = [...icons, ...icons];

const IconPill = ({ src, name }) => (
  <div className="
    flex items-center gap-3
    px-5 py-3.5 rounded-2xl
    bg-[#0d0f18] border border-white/[0.06]
    hover:border-blue-500/30
    transition-all duration-300
    shrink-0 group cursor-default
    shadow-[0_2px_12px_rgba(0,0,0,0.4)]
  ">
    <img
      src={src}
      alt={name}
      className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110"
    />
    <span className="text-zinc-500 text-sm font-medium whitespace-nowrap group-hover:text-white transition-colors duration-300">
      {name}
    </span>
  </div>
);

const MarqueeStrip = () => (
  <div className="relative w-full overflow-hidden py-10">

    <style>{`
      @keyframes marquee-reverse {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>

    {/* Fade masks */}
    <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#101016] to-transparent z-10" />
    <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#111123] to-transparent z-10" />

    {/* Single row — right to left, -50% = exactly one set width */}
    <div
      className="flex gap-4 w-max"
      style={{ animation: "marquee-reverse 22s linear infinite" }}
    >
      {looped.map((icon, i) => (
        <IconPill key={i} {...icon} />
      ))}
    </div>

  </div>
);

export default MarqueeStrip;