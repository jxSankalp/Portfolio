import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <motion.div
      initial={{ y: "150px", opacity: 0 }}
      animate={isInView ? { y: "0", opacity: 1 } : {}}
      exit={{ y: "0", opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      ref={ref}
      className="h-auto w-full bg-white flex flex-col items-center gap-[3rem] relative pb-[15rem] -mt-16"
    >
      <h2 className="w-full text-center text-[3rem] font-thin">Skills</h2>
      <div className="w-[60%] max-w-4xl">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h3 className="text-[1.5rem] font-light">Frontend</h3>
            <ul className="flex gap-5 cursor-default">
              <li className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-400 hover:text-white transition-colors">
                React
              </li>
              <li className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-400 hover:text-white transition-colors">
                Tailwind
              </li>
              <li className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-400 hover:text-white transition-colors">
                JavaScript
              </li>
              <li className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-400 hover:text-white transition-colors">
                Next.js
              </li>
              <li className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-400 hover:text-white transition-colors">
                Redux
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <h3 className="text-[1.5rem] font-light">Backend</h3>
            <ul className="flex gap-5 cursor-default">
              <li className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-400 hover:text-white transition-colors">
                Node.js
              </li>
              <li className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-400 hover:text-white transition-colors">
                Express
              </li>
              <li className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-400 hover:text-white transition-colors">
                MongoDB
              </li>
              <li className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-400 hover:text-white transition-colors">
                RESTful APIs
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <h3 className="text-[1.5rem] font-light">Others</h3>
            <ul className="flex gap-5 cursor-default">
              <li className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-400 hover:text-white transition-colors">
                Git
              </li>
              <li className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-400 hover:text-white transition-colors">
                GitHub
              </li>
              <li className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-400 hover:text-white transition-colors">
                VS Code
              </li>
              <li className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-400 hover:text-white transition-colors">
                Netlify
              </li>
              <li className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-400 hover:text-white transition-colors">
                Vercel
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
