import { motion } from "framer-motion";

const skills = {
  frontend: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 80 },
    { name: "Bootstrap", level: 80 },
    { name: "React", level: 70 },
    { name: "JavaScript", level: 70 },
    { name: "Tailwind CSS", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 70 },
    { name: "MongoDB", level: 70 },
    { name: "Python", level: 65 },
    { name: "MySQL", level: 60 },
    { name: "GIT Hub", level: 65 },
  ],
};

export default function SkillsBar() {
  return (
    <div className="bg-[#00E6FF] min-h-[200vh]">
      <div className="py-10">
        <h1 className="text-3xl md:text-5xl font-sans pb-2 px-10">My Skills</h1>
        <div className="border-2 border-dashed"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-20 px-10">
        {Object.entries(skills).map(([category, skillList], i) => (
          <div key={i} className="w-full">
            <h3 className="text-lg md:text-2xl underline underline-offset-4 font-semibold mb-2 capitalize text-center">{category}</h3>
            <div className="space-y-4">
              {skillList.map((skill, index) => (
                <div key={index} className="w-full">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm md:text-lg font-medium">{skill.name}</span>
                    {/* <span className="text-sm font-medium">{skill.level}%</span> */}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-[#FF4081] rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}