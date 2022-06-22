import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.cjs";
import { useScrollData } from "scroll-data-hook";

const ThreeStars = () => {
  const ref = useRef(null);

  const { speed, direction } = useScrollData();

  // set star size
  let STAR_SIZE = 0.015;
  // increase star size on mobile devices
  if (window && window.innerWidth < 600) {
    STAR_SIZE = 0.022;
  }

  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 3 }));
  const [lastScrollDirection, setLastScrollDirection] = useState("");

  useFrame((state, delta) => {
    // set the max dots speed
    const MAX_SPEED = 30;

    let speedUp = 1;

    // change the speed when scroll speed is above 100
    if (speed.y && speed.y > 100) {
      speedUp = speed.y / 100;
      // block the max speed
      if (speedUp > MAX_SPEED) speedUp = MAX_SPEED;
    }
    let velocity = (delta / 10) * speedUp;

    // change the direction if we are scrolling up
    if (direction.y === "up") {
      velocity *= -1;
      setLastScrollDirection("up");
    } else if (direction.y === "down") {
      setLastScrollDirection("down");
    }

    // change the idle animation based on last scroll direction
    if (lastScrollDirection === "up") {
      if (velocity > 0) {
        velocity *= -1;
      }
    } else {
      if (velocity < 0) {
        velocity *= -1;
      }
    }

    ref.current.rotation.x -= velocity;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent={true} color="#ff0000" size={STAR_SIZE} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

export default ThreeStars;
