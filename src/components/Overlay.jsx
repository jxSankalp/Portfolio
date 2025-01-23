import { motion } from "framer-motion";
import PropTypes from "prop-types";

function Overlay({ project }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black overflow-hidden"
      initial={{
        y: "100%",
        borderTopLeftRadius: "50%",
        borderTopRightRadius: "50%",
      }}
      animate={{
        y: "0%",
        borderTopLeftRadius: "0%",
        borderTopRightRadius: "0%",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute inset-0 overflow-y-auto"
        style={{ scrollbarWidth: "none" }}
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="min-h-screen text-white">
          {/* Header Section */}
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex justify-between items-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-6xl font-bold hover:text-gray-300 transition-colors"
              >
                {project.name}
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <h2 className="text-gray-500 uppercase text-lg mb-4 leading-none">
                  DESCRIPTION
                </h2>
                <div className="w-[80%] h-[0.2px] bg-gray-500"></div>
                <p className="text-gray-300 text-lg pt-3">
                  {project.description || "No description available."}
                </p>
              </div>

              <div>
                <h2 className="text-gray-500 uppercase text-lg mb-4 leading-none">
                  TECHNOLOGIES
                </h2>
                <div className="w-[80%] h-[0.2px] bg-gray-500"></div>
                <div className="space-y-2 pt-3">
                  <p className="text-gray-300">
                    <span className="text-gray-500">Frontend:</span>{" "}
                    {project.technologies?.frontend || "N/A"}
                  </p>
                  <p className="text-gray-300">
                    <span className="text-gray-500">Backend:</span>{" "}
                    {project.technologies?.backend || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Image */}
          <div className="w-full bg-black">
            <div className="w-full flex justify-center items-center p-8">
              <img
                src={project.imageSrc || "/placeholder.svg"}
                alt={project.name}
                className="w-full max-w-6xl rounded-2xl border border-gray-800"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

Overlay.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    technologies: PropTypes.shape({
      frontend: PropTypes.string,
      backend: PropTypes.string,
    }),
    imageSrc: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Overlay;
