import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Points } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.cjs";
import { useScrollData } from "scroll-data-hook";

const ThreeStars = () => {
  const ref = useRef(null);

  const { speed, direction } = useScrollData();

  // set star size
  let STAR_SIZE = 0.015;

  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 3 }));
  const [lastScrollDirection, setLastScrollDirection] = useState("");

  /**
   * Edit point material before compile, to change squares to circles
   * @param {shader} shader
   * @param {WebGl} renderer
   */
  const onBeforeCompile = (shader, renderer) => {
    // Check WebGL version and enable GL_OES_standard_derivatives extension if we are on WebGL1
    const { isWebGL2 } = renderer.capabilities;
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <output_fragment>",
      `
      ${!isWebGL2 ? "#extension GL_OES_standard_derivatives : enable\n#include <output_fragment>" : "#include <output_fragment>"}
    vec2 cxy = 2.0 * gl_PointCoord - 1.0;
    float r = dot(cxy, cxy);
    float delta = fwidth(r);     
    float mask = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);
    gl_FragColor = vec4(gl_FragColor.rgb, mask * gl_FragColor.a );
    `
    );
  };

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

    ref.current.rotation.x += velocity;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <pointsMaterial transparent={true} color="#fb2715" size={STAR_SIZE} sizeAttenuation={true} depthWrite={false} onBeforeCompile={onBeforeCompile} />
      </Points>
    </group>
  );
};

export default ThreeStars;
