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
        <div className="flex flex-col justify-start w-1/2 gap-[5vh]">
          <div className="text-5xl font-bold text-gray-900 mb-8">
            Hi, I&apos;m Sankalp.
          </div>
          <img
            ref={ref}
            src={hii}
            className="w-[8rem]"
          />
        </div>

        {/* Right Column - Description */}
        <div className="flex flex-col space-y-8 w-1/2">
          <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed">
            I&apos;m a 17 year-old passionate fullstack web developer dedicated
            to turning ideas into creative solutions. I specialize in creating
            seamless and intuitive user experiences.
          </p>
          <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed">
            I&apos;m involved in every step of the process: from discovery and
            design to development, testing, and deployment. I focus on
            delivering high-quality, scalable results that drive positive user
            experiences.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
