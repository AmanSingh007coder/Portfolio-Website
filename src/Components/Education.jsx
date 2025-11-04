import { Briefcase, MapPin, Calendar } from "lucide-react";

const Education = () => {
     
    const experiences = [
  {
    title: "Full Stack Developer",
    college: "DSCE",
    location: "Bangalore",
    date: "2024 - Present",
    description:
      "Currently pursuing my B.E. in Engineering, with a strong focus on full stack web development and building modern, responsive digital experiences.",
    skills: ["MongoDb", "Express", "NodeJs", "JavaScript", "React", "TailwindCSS"],
  },
  {
    title: "High School | C++",
    college: "Sri Chaitanya P.U College",
    location: "Ballari",
    date: "2022 - 2024",
    description:
      "Studied PCM (Physics, Chemistry, Mathematics) with programming in C++, building a foundation in problem-solving and Object Oriented Programming.",
    skills: ["C++", "OOP", "Data Structures"],
  },
   {
    title: "Primary School | Basics of Computers",
    college: "St Joseph's Boys High School",
    location: "Ballari",
    date: "Till 2021",
    description:
      "Understood the Computer Sceince Field and was fascinated about the principles of how computer works.",
    skills: ["SQL", "Computer Basics"],
  },
];


  return (
     <section id="education" className="md:py-20 text-white md:px-20 px-4 scroll-mt-20 py-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Education <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">& Experience</span>
          </h2>
          <p className="text-gray-400 mt-2">
            My journey through education and professional experiences that
            shaped my expertise in Web development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-gray-700">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ml-10">
              {/* Icon */}
              <div className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-gray-900 border border-blue-400 rounded-full shadow-lg">
                <Briefcase className="text-blue-400" size={20} />
              </div>

              {/* Card */}
              <div className="bg-[#0f0f2b] p-6 rounded-xl shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="flex items-center text-sm text-yellow-400">
                    <Calendar size={16} className="mr-2" />
                    {exp.date}
                  </span>
                </div>
                <p className="text-cyan-400 text-sm flex items-center mb-2">
                  {exp.college}
                  <MapPin size={16} className="ml-2 mr-1" />
                  {exp.location}
                </p>
                <p className="text-gray-300 mb-3">{exp.description}</p>
                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-[#121238] rounded-lg border border-zinc-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

       <hr className="border-t border-zinc-700 mx-auto w-3/4 md:mt-20 mt-14" />

    </section>


  )
}

export default Education;