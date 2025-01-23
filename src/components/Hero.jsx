import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  return (
    <>
      <div className="  h-[100vh] w-full bg-black bg-grid-white/[0.1] relative flex flex-col items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div
          ref={ref}
          className="flex flex-col justify-start font-jersey-15 text-[9vw] leading-none"
        >
          <span className="text-white">If it works,</span>
          <span className="text-red-600">Don&apos;t Touch it!</span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        className="relative bg-black h-[100vh] w-full z-50"
      ></motion.div>
    </>
  );
}

export default Hero;
