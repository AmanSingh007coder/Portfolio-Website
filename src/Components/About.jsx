
const About = () => {

  return (
    
    <main id = "about" className="text-white font-Inter mt-15  md:mt-20 md:scroll-mt-73 scroll-mt-48">
      <p className="text-md font-bold text-center mb-6 ">About Me
         <span class="block h-[3px] w-16 mx-auto mt-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></span>
      </p>
      <div className="text-md flex flex-col justify-center items-center">
        <p className="mx-5 md:max-w-6xl p-6 bg-[#0c0c27] rounded-lg text-zinc-300">
           Welcome! I’m Aman, a passionate web developer with a strong drive for building impactful digital experiences. From the very beginning of my journey, I’ve been fascinated by the way technology can connect people, solve problems, and transform ideas into reality. Over time, I honed my skills in front-end development, ensuring I can deliver websites and applications that are not only visually appealing but also fast, responsive, and reliable.
I specialize in React, Tailwind CSS, and modern JavaScript frameworks, which allow me to craft sleek and intuitive user interfaces.
        <div className="mt-8 flex flex-wrap gap-12">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold">
                10<span className="text-sky-500">+</span>
              </div>
              <div className="text-sm text-neutral-400">Projects done</div>
            </div>

            <div>
              <div className="text-3xl md:text-4xl font-extrabold">
                01<span className="text-sky-500">+</span>
              </div>
              <div className="text-sm text-neutral-400">Years of experience</div>
            </div>
          </div>
        </p>

      </div>
       <hr className="border-t border-zinc-700 mx-auto w-3/4 md:mt-30 mt-23" />
    </main>

   
    
  )
}

export default About;