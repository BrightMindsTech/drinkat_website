import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import drinkatLogo from "@/assets/drinkat-logo.png";
import WarpedCheckerboard from "./WarpedCheckerboard";
import { playfulHoverTap, riseIn, sectionStagger } from "@/lib/motion";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const play = () => {
      video.play().catch(() => {});
    };
    play();
    video.addEventListener("canplay", play);
    return () => video.removeEventListener("canplay", play);
  }, []);

  return (
    <section id="home" className="bg-background min-h-[85vh] pt-24 md:pt-28 pb-12 md:pb-20 relative overflow-hidden -mt-24 flex flex-col justify-between">
      {/* Background video – extends to very top of viewport on all views */}
      <div
        className="absolute left-0 right-0 bottom-0 z-0 pointer-events-none"
        style={{ top: "-6rem", height: "calc(100% + 6rem)" }}
      >
        <video
          ref={videoRef}
          src="/background-vid2.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden
        />
      </div>
      <WarpedCheckerboard />

      <motion.div
        className="container mx-auto px-6 text-center relative z-10"
        initial="hidden"
        animate="visible"
        variants={sectionStagger(reducedMotion, 0.08)}
      >
        {/* Hero Logo – blur follows logo shape */}
        <motion.div className="max-w-6xl mx-auto mb-4" variants={riseIn(reducedMotion, 30)}>
          <img
            src={drinkatLogo}
            alt="Drinkat coffee shop logo"
            className="w-full h-auto"
          />
        </motion.div>
        <motion.p
          className="font-arabic font-semibold text-primary text-2xl md:text-3xl mb-10"
          dir="rtl"
          variants={riseIn(reducedMotion, 24)}
        >
          درينك ناو !
        </motion.p>
      </motion.div>

      {/* Full-width buttons – outside container so they span the full viewport */}
      <motion.div
        className="flex flex-col w-full relative z-10 mt-10 md:mt-14"
        initial="hidden"
        animate="visible"
        variants={sectionStagger(reducedMotion, 0.25)}
      >
        <motion.a
          href="#menu"
          className="hero-btn-checkerboard block w-full py-2.5 sm:py-3 transition-colors no-underline text-center font-rounded font-bold text-lg sm:text-xl md:text-2xl uppercase tracking-wider text-white"
          variants={riseIn(reducedMotion, 20)}
          {...playfulHoverTap(reducedMotion)}
        >
          Menu Drinkat <span className="font-arabic normal-case" dir="rtl">المنيو</span>
        </motion.a>
        <motion.a
          href="#visit-us"
          className="hero-btn-checkerboard block w-full py-2.5 sm:py-3 transition-colors no-underline text-center font-rounded font-bold text-lg sm:text-xl md:text-2xl uppercase tracking-wider text-white"
          variants={riseIn(reducedMotion, 20)}
          {...playfulHoverTap(reducedMotion)}
        >
          our branches <span className="font-arabic normal-case" dir="rtl">فروعنا</span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
