import myimg from '../Assets/imgdone.png';
import react from '../Assets/react.png';
import js from '../Assets/js.png';
import tailwind from '../Assets/tailwind.png';
import html from '../Assets/html.png';
import css from '../Assets/css.png';
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Download } from "lucide-react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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


    return () => {
      typed.destroy();
    };
  }, []);

  const techIcons = [
    { img: react, name: 'React' },
    { img: js, name: 'JavaScript' },
    { img: tailwind, name: 'Tailwind' },
    { img: html, name: 'HTML' },
    { img: css, name: 'CSS' },
  ];

  const contactInfo = [
    {
      icon: <FaLinkedin className="text-blue-400 text-2xl rounded-lg" />,
      label: "LinkedIn",
      value: "Aman kumar Singh",
      href: "https://www.linkedin.com/in/aman-kumar-singh-be/",
    },
    {
      icon: <FaGithub className="text-gray-300 text-2xl rounded-lg" />,
      label: "GitHub",
      value: "My github profile",
      href: "https://github.com/AmanSingh007coder",
    },
    {
      icon: <MdEmail className="text-cyan-400 text-2xl rounded-lg" />,
      label: "Email",
      value: "e-mail me",
      href: "mailto:amansinghrajput9005@gmail.com",
    },
    {
      icon: <FaInstagram className="text-pink-400 text-2xl rounded-lg" />,
      label: "Instagram",
      value: "My Instagram profile",
      href: "https://www.instagram.com/itz_aman_rajput_007/",
    },
  ];

  return (
    <>
      <section
        id="home"
        className="relative flex flex-col-reverse md:flex-row items-center md:justify-between md:h-screen px-7 md:px-30 text-white space-y-10 md:space-y-6 scroll-mt-20 md:mt-20 pt-36 md:pt-0"
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-2xl text-center md:text-left space-y-4 md:space-y-6"
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
            className="text-gray-300 leading-relaxed py-2 md:py-0"
          >
            I'm passionate about building dynamic and scalable web applications using React, TailwindCSS,
            JavaScript and the MERN stack. I love crafting intuitive user interfaces that blend performance with
            elegant design. Currently, I'm diving deeper into Data Structures and Algorithms to strengthen my
            problem-solving foundation and write more optimized, efficient code.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed py-2 md:py-0"
          >
            My goal is to create seamless digital experiences that not only look great but also provide exceptional functionality and user satisfaction. I'm constantly learning new technologies and best practices to stay at the forefront of modern web development.
          </motion.p>

          {/* Contact Info - Icons Only */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start gap-15 py-3"
          >
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-2xl hover:scale-125 transition-transform duration-300"
                title={item.label}
              >
                {item.icon}
              </a>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center md:justify-start pt-2"
          >
            <a
              href="Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-700 
                hover:from-blue-600 hover:to-blue-800 text-white font-bold rounded-full shadow-lg transition"
            >
              Download Resume <Download className="w-5 h-5" />
            </a>

            <a
              href="#projects"
              className="flex items-center gap-2 px-10 py-3 border-2 border-blue-500 text-blue-400 font-bold rounded-full 
                hover:bg-blue-500/10 hover:text-white hover:border-cyan-400 transition duration-300"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image with Orbiting Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mb-10 md:-mt-8 lg:-mt-16 flex items-center justify-center"
        >
          {/* Orbit Container */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Outer glow effect */}
            <div className="absolute w-56 h-56 md:w-[420px] md:h-[420px] lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-r from-blue-500/20 via-cyan-500/10 to-transparent blur-2xl"></div>
            
            {/* Orbiting Icons */}
            {techIcons.map((icon, index) => {
              const angle = (index / techIcons.length) * 360;
              const radius = 'md:140px lg:240px';
              return (
                <motion.div
                  key={index}
                  className={`absolute w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 ${radius}`}
                  style={{
                    transform: `rotate(${angle}deg) translateY(-140px)`,
                  }}
                  animate={{
                    rotate: [angle, angle + 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, -360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <motion.img
                      src={icon.img}
                      alt={icon.name}
                      className="w-8 md:w-12 lg:w-16 h-8 md:h-12 lg:h-16 object-contain drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.9)] transition-all"
                      whileHover={{ scale: 1.2 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Profile Photo */}
          <div className="w-48 h-48 md:w-72 md:h-72 lg:w-[420px] lg:h-[420px] rounded-full border-[6px] md:border-[8px] border-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-green-200 overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.4)] md:shadow-[0_0_50px_rgba(59,130,246,0.5)] lg:shadow-[0_0_80px_rgba(59,130,246,0.6)] floating-img p-[3px] relative z-10">
            <img
              src={myimg}
              alt="Profile"
              className="w-full h-full object-cover rounded-full bg-black"
            />
          </div>
        </motion.div>


      </section>
    </>
  );
}

export default Heroes;