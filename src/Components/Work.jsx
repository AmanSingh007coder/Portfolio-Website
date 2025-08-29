import { FiExternalLink } from "react-icons/fi";
import img1 from "../Assets/Bizsite.png";
import img2 from "../Assets/rockpaper.png";
import img3 from "../Assets/todo.png";
import img4 from "../Assets/tictac.png";
import img5 from "../Assets/stop.png";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";


const Work = () => {
const projects = [
 
  {
    title: "Bizsite",
    image: img1,
    tags: ["React JS", "Tailwind"],
    externalLink: "https://bizsite-snowy.vercel.app/",
    githublink: "https://github.com/AmanSingh007coder/Bizsite",
  },

    {
     title: "Stone Paper Scissors",
     image: img2 ,
     tags: ["HTML", "CSS", "JS"],
      externalLink: "https://stone-paper-scissors-drab.vercel.app/",
      githublink: "https://github.com/AmanSingh007coder/Stone-Paper-Scissors"
    },

    {
     title: "To-Do-List App",
     image: img3 ,
     tags: ["React JS", "Tailwind"],
     externalLink: "https://to-do-list-app-five-jet.vercel.app/",
      githublink: "https://github.com/AmanSingh007coder/TO-DO-LIST-APP"

    },

    {
     title: "Tic Tac Toe",
     image: img4 ,
     tags: ["HTML", "CSS", "JS"],
      externalLink: "https://tic-tac-toe-alpha-tawny-74.vercel.app/",
      githublink: "https://github.com/AmanSingh007coder/Tic-Tac-Toe"
     
    },

    {
     title: "Stop Watch",
     image: img5 ,
     tags: ["React JS", "Tailwind"],
     externalLink: "https://stop-watch-one-pi.vercel.app/",
      githublink: "https://github.com/AmanSingh007coder/Stop-Watch"

    },

  ];



  return (
    <section id = "projects" className="md:mt-5 md:px-16 px-6 md:py-6 font-Inter space-y-7 mx-4 space-x-6 scroll-mt-20 py-8">
      <h1 className="text-3xl font-bold">My Portfolio Highlights</h1>
     <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-10 gap-5 ">
      {projects.map((project, index) => (
       <motion.div
         key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div
                className="bg-[#0f0f2b] rounded-xl shadow-lg overflow-hidden hover:scale-105 border border-zinc-600 transition-transform">
                {/* image */}
          <img src={project.image} alt={project.title} className="w-full h-50 object-cover transform scale-100" />
          {/* title */}
          <div className="p-4 flex justify-between items-center border-pink-100 ">
            <div className="content ">
            <h2 className="text-lg font-semibold">{project.title}</h2>
            {/* tags */}
            <div className="flex flex-wrap gap-2 my-2 cursor-pointer">
              {project.tags.map((tag, i) => (
               <span
                   key={i}
               className="bg-[#121238] border border-gray-500 text-white px-3 py-1 rounded-lg">
                 {tag}
                  </span>
                  ))}
                 </div>
                 </div>
      
               <div className="flex gap-x-4 border px-2 py-2 rounded-2xl border-zinc-500">
            <a href={project.githublink} target="_blank" rel="noopener noreferrer"> <FiGithub className="mr-1 text-sky-600 cursor-pointer" style={{ fontSize: "20px"}} /></a>
               <a href = "#" target="_blank" rel="noopener noreferrer" className="tags cursor-pointer">
              <a href={project.externalLink} target="_blank" rel="noopener noreferrer"><FiExternalLink className="mr-1 text-sky-600" style={{ fontSize: "20px"}} /></a>
              </a>
              </div>

          </div>
        </div>
        </motion.div>
      ))}
     </div>

     <hr className="border-t border-zinc-700 mx-auto w-3/4 md:mt-25 mt-12" />

    </section>
  )
}


export default Work
