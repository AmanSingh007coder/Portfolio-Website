 import myimg from '../Assets/imgdone.png';
 import { useEffect, useRef } from "react";
 import Typed from "typed.js";
 import {Download} from "lucide-react";
import gsap from "gsap";
 
 function Heroes() {

      const el = useRef(null); // Element where animation runs


  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front-End Developer.", "React Enthusiast.", "Programmer."],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,

      
    });
    
    gsap.to(".floating-img", {
     y: 10,
     duration: 2,
     repeat: -1,
     yoyo: true,
     ease: "sine.inOut",
   });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <section id="home" className="relative flex flex-col-reverse md:flex-row items-center md:justify-between md:h-screen px-6 md:px-30 text-white overflow-hidden space-y-17 scroll-mt-20">

      {/* Left Side Content */}
      <div className="max-w-xl text-center md:text-left space-y-4 md:space-y-10">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I am<br />
          <span className="bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text">Aman Kumar Singh</span>
        </h1>
        <h2 className="text-2xl font-semibold ">
          I am a <span ref={el} className="bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text md:ml-1"> Frontend Developer</span>
        </h2>
        <p className="text-gray-300 leading-relaxed py-2 md:py-0">
          I am passionate about building scalable web applications and modern 
          user interfaces using React, TailwindCSS, and JavaScript. I create 
          seamless user experiences and efficient solutions.
        </p>
        <a href="cv.pdf" target="_blank" rel='noopener noreferrer' className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 
       hover:from-blue-600 hover:to-blue-800 text-white font-bold rounded-full shadow-lg transition">
          Download CV <Download className="w-5 h-5 inline-block" />
        </a>
      </div>

      {/* Right Side Image */}
      <div className="relative mt-10 md:mt-0">
        <div className="w-64 h-64 md:w-130 md:h-130 rounded-full border-5 md:border-7 border-blue-400 overflow-hidden shadow-xl floating-img">
          <img
            src={myimg}
            alt="Profile"
            className="w-full h-full object-cover rounded-full transform scale-103"
          />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full -z-10">

        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
      </div>

    </section>
     
    <hr className="border-t border-zinc-700 mx-auto w-3/4 md:mt-25" />
    </>
  );
}

export default Heroes;