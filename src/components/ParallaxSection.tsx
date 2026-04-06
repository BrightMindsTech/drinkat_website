import {
  Center,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Preload,
  View,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { CupViewer } from "./3DComponents/CupViewer";
import WarpedCheckerboard from "./WarpedCheckerboard";
import RetroBorder from "./RetroBorder";

const PARALLAX_SPEED = 0.4; // Image moves at 40% of scroll speed

const ParallaxSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // As section moves up (scroll down), move image upward at a slower rate for parallax
      const baseOffset = rect.top - viewportHeight * 0.5;
      const move = -baseOffset * PARALLAX_SPEED;
      setOffsetY(move);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "clamp(260px, 50vh, 560px)" }}
      aria-hidden
    >
      {/* Background layer – fills section on all viewports */}
      <div className="absolute inset-0">
        <img
          src="/parallex-photo1.jpeg"
          alt=""
          className="h-full w-full object-cover md:object-contain object-center"
        />
      </div>
      {/* Parallax layer – moves upward on scroll, sized to cover on all viewports */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/parallex-photo2.jpeg"
          alt=""
          className="absolute left-1/2 top-1/2 h-[130%] w-[130%] min-h-full min-w-full -translate-x-1/2 object-cover object-center md:h-full"
          style={{
            transform: `translate(-50%, calc(-50% - ${offsetY}px))`,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxSection;
