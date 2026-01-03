import myimg from '../Assets/imgdone.png';
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Download } from "lucide-react";
import gsap from "gsap";
import { motion } from "framer-motion";

function Heroes() {
  const el = useRef(null);

  useEffect(() => {
    // Typed.js setup
    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer.", "React Enthusiast.", "Programmer."],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    // Infinite floating animation (smooth loop)
    gsap.to(".floating-img", {
      y: 30,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Floating blobs animation — infinite and soft drift
    gsap.utils.toArray(".blob").forEach((blob, i) => {
      gsap.to(blob, {
        x: `random(-50, 50)`,
        y: `random(-50, 50)`,
        scale: `random(0.9, 1.2)`,
        duration: `random(8, 14)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 2,
      });
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative flex flex-col-reverse md:flex-row items-center md:justify-between md:h-screen px-6 md:px-30 text-white overflow-hidden space-y-23 scroll-mt-20 mt-20"
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-2xl text-center md:text-left space-y-4 md:space-y-13"
        >
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold"
          >
            Hi, I am<br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-transparent bg-clip-text">
              Aman Kumar Singh.
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold"
          >
            I am a{" "}
            <span
              ref={el}
              className="bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text md:ml-1"
            >
              Frontend Developer
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed py-2 md:py-0 mb-9 md:mb-12"
          >
            I’m passionate about building dynamic and scalable web applications using React, TailwindCSS,
            JavaScript and the MERN stack. I love crafting intuitive user interfaces that blend performance with
            elegant design. Currently, I’m diving deeper into Data Structures and Algorithms to strengthen my
            problem-solving foundation and write more optimized, efficient code.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            viewport={{ once: true }}
            href="Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 
       hover:from-blue-600 hover:to-blue-800 text-white font-bold rounded-full shadow-lg transition"
          >
            Download Resume <Download className="w-5 h-5 inline-block" />
          </motion.a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mt-10 md:mt-0"
        >
          <div className="w-64 h-64 md:w-130 md:h-130 rounded-full border-[6px] md:border-[8px] border-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-green-200 overflow-hidden shadow-[0_0_55px_rgba(0,255,180,0.4)] floating-img p-[3px]">
            <img
              src={myimg}
              alt="Profile"
              className="w-full h-full object-cover rounded-full bg-black"
            />
          </div>
        </motion.div>

        {/* Floating Blobs */}
         <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="blob fixed top-0 right-1/3 w-40 h-50 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="blob fixed top-1/2 left-1/3 w-40 h-50 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="blob fixed bottom-0 left-0 w-40 h-50 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="blob fixed bottom-0 right-0 w-40 h-50 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
      </section>

      <hr className="border-t border-zinc-700 mx-auto w-3/4 md:mt-25" />
    </>
  );
}

export default Heroes;
