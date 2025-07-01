import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";




const icons = [
  { icon: <SiMongodb className="text-green-500" />, angle: -10 },
  { icon: <SiExpress className="text-gray-500" />, angle: 45 },
  { icon: <FaReact className="text-blue-500" />, angle: 90 },
  { icon: <FaNodeJs className="text-green-600" />, angle: 145 },
  { icon: <AiOutlinePython  className="text-yellow-400" />, angle: 180 },
  { icon: <SiMysql   className="text-blue-500" />, angle: 240 },
  { icon: <FaGithub   className="text-black" />, angle: 290 },
];

export default function AboutImage() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 5);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-40 h-40">
        <div className="absolute border-4 border-[#FF4081] top-1/2 left-1/2 w-30 h-30 lg:w-60 lg:h-60 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <h6 className="text-sm md:text-2xl font-bold text-center">Full Stack <br /> Web Development</h6>
        </div>
        {icons.map((item, index) => {
          const angle = ((item.angle + rotation) * Math.PI) / 180;
          const x = Math.cos(angle) * 180;
          const y = Math.sin(angle) * 180;
          return (
            <motion.div
              key={index}
              className="absolute text-2xl md:text-6xl"
              animate={{ x, y }}
              transition={{ type: "tween", duration: 0.9 }}
              style={{ left: "40%", top: "40%", transform: "translate(-50%, -50%)" }}
            >
              {item.icon}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
