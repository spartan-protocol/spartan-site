import React from "react";

import { Canvas } from "@react-three/fiber";
// some browsers (older) doesn't support ResizeObserver out of the box, we need to include it
import { ResizeObserver } from "@juggle/resize-observer";

import ThreeStars from "./threeStars";

const ThreeCanvas = () => {
  return (
    <div className="fixed h-screen max-h-screen overflow-y-autow-screen opacity-0 animate-fadeIn">
      <Canvas
        gl={{ antialias: false, alpha: false }}
        camera={{
          position: [0, 0, -1],
        }}
        resize={{ polyfill: ResizeObserver }}
      >
        <color attach="background" args={["#000"]} />
        <ThreeStars />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
