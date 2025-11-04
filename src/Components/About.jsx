
const About = () => {

  return (
    
    <main id = "about" className="text-white font-Inter mt-15  md:mt-20 md:scroll-mt-73 scroll-mt-48">
      <p className="text-md font-bold text-center mb-6 ">About Me
         <span class="block h-[3px] w-16 mx-auto mt-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></span>
      </p>
      <div className="text-md flex flex-col justify-center items-center">
        <p className="mx-5 md:max-w-6xl p-6 bg-[#0c0c27] rounded-lg text-zinc-300">
    Welcome! I’m Aman, a passionate full-stack web developer with a deep enthusiasm for creating impactful and user-centered digital experiences. What started as a curiosity about how technology connects people and solves real-world problems has evolved into a strong technical foundation in both front-end and back-end development.

    I specialize in the MERN stack — MongoDB, Express.js, React, and Node.js — building scalable, efficient, and visually engaging web applications. I enjoy blending clean design with powerful functionality to bring ideas to life, ensuring every project I work on is intuitive, fast, and reliable.

    Currently, I’m sharpening my problem-solving skills by learning Data Structures and Algorithms in C++, aiming to write more optimized and efficient code. I’m always eager to explore new technologies, collaborate on innovative projects, and push the boundaries of what’s possible with modern web development.

        <div className="mt-8 flex flex-wrap gap-12">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold">
                10<span className="text-cyan-500">+</span>
              </div>
              <div className="text-sm text-neutral-400">Projects done</div>
            </div>

            <div>
              <div className="text-3xl md:text-4xl font-extrabold">
                01<span className="text-cyan-500">+</span>
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