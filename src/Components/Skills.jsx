import { FaReact, FaNodeJs, FaCss3Alt, FaJs, FaFigma } from "react-icons/fa";
import react from '../Assets/react.png'
import js from '../Assets/js.png'
import tailwind from '../Assets/tailwind.png'
import html from '../Assets/html.png'
import css from '../Assets/css.png'
import figma from '../Assets/figma.png'
import github from '../Assets/github.png'
import canva from '../Assets/canva.png'
import vs from '../Assets/vs.png'


const Skills = () => {
     

  return (
  
    <section id="skills" className="font-Inter px-10 md:px-20 md:scroll-mt-55 scroll-mt-22">
      <h1 className="text-3xl font-extrabold md:text-4xl md:font-bold">ToolKit I Use</h1>
      <p className="mt-2 text-zinc-300">Discover the powerful and latest technologies that i use to create high performing stand out websites and <br />applications so get through these amazing cool kits</p>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 md:gap-6 gap-3 mt-10 px-2">

        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="card flex justify-start space-x-4 items-center border border-zinc-600 rounded-lg py-2 px-2">
            <img src={react} alt="react" className="w-13 h-11" />
            <div className="text">
            <h2 className="font-bold">React</h2>
            <p className="text-zinc-400">A JavaScript library </p>
            </div>
        </a>

        <a href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer" className="card flex justify-start space-x-4 items-center border border-zinc-600 rounded-lg py-2 px-2">
            <img src={js} alt="JavaScript" className="w-13 h-13" />
            <div className="text">
            <h2 className="font-bold">JavaScript</h2>
            <p className="text-zinc-400">A programming language</p>
            </div>
        </a>

        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="card flex justify-start space-x-4 items-center border border-zinc-600 rounded-lg py-2 px-2">
           <img src={tailwind} alt="Tailwind CSS" className="w-13 h-13" />
            <div className="text">
            <h2 className="font-bold">Tailwind CSS</h2>
            <p className="text-zinc-400">A Utility-First CSS framework</p>
            </div>
        </a>

        <a href="https://code.visualstudio.com/docs/languages/html" target="_blank" rel="noopener noreferrer" className="card flex justify-start space-x-4 items-center border border-zinc-600 rounded-lg py-2 px-2">
           <img src={html} alt="HTML" className="w-13 h-13" />
            <div className="text">
            <h2 className="font-bold">HTML</h2>
            <p className="text-zinc-400">A language for creating web pages</p>
            </div>
        </a>

        <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noopener noreferrer" className="card flex justify-start space-x-4 items-center border border-zinc-600 rounded-lg py-2 px-2">
           <img src={css} alt="CSS" className="w-13 h-13" />
            <div className="text">
            <h2 className="font-bold">CSS</h2>
            <p className="text-zinc-400">A style sheet language for a document</p>
            </div>
        </a>

        <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="card flex justify-start space-x-4 items-center border border-zinc-600 rounded-lg py-2 px-2">
           <img src={figma} alt="Figma" className="w-13 h-13" />
            <div className="text">
            <h2 className="font-bold">Figma</h2>
            <p className="text-zinc-400">A web-based UI/UX design application</p>
            </div>
        </a>

        <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer" className="card flex justify-start space-x-4 items-center border border-zinc-600 rounded-lg py-2 px-2">
            <img src={github} alt="GitHub" className="w-13 h-13" />
            <div className="text">
            <h2 className="font-bold">GitHub</h2>
            <p className="text-zinc-400">A platform for version control</p>
            </div>
        </a>

        <a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer" className="card flex justify-start space-x-4 items-center border border-zinc-600 rounded-lg py-2 px-2">
            <img src={canva} alt="Canva" className="w-13 h-13" />
            <div className="text">
            <h2 className="font-bold">Canva</h2>
            <p className="text-zinc-400">A graphic design platform</p>
            </div>
        </a>

        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="card flex justify-start space-x-4 items-center border border-zinc-600 rounded-lg py-2 px-2">
            <img src={vs} alt="Visual Studio" className="w-13 h-13" />
            <div className="text">
            <h2 className="font-bold">Visual Studio</h2>
            <p className="text-zinc-400">An integrated development environment</p>
            </div>
        </a>

     
      </div>

      <hr className="border-t border-zinc-700 mx-auto w-3/4 md:mt-40 mt-13" />

    </section>
    
  )
}

export default Skills;