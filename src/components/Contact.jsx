import { Mail, Linkedin } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <motion.div
      initial={{ y: "150px", opacity: 0 }}
      animate={isInView ? { y: "0", opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-white"
      id="contact"
      style={{
        background:
          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(196,194,255,1) 0%, rgba(254,254,255,1) 30%)",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-gray-700 text-2xl mb-4">Want to collaborate?</h2>

        <h1 className="text-4xl md:text-7xl font-semibold text-gray-900 mb-12">
          Let&apos;s have a chat!
        </h1>

        <div className="flex justify-center gap-4 mb-16">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-gray-400 transition-colors"
          >
            <FaGithub className="w-5 h-5" />
            <span>Github</span>
          </a>
        </div>

        <div ref={ref} className="space-y-2">
          <p className="text-2xl font-mono text-gray-600">SJ</p>
          <p className="text-xl text-gray-600">Sankalp Jain</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
