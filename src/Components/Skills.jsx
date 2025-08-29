import { FaReact, FaNodeJs, FaCss3Alt, FaJs, FaFigma } from "react-icons/fa";
import react from '../Assets/react.png'
import js from '../Assets/js.png'
import tailwind from '../Assets/tailwind.png'
import html from '../Assets/html.png'
import css from '../Assets/css.png'
import figma from '../Assets/figma.png'
import github from '../Assets/github.png'
import canva from '../Assets/canva.png'
import firebase from '../Assets/firebase.png'


const Skills = () => {

const skills = [
 
  {
    link: "https://react.dev/",
    img: react,
    title: "React",
    description: "A JavaScript library.",
  },

    {
   link: "https://www.w3schools.com/js/",
    img: js,
    title: "JavaScript",
    description: "A programming language.",
    },

    {
   link: "https://tailwindcss.com/",
    img: tailwind,
    title: "Tailwind CSS",
    description: "A Utility-First CSS framework.",
    },

    {
     link: "https://code.visualstudio.com/docs/languages/html",
    img: html,
    title: "HTML",
    description: "A markup language for creating web pages.",
    },

    {
     link: "https://www.w3.org/Style/CSS/Overview.en.html",
     img: css ,
     title: "CSS",
     description: "A style sheet language for a document.",
    },

     {
     link: "https://www.figma.com/",
     img: figma,
     title: "Figma",
     description: "A web-based UI/UX design application.",
    },

     {
     link: "https://www.github.com/",
     img: github,
     title: "GitHub",
     description: "A platform for version control.",
    },

     {
     link: "https://www.canva.com/",
     img: canva,
     title: "Canva",
     description: "A graphic design platform.",
    },

     {
     link: "https://firebase.google.com",
     img: firebase,
     title: "Firebase",
     description: "A platform for user authentication.",
    },

  ];
     

  return (
  
    <section id="skills" className="font-Inter px-10 md:px-20 md:scroll-mt-55 scroll-mt-22">
      <h1 className="text-3xl font-extrabold md:text-4xl md:font-bold">ToolKit I Use</h1>
      <p className="mt-2 text-zinc-300">Discover the powerful and latest technologies that i use to create high performing stand out websites and <br />applications so get through these amazing cool kits</p>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 md:gap-6 gap-3 mt-10 px-2">

         {skills.map((skill, index) => (
           <a key={index} href={skill.link} target="_blank" rel="noopener noreferrer" className="card flex justify-start space-x-4 items-center border border-zinc-600 rounded-lg py-2 px-2">
               <img src={skill.img} alt={skill.title} className="w-13 h-12" />
               <div className="text">
                   <h2 className="font-bold">{skill.title}</h2>
                   <p className="text-zinc-400">{skill.description}</p>
               </div>
           </a>
         ))}
            </div>
      

      <hr className="border-t border-zinc-700 mx-auto w-3/4 md:mt-40 mt-13" />

    </section>
    
  )
}

export default Skills;