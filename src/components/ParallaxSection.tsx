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
    <>
      {/* Used For Inline 3D Elements */}
      <Canvas
        eventSource={document.getElementById("root") ?? undefined}
        gl={{ alpha: true, antialias: true }}
        style={{
          position: "fixed",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 20,
        }}
      >
        <View.Port />
        <Preload all />
      </Canvas>

      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-primary"
        style={{ height: "clamp(260px, 50vh, 560px)" }}
        aria-hidden
      >
        <WarpedCheckerboard invert />

        {/* Background layer – fills section on all viewports */}
        {/* <div className="absolute inset-0">
          <img
            src="/parallex-photo1.jpeg"
            alt=""
            className="h-full w-full object-center object-contain"
          />
        </div> */}
        <RetroBorder />

        <Suspense fallback={null}>
          <View className="relative z-10 w-auto h-[350px] mx-auto mt-[50px]">
            <PerspectiveCamera makeDefault position={[0, 0, 2.2]} fov={45} />
            <ambientLight intensity={0.6} />
            <directionalLight position={[2, 2, 2]} intensity={1.2} />
            <Environment preset="sunset" />
            <OrbitControls enableZoom={false} />
            <Center>
              <CupViewer />
            </Center>
          </View>
        </Suspense>
        {/* <RetroBorder /> */}

        {/* Parallax layer – moves upward on scroll, sized to cover on all viewports */}
        {/* <div className="absolute inset-0 overflow-hidden">
        <img
          src="/parallex-photo2.jpeg"
          alt=""
          className="absolute left-1/2 top-1/2 h-[50%] w-[130%]  min-w-full -translate-x-1/2 object-contain object-center"
          style={{
            transform: `translate(-50%, calc(-50% - ${offsetY}px))`,
          }}
        />
      </div> */}
      </section>
    </>
  );
};

export default ParallaxSection;
