import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside both the menu and the hamburger button
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Only add the event listener when the menu is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-black z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      <div className="relative z-[100]">
        {/* Hamburger Menu */}
        <button
          ref={buttonRef}
          className="fixed w-[2.5rem] h-[2.5rem] top-8 right-5 flex flex-col justify-center items-center gap-1 z-50"
          onClick={toggleNavbar}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          <div
            className={`h-[2px] w-6 ${
              isOpen ? "bg-black" : "bg-white"
            } transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          ></div>
          <div
            className={`h-[2px] w-6 ${
              isOpen ? "bg-black" : "bg-white"
            } transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
          ></div>
          <div
            className={`h-[2px] w-6 ${
              isOpen ? "bg-black" : "bg-white"
            } transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          ></div>
        </button>

        {/* Sidebar Menu */}
        <motion.div
          ref={menuRef}
          className="fixed top-0 right-0 h-screen w-[35%] bg-white text-black flex flex-col justify-center"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: { x: "100%", opacity: 0 },
            animate: {
              x: isOpen ? "0%" : "100%",
              opacity: isOpen ? 1 : 0,
              transition: {
                duration: 0.7,
                ease: [0.79, 0.35, 0.26, 1],
              },
            },
            exit: {
              x: "100%",
              opacity: 0,
              transition: {
                duration: 0.7,
                ease: [0.79, 0.35, 0.26, 1],
              },
            },
          }}
        >
          <div className="flex justify-between flex-grow mt-12 mx-[15%] max-sm:mx-[5%] items-center">
            <div className="flex flex-grow flex-row max-sm:flex-col-reverse items-start justify-between w-full">
              <motion.div
                className="space-y-4"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <h3 className="text-lg khula-light max-sm:mt-10">Social</h3>
                <ul className="space-y-2 pt-4">
                  {[
                    {
                      name: "LinkedIn",
                      link: "https://linkedin.com/in/ben-böckmann-296293265",
                    },
                    { name: "Github", link: "https://github.com/bencodes07" },
                  ].map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                    >
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-xl poppins-light"
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="space-y-4"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <h3 className="text-lg khula-light">Menu</h3>
                <ul className="space-y-2">
                  {[
                    { name: "About Me", id: "about" },
                    { name: "Projects", id: "projects" },
                    { name: "Contact", id: "contact" },
                  ].map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                      onClick={() => {
                        if (window.innerWidth <= 768) {
                          document.getElementById(item.id)?.scrollIntoView();
                        }
                        setIsOpen(false);
                      }}
                    >
                      <a
                        href={`#${item.id}`}
                        className={`text-[2.5rem] ${
                          !(window.innerWidth <= 768) && "hover:left-2"
                        } left-0 relative transition-[left] duration-300 ease-in-out`}
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default MenuBar;
