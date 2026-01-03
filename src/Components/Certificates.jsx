import { motion } from "framer-motion";
import { Download, Award, Calendar } from "lucide-react";

const certificates = [
  {
    college: "R.V College of Engineering",
    event: "Ctrl + Alt + Compete",
    place: "Participants - Team Achievement",
    placeColor: "text-orange-400",
    description:
      "Built an AI-Driven Web application for Hazard Routing using AI model and geo-location.",
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
      "A Hardware-oriented Glider integrated with Avionics systems and Aerodynamics principles.",
    date: "April 2025",
    link: "Hardware.pdf",
  },
  {
    college: "Dayananda Sagar College of Engineering",
    event: "TechTrek",
    place: "Participants - Team Achievement",
    placeColor: "text-orange-400",
    description:
      "Designed and developed a MERN stack web application to find PGs nearby.",
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
   {
    college: "DSCE - Point Blank",
    event: "Smart India Hackathon",
    place: "Qualified in Internal Hackathon - Team Achievement",
    placeColor: "text-yellow-400",
    description:
      "AI for Rockfall Detection and Prevention in Mining Regions using LSTM model.",
    date: "Sept 2025",
  },
   {
    college: "Acharya Institute of Technology",
    event: "Tech Habba",
    place: "Participants - Team Achievement",
    placeColor: "text-orange-400",
    description:
      "AI + Blockchain platform that converts YouTube courses into verifiable credentials.",
    date: "Nov 2025",
    link: "techhabba.pdf",
  },
];

function Certificates() {
  return (
    <div
      id="certificates"
      className="h-auto text-white py-6 px-6 scroll-mt-20 md:scroll-mt-40 overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h1
          className="text-4xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hackathon <span className="text-blue-400">Certificates</span>
        </motion.h1>

        <motion.p
          className="text-gray-400 text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Recognition and achievements from various hackathons and coding
          competitions
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80, // alternate left/right slide
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.04 }}
            >
              <div className="relative group bg-[#0f0f2b] border border-zinc-800 rounded-xl shadow-md p-5 transition-all duration-300 overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-400/10 via-teal-500/10 to-green-500/10 blur-2xl rounded-xl"></div>

                {/* Card Content */}
                <div className="relative z-10">
                  <h2 className="text-lg font-semibold">{cert.college}</h2>
                  <p className="text-gray-400 text-xs mb-2">{cert.event}</p>

                  <p
                    className={`font-bold flex items-center gap-1 text-sm ${cert.placeColor}`}
                  >
                    <Award className="w-4 h-4" /> {cert.place}
                  </p>

                  <p className="text-gray-300 text-sm mt-2">
                    {cert.description}
                  </p>

                  <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Download className="w-4 h-4" /> Download
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <hr className="border-t border-zinc-700 mx-auto w-3/4 md:mt-24 mt-12" />
    </div>
  );
}

export default Certificates;
