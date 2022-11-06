import * as React from "react";
import { useInView } from "react-intersection-observer";

import GetSupply from "../../helpers/GetSupply";

const animationDelay = (delay, index = 1) => ({ animationDelay: `${(index + delay) * 75}ms`, WebkitAnimationDelay: `${(index + delay) * 75}ms` });

const Token = () => {
  const { circSupply, burnSupply } = GetSupply();

  const { ref: textRef, inView: textVisible } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div id="tokenomics" className="h-screen block sm:hidden bg-black justify-center flex flex-col snap-start">
      <div className="flex flex-col flex-1 items-center justify-center">
        <div ref={textRef} className="flex flex-col text-white text-center relative z-10 mb-4">
          <div className="flex flex-col space-y-4">
            <div className="mb-4">
              <h1 className={`text-3xl sm:text-5xl mb-2 opacity-0 ${textVisible && "animate-fadeIn"}`}>Tokenomics</h1>
            </div>
            <div>
              <div className={`text-xl opacity-0 ${textVisible && `animate-fadeIn`}`} style={animationDelay(3)}>
                Maximum Supply
              </div>
              <div className={`text-4xl font-bold opacity-0 drop-shadow-white ${textVisible && `animate-fadeIn`}`} style={animationDelay(4)}>
                300,000,000
              </div>
            </div>
            <div>
              {/* GET BALANCE OF DEAD ADDRESS */}
              <div className={`text-xl opacity-0 ${textVisible && `animate-fadeIn`}`} style={animationDelay(5)}>
                Burned Supply
              </div>
              <div className={`text-4xl font-bold opacity-0 drop-shadow-white ${textVisible && `animate-fadeIn`}`} style={animationDelay(6)}>
                {burnSupply}
              </div>
            </div>
            <div>
              {/* CALL SPARTA API, USE A FALLBACK? */}
              <div className={`text-xl opacity-0 ${textVisible && `animate-fadeIn`}`} style={animationDelay(7)}>
                Circulating Supply
              </div>
              <div className={`text-4xl font-bold opacity-0 drop-shadow-white ${textVisible && `animate-fadeIn`}`} style={animationDelay(8)}>
                {circSupply}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
