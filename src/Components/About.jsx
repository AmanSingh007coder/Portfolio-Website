import clubImg from "../Assets/clubimg2.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main
      id="about"
      className="text-white font-Inter mt-12 md:mt-16 px-5 md:px-16"
    >
      {/* Heading */}
      <p className="text-md font-bold text-center mb-6 md:mb-8">
        About Me
        <span className="block h-[3px] w-16 mx-auto mt-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></span>
      </p>

      {/* Main Flex Layout */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-25 bg-[#0f0f2b] px-6 py-8 md:px-12 md:py-10 rounded-2xl shadow-[0_0_25px_-5px_rgba(0,0,0,0.4)]">

        {/* Left Image with Gradient Border */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group flex-shrink-0"
        >
          <div className="relative w-64 h-72 md:w-72 md:h-80 p-[3px] rounded-[1.75rem] bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_45px_-5px_rgba(147,51,234,0.6)] transition-all duration-500">
            <div className="w-full h-full bg-[#0c0c27] rounded-[1.5rem] overflow-hidden">
              <img
                src={clubImg}
                alt="Technical Club"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 clip-custom-shape opacity-95"
              />
            </div>
          </div>
          <p className="text-sm text-zinc-400 text-center mt-2 italic">
            Team Genesis — Technical Team
          </p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl leading-relaxed flex-1"
        >
          <p className="text-zinc-300 text-[15px] md:text-base">
            Welcome! I’m <span className="text-cyan-400 font-semibold">Aman</span>, 
            a passionate full-stack web developer dedicated to crafting impactful 
            and user-focused digital experiences. What began as curiosity about 
            technology’s role in solving real-world problems evolved into a solid 
            foundation in both front-end and back-end development.
            <br /><br />
            I specialize in the <span className="text-cyan-400 font-semibold">MERN Stack</span> — 
            MongoDB, Express.js, React, and Node.js — creating scalable, fast, and 
            visually engaging web apps. I love blending clean UI with powerful 
            logic to deliver reliable, intuitive products.
            <br /><br />
            Currently, I’m honing my problem-solving skills by learning 
            <span className="text-cyan-400 font-semibold"> Data Structures & Algorithms </span> 
            in C++, while staying open to new technologies and innovative collaborations.
          </p>

          {/* Stats */}
          <div className="mt-7 md:mt-8 flex flex-wrap gap-10 md:gap-12">
            <div>
              <div className="text-2xl md:text-4xl font-extrabold">
                10<span className="text-cyan-500">+</span>
              </div>
              <div className="text-sm text-neutral-400">Projects done</div>
            </div>

            <div>
              <div className="text-2xl md:text-4xl font-extrabold">
                01<span className="text-cyan-500">+</span>
              </div>
              <div className="text-sm text-neutral-400">Years of experience</div>
            </div>

            <div>
              <div className="text-2xl md:text-4xl font-extrabold">
                05<span className="text-cyan-500">+</span>
              </div>
              <div className="text-sm text-neutral-400">Hackathons Participated</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <hr className="border-t border-zinc-700 mx-auto w-3/4 mt-14 md:mt-18" />

      {/* Floating Glow Blob */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0.25 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.35, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-0 w-80 md:w-96 h-80 md:h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none"
      />
    </main>
  );
};

export default About;
