import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import hii from "../assets/Images/hii.svg";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {amount: 0.3 });

  return (
    <motion.div
      initial={{ y: "150px", opacity: 0 }}
      animate={isInView ? { y: "0", opacity: 1 } : {}}
      exit={{ y: "0", opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="relative min-h-screen w-full bg-white flex flex-col overflow-hidden mt-[-40vw]"
      id="about"
    >
      <div className="w-full flex justify-center items-center ">
        <div className="w-[60%] flex flex-col text-gray-500 ">
          <div>This is me</div>
          <div className="w-full h-[0.2px] bg-gray-300 "></div>
        </div>
      </div>
      <div className="w-[60%] mx-auto px-1 flex py-20">
        {/* Left Column - Title and CTA */}
        <div className="flex flex-col justify-start w-1/2 gap-[5vh] items-center">
          <div className="text-5xl font-bold text-gray-900 mb-8">
            Hi, I&apos;m Sankalp.
          </div>
          <img ref={ref} src={hii} className="w-[8rem] " />
        </div>

        {/* Right Column - Description */}
        <div className="flex flex-col space-y-8 w-1/2">
          <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed">
            I&apos;m a passionate Full-Stack Web Developer and an aspiring
            Software Engineer, currently in my second year of studies. I enjoy
            building scalable and efficient solutions, and I&apos;m always eager
            to learn and take on real-world challenges to grow my skills and
            make an impact.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
