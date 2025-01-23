import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {amount: 0.3 });

  return (
    <motion.div
      initial={{ y: "200px", opacity: 0 }}
      animate={isInView ? { y: "0", opacity: 1 } : {}}
      exit={{ y: "0", opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="relative min-h-[60vh] w-full bg-white flex flex-col overflow-hidden top-[-40vw]"
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
          <button
            ref={ref}
            className="inline-flex items-center justify-center bg-black text-white px-6 rounded-full text-lg font-medium w-fit hover:bg-gray-800 transition-colors group py-2"
          >
            Get in Touch
            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
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
