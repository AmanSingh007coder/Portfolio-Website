
import { motion } from "framer-motion";
import { Download, Award, Calendar} from "lucide-react";

const certificates = [
  {
    college: "R.V College of Engineering",
    event: "Ctrl + Alt + Compete",
    place: "Participants - Team Achievement",
    placeColor: "text-orange-400",
    description:
      "Built a AI-Driven Web application for Hazard Routing using AI model and geo-location.",
    date: "June 2025",
    link: "raahi.pdf",
  },
  {
    college: "Dayananda Sagar Academy",
    event: "CypherQuest",
    place: "Participants - Team Achievement",
    placeColor: "text-orange-400",
    description:
      "Created a decentralized application to reduce Carbon Emissions by LLM Models.",
    date: "April 2025",
    link: "carbon.pdf",
  },
  {
    college: "Dayananda Sagar College of Engineering",
    event: "MakerBlitz",
    place: "Cash Prize - Team Achievement",
    placeColor: "text-green-400",
    description:
      "A Hardware oriented Glider integrated with Avionics systems and Aerodynamics principles.",
    date: "April 2025",
    link: "Hardware.pdf",
  },
  {
    college: "Dayananda Sagar College of Engineering",
    event: "TechTrek",
    place: "Participants - Team Achievement",
    placeColor: "text-orange-400",
    description:
      "Design and Developed a MERN stack web application to Find Pg's nearby.",
    date: "March 2025",
    link: "pg.pdf",
  },
  {
   college: "Dayananda Sagar College of Engineering",
    event: "Bytexync",
    place: "Participants - Team Achievement",
    placeColor: "text-orange-400",
    description:
      "Built a website that helps students to participate and enroll in inter-college events.",
    date: "November 2024",
    link: "bytexync.pdf",
  },

];

function Certificates() {
  return (
    <div id="certificates" className="h-auto text-white py-8 px-6 scroll-mt-20 md:scroll-mt-40">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">
          Hackathon <span className="text-blue-400">Certificates</span>
        </h1>
        <p className="text-gray-400 text-center mb-10">
          Recognition and achievements from various hackathons and coding competitions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="bg-[#0f0f2b] border border-zinc-800 rounded-xl shadow-md hover:shadow-xl transition p-4">
                <div>
                  <h2 className="text-lg font-semibold">{cert.college}</h2>
                  <p className="text-gray-400 text-xs mb-2">{cert.event}</p>

                  <p className={`font-bold flex items-center gap-1 text-sm ${cert.placeColor}`}>
                    <Award className="w-4 h-4" /> {cert.place}
                  </p>

                  <p className="text-gray-300 text-sm mt-2">{cert.description}</p>

                  <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
                    <div className="flex items-center gap-1.5">
                   <Calendar className="w-4 h-4" /> 
                   <span> {cert.date}</span>
                   </div>
                    <a
                      href={cert.link} target="_blank" rel="noopener noreferrer" required
                      className="flex items-center gap-1 text-blue-400"
                    >
                      <Download className="w-4 h-4" /> Download
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <hr className="border-t border-zinc-700 mx-auto w-3/4 md:mt-25 mt-12" />
    </div>
  );
}

export default Certificates;
