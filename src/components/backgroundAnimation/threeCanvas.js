import React from "react";

import { Canvas } from "@react-three/fiber";

import ThreeStars from "./threeStars";

const ThreeCanvas = ({ className }) => {
  return (
    <div className="fixed h-screen w-screen animation-[fadeIn_1s_ease_forwards]">
      <Canvas
        gl={{ antialias: false, alpha: false }}
        camera={{
          position: [0, 0, 1],
        }}
      >
        <color attach="background" args={["#000"]} />
        <ThreeStars />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
