import { motion } from "framer-motion";
import mern1 from '/mern-stack1.jpg'
import mern2 from '/mern-stack2.jpg'
import mern3 from '/mern-stack3.png'
import AboutImage from "./aboutImg";

function About() {

  return (
    <div className="bg-[#00E6FF] lg:min-h-[150vh] xl-min-h-screen ">
      <div className="py-10">
        <h1 className="text-3xl md:text-6xl font-sans pb-2 px-16 md:px-10">About Me</h1>
        <div className="border-2 border-dashed"></div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 justify-center items-center">
        <motion.div
          initial={{ opacity: 0, translateY: "-30%" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="py-5 px-8 lg:px-10 h-auto w-[350px] md:w-[700px] lg:w-[800px] xl:w-[700px] ">
            <h1 className="text-[16px] md:text-2xl font-serif font-semibold">Front end Developer</h1>
            <div className="border-2 border-dashed"></div>
            <p className="text-sm md:text-xl py-3 font-serif font-light text-justify">Front-end developer with 2 years of experience crafting responsive web applications in the banking and real estate industries. Skilled in CSS, JavaScript and modern frameworks, with a strong foundation in UX design and user behavior analysis. Adept at optimizing website performance and enhancing user engagement. Successfully improved an existing website’s conversion rate by 80% through refined code and intuitive design. Passionate about building seamless digital experiences that drive business growth.</p>
          </div>
          <div className="py-2 px-8 lg:px-10 h-auto w-[300px] md:w-[700px] lg:w-[800px] xl:w-[700px]">
            <h1 className="text-2xl font-serif font-semibold">Personal Information</h1>
            <div className="border-2 border-dashed"></div>
            <ul className="py-5 space-y-2">
              <li className="text-[10px] md:text-xl font-serif">
                <span className="font-bold underline decoration-[#FF4081]">Name:</span>
                <span className="font-bold px-3"> Sai Surya Satyanarayana Divili</span>
              </li>
              <li className="text-[10px] md:text-xl font-serif">
                <span className="font-bold underline decoration-[#FF4081]">Address:</span>
                <span className="font-bold px-3 ">Hyderabad</span>
              </li>
              <li className="text-[10px] md:text-xl font-serif">
                <span className="font-bold underline decoration-[#FF4081]">Email:</span>
                <span className="font-bold px-3">saisuryadivili@gmail.com</span>
              </li>
              <li className="text-[10px] md:text-xl font-serif">
                <span className="font-bold underline underline-offset-4 decoration-[#FF4081]">Contact No:</span>
                <span className="font-bold px-3">+91 7382481726</span>
              </li>
            </ul>
          </div>
        </motion.div>


        <div className="p-2 lg:p-10 lg:flex flex-col justify-center items-center hidden">
          <AboutImage />
        </div>
        <div className="p-10 flex flex-col justify-center items-center lg:hidden">
          <img src={mern3} alt={mern1} className="w-full" />
        </div>
      </div>
    </div>
  )
}

export default About