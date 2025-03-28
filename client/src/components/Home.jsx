import { TbBrandLinkedinFilled } from "react-icons/tb";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

function Home() {
  const resumeRef = useRef();
  const [isPrinting, setIsPrinting] = useState(false);

  const handleDownloadPDF = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: "My_Resume",
    onBeforePrint: () => setIsPrinting(true),
    onAfterPrint: () => setIsPrinting(false),
  });

  return (
    <div className="bg-[#00E6FF] min-h-screen flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, translateY: "-100%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <h1 className="text-xl md:text-4xl lg:text-7xl font-mono">Hello, I'm Sai Surya</h1>
      </motion.div>
      <h1 className="text-3xl md:text-4xl lg:text-7xl  font-mono pt-3 text-[#FF4081]">
        <Typewriter
          options={{
            strings: ["Front End Developer", "React Developer", "Web Enthusiast", "MERN STACK Developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <div className="py-5">
        <a href="/Resume.pdf" download="SaiSurya_Resume.pdf">
          <button
            onClick={handleDownloadPDF}
            disabled={isPrinting}
            className={`border-2 border-black text-black px-5 py-2 text-2xl cursor-pointer 
            ${isPrinting ? "opacity-50 cursor-not-allowed" : "hover:bg-black hover:text-[#00E6FF]"}`}
          >
          {isPrinting ? "Downloading..." : "Download Resume"}
        </button>
        </a>
      </div>

      <a href="https://www.linkedin.com/in/saisuryadivili/" aria-label="LinkedIn Profile">
        <TbBrandLinkedinFilled className="text-5xl hover:text-[#FF4081]" />
      </a>
    </div>
  );
}

export default Home;
