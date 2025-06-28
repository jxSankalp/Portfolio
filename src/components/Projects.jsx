import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X } from "lucide-react";
import Overlay from "./Overlay";

const projects = [
  {
    id: 1,
    name: "Plinth",
    type: "Group",
    imageSrc: "/images/Plinth.png",
    link: "https://www.plinth.co.in/",
    description: "An website for college festival Plinth.",
    technologies: {
      frontend: "React, TailwindCSS",
    },
  },
  {
    id: 2,
    name: "Portfolio",
    type: "Solo",
    imageSrc: "/images/Portfolio.png",
    link: "https://portfolio-sankalp.vercel.app/",
    description: "Portfolio project showcasing my work.",
    technologies: {
      frontend: "React.js, TailwindCSS",
    },
  },
  {
    id: 3,
    name: "Yoom",
    type: "Solo",
    imageSrc: "/images/image.png",
    link: "https://video-call-bay.vercel.app/",
    description:
      "A social media platform for video calling and meeting scheduling.",
    technologies: {
      frontend: "Next.js, TailwindCSS",
      backend: "Next.js, MongoDB , Clerk , Streamio Sdk",
    },
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const projectsRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (projectsRef.current) {
        const rect = projectsRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const openOverlay = (project) => {
    setSelectedProject(project);
    setIsOverlayVisible(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  const closeOverlay = () => {
    setIsOverlayVisible(false);
    setSelectedProject(null);
    document.body.style.overflow = ""; // Re-enable scrolling
  };

  return (
    <motion.div
      initial={{ y: "150px", opacity: 0 }}
      animate={isInView ? { y: "0", opacity: 1 } : {}}
      exit={{ y: "0", opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      ref={projectsRef}
      className="h-auto w-full bg-white flex flex-col items-center gap-[3rem] relative overflow-hidden "
      id="projects"
    >
      <h2 className="w-full text-center text-[3rem] font-thin mt-8">
        Projects
      </h2>
      <div ref={ref} className="w-[60%] max-w-4xl">
        {projects.map((project) => (
          <div key={project.id}>
            <div
              className="w-full flex justify-between py-[3.5rem] hover:px-4 transition-all duration-300 hover:text-gray-400 cursor-pointer"
              onMouseEnter={() => setActiveProject(project)}
              onMouseLeave={() => setActiveProject(null)}
              onClick={() => openOverlay(project)}
            >
              <div className="text-[3rem] leading-none">{project.name}</div>
              <div className="flex flex-col justify-end">{project.type}</div>
            </div>
            <div className="w-full h-[0.2px] bg-gray-300"></div>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {activeProject && !isOverlayVisible && (
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed pointer-events-none"
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            
              <img
                src={activeProject.imageSrc || "/placeholder.svg"}
                alt={activeProject.name}
                width={300}
                height={300}
                className="rounded-lg shadow-lg cursor-pointer transition-transform duration-200 hover:scale-105"
              />
          </motion.div>
        )}
      </AnimatePresence>
      {(isOverlayVisible || selectedProject) && (
        <>
          <motion.div
            className="fixed inset-0 w-full z-[99] flex items-center justify-center"
            initial="hidden"
            animate={isOverlayVisible ? "visible" : "exit"}
            exit="exit"
          >
            <AnimatePresence mode="wait">
              {selectedProject && <Overlay project={selectedProject} />}
            </AnimatePresence>
          </motion.div>
          {isOverlayVisible && (
            <button
              onClick={closeOverlay}
              className="fixed z-[9999] top-6 right-6 px-4 py-2 text-white text-xl flex flex-row gap-x-2 items-center"
            >
              <X size={32} />
            </button>
          )}
        </>
      )}
    </motion.div>
  );
}
