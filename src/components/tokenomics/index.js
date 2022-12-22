import * as React from "react";
import { useInView } from "react-intersection-observer";

import GetSupply from "../../helpers/GetSupply";

const animationDelay = (delay, index = 1) => ({ animationDelay: `${(index + delay) * 75}ms`, WebkitAnimationDelay: `${(index + delay) * 75}ms` });

const Token = () => {
  const { circSupply, burnSupply } = GetSupply();

  const { ref: textRef, inView: textVisible } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div id="tokenomics" className="h-screen font-saira font-medium sm:hidden bg-black sm:w-10/12 sm:mx-auto justify-center flex flex-col snap-start">
      <div className="flex flex-col flex-1 items-center justify-center">
        <div ref={textRef} className="flex flex-col text-white text-center relative z-10 mb-4">
          <div className="flex flex-col space-y-4">
            <div className="mb-4">
              <h1 className={`text-4xl sm:text-6xl mb-2 opacity-0 ${textVisible && "animate-fadeIn"}`}>Tokenomics</h1>
            </div>
            <div>
              <div className={`text-xl tracking-wider opacity-0 ${textVisible && `animate-fadeIn`}`} style={animationDelay(3)}>
                Maximum Supply
              </div>
              <div className={`text-4xl font-bold opacity-0 drop-shadow-white ${textVisible && `animate-fadeIn`}`} style={animationDelay(4)}>
                300,000,000
              </div>
            </div>
            <div>
              {/* CALL SPARTA API, USE A FALLBACK? */}
              <div className={`text-xl opacity-0 ${textVisible && `animate-fadeIn`}`} style={animationDelay(5)}>
                Circulating Supply
              </div>
              <div className={`text-4xl font-bold tracking-wider opacity-0 drop-shadow-white ${textVisible && `animate-fadeIn`}`} style={animationDelay(6)}>
                {circSupply}
              </div>
            </div>
            <div>
              {/* GET BALANCE OF DEAD ADDRESS */}
              <div className={`text-xl opacity-0 ${textVisible && `animate-fadeIn`}`} style={animationDelay(7)}>
                Burned Supply
              </div>
              <div className={`text-4xl font-bold opacity-0 drop-shadow-white ${textVisible && `animate-fadeIn`}`} style={animationDelay(8)}>
                {burnSupply}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
