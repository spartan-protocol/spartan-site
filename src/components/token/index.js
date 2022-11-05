import * as React from "react";
import { useInView } from "react-intersection-observer";

import Footer from "../footer";
import SpartaIcon from "../../assets/icons/spartav2_white.svg";
import DotIcon from "../../assets/icons/dot.svg";

const animationDelay = (delay, index = 1) => ({ animationDelay: `${(index + delay)* 75}ms`, WebkitAnimationDelay: `${(index + delay)* 75}ms` });

const BulletPoint = ({ text, index, bulletPointsVisible }) => {
  return (
    <div className={`flex justify-center text-lg max-h-8 opacity-0 ${bulletPointsVisible && `animate-fadeIn`}`} style={animationDelay(4, index)}>
      <DotIcon className="mr-2" width="8" fill="white" />
      {text}
    </div>
  );
};

const Token = () => {
  const bulletPointsData = ["Fair launch", "Fair distribution", "100% community allocation"];
  const { ref: bulletPointsRef, inView: bulletPointsVisible } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div id="token" className="h-screen bg-black justify-center flex flex-col snap-start">
      <div className="flex flex-col flex-1 items-center justify-center">
        <div className="flex flex-col text-white relative z-10 space-y-8">
          <div className={`flex justify-center opacity-0 animate-fadeIn`} style={animationDelay(2)}>
            <h1 className={`text-3xl sm:text-5xl mb-2 opacity-0 ${bulletPointsVisible && "animate-fadeIn"}`}>The SPARTA Token</h1>
          </div>
          <div className="flex justify-center">
            <SpartaIcon className="text-transparent" width="100px" height="100px" />
          </div>
          <div ref={bulletPointsRef} className="text-center">
            {bulletPointsData.map((item, index) => (
              <BulletPoint text={item} key={item} index={index} bulletPointsVisible={bulletPointsVisible} />
            ))}
          </div>
          <div className="mx-auto">
            <a className="w-full mb-2 opacity-0 animate-fadeInLeft" href="#">
              <div className="p-1.5 px-4 rounded-md text-center hover:opacity-70 font-semibold drop-shadow-white transition border border-white tracking-[.2em]">BUY SPARTA</div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Token;
