import React, { useEffect, useRef ,useState } from "react";
import gsap from "gsap";

function useIsTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    setIsTouchDevice(mediaQuery.matches);

    const handleChange = (e) => {
      setIsTouchDevice(e.matches);
    };

    // Use the modern event listener approach
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return isTouchDevice;
}

function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export default function Index({ children }) {
  const magnetic = useRef(null);
  const animation = useRef(null);
  const isTouchDevice = useIsTouchDevice();

  useEffect(() => {
    if (isTouchDevice) return;
    const element = magnetic.current;
    if (!element) return;

    const maxDistance = 20; // Maximum pixel distance to move

    const animate = (x, y) => {
      if (animation.current) {
        animation.current.kill();
      }
      animation.current = gsap.to(element, {
        x,
        y,
        duration: 0.7,
        ease: "power2.out",
      });
    };

    const calculateMovement = (clientX, clientY) => {
      const { height, width, left, top } = element.getBoundingClientRect();
      let x = clientX - (left + width / 2);
      let y = clientY - (top + height / 2);

      // Limit the movement range
      const distance = Math.sqrt(x * x + y * y);
      if (distance > maxDistance) {
        const factor = maxDistance / distance;
        x *= factor;
        y *= factor;
      }

      return { x, y };
    };

    const mouseMove = throttle((e) => {
      const { x, y } = calculateMovement(e.clientX, e.clientY);
      requestAnimationFrame(() => animate(x, y));
    }, 16); // Throttle to about 60fps

    const mouseLeave = () => {
      requestAnimationFrame(() => animate(0, 0));
    };

    element.addEventListener("mousemove", mouseMove);
    element.addEventListener("mouseleave", mouseLeave);

    return () => {
      element.removeEventListener("mousemove", mouseMove);
      element.removeEventListener("mouseleave", mouseLeave);
    };
  }, [isTouchDevice]);

  return React.cloneElement(children, { ref: magnetic });
}
