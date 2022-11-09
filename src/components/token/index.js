import * as React from "react";
import { useInView } from "react-intersection-observer";

import Footer from "../footer";
import SpartaIcon from "../../assets/icons/spartav2_white.svg";
import DotIcon from "../../assets/icons/dot.svg";
import GetSupply from "../../helpers/GetSupply";

const animationDelay = (delay, index = 1) => ({ animationDelay: `${(index + delay) * 75}ms`, WebkitAnimationDelay: `${(index + delay) * 75}ms` });

const BulletPoint = ({ text, index, bulletPointsVisible }) => {
  return (
    <div
      className={`flex justify-center sm:justify-start text-lg sm:text-xl max-h-8 sm:max-h-max opacity-0 ${bulletPointsVisible && `animate-fadeIn`}`}
      style={animationDelay(5, index)}
    >
      <DotIcon className="mr-2 block sm:hidden" width="8" fill="white" />
      {text}
    </div>
  );
};

const BulletPoints = ({ data, bulletPointsVisible }) => {
  const { bulletPoints, bulletPointsDescription } = data;
  return bulletPoints.map((item, index) => {
    if (bulletPointsDescription[index]) {
      return (
        <div>
          <BulletPoint text={item} key={item} index={index} bulletPointsVisible />
          <div className={`text-4xl font-bold opacity-0 drop-shadow-white text-left ${bulletPointsVisible && `animate-fadeIn`}`} style={animationDelay(6, index)}>{bulletPointsDescription[index]}</div>
        </div>
      );
    } else {
      return (
        <div>
          <BulletPoint text={item} key={item} index={index} bulletPointsVisible={bulletPointsVisible} />
        </div>
      );
    }
  });
};

const TokenSupply = ({ textVisible }) => {
  const { circSupply, burnSupply } = GetSupply();
  return (
    <div className="text-right hidden sm:block ml-0 sm:ml-16">
      <div>
        <div className={`text-xl opacity-0 ${textVisible && `animate-fadeIn`}`} style={animationDelay(5)}>
          Maximum Supply
        </div>
        <div className={`text-4xl font-bold opacity-0 drop-shadow-white ${textVisible && `animate-fadeIn`}`} style={animationDelay(4)}>
          300,000,000
        </div>
      </div>
      <div>
        {/* GET BALANCE OF DEAD ADDRESS */}
        <div className={`text-xl opacity-0 ${textVisible && `animate-fadeIn`}`} style={animationDelay(6)}>
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
  );
};

const Token = ({ data }) => {
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
          <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-16">
            <TokenSupply textVisible />
            <div>
              <div ref={bulletPointsRef} className="text-center space-y-0">
                <BulletPoints data={data} bulletPointsVisible />
              </div>
            </div>
          </div>
          <div className="mx-auto w-48">
            <a className="w-full mb-2 opacity-0 animate-fadeInLeft" href="#">
              <div className="p-1.5 px-4 rounded-md text-center hover:opacity-70 font-semibold drop-shadow-white transition border border-white tracking-[.2em]">
                {data.button}
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Token;
