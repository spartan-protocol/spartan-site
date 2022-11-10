import * as React from "react";
import { useInView } from "react-intersection-observer";

import Footer from "../footer";
import SpartaIcon from "../../assets/icons/spartav2_white.svg";
import GetSupply from "../../helpers/GetSupply";

const animationDelay = (delay) => ({ animationDelay: `${delay * 75}ms`, WebkitAnimationDelay: `${delay * 75}ms` });

const BulletPoint = ({ text, index, bulletPointsVisible }) => {
  return (
    <div
      className={`flex justify-center sm:justify-start text-lg sm:text-xl max-h-8 sm:max-h-max opacity-0 ${bulletPointsVisible && `animate-fadeIn md:animate-fadeInRight`}`}
      style={animationDelay(4 + (index * 2))}
    >
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
          <BulletPoint text={item} key={item} index={index} bulletPointsVisible={bulletPointsVisible} />
          <div className={`text-3xl md:text-4xl font-bold opacity-0 drop-shadow-white text-center sm:text-left ${bulletPointsVisible && `animate-fadeIn md:animate-fadeInRight`}`} style={animationDelay(5 + (index *2))}>{bulletPointsDescription[index]}</div>
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

const TokenSupply = ({ bulletPointsVisible }) => {
  const { circSupply, burnSupply } = GetSupply();
  return (
    <div className="text-right hidden sm:block ml-0 sm:ml-16">
      <div>
        <div className={`text-xl opacity-0 ${bulletPointsVisible && `animate-fadeInLeft`}`} style={animationDelay(4)}>
          Maximum Supply
        </div>
        <div className={`text-2xl md:text-4xl font-bold opacity-0 drop-shadow-white ${bulletPointsVisible && `animate-fadeInLeft`}`} style={animationDelay(5)}>
          300,000,000
        </div>
      </div>
      <div>
        {/* GET BALANCE OF DEAD ADDRESS */}
        <div className={`text-xl opacity-0 ${bulletPointsVisible && `animate-fadeInLeft`}`} style={animationDelay(6)}>
          Burned Supply
        </div>
        <div className={`text-2xl md:text-4xl font-bold opacity-0 drop-shadow-white ${bulletPointsVisible && `animate-fadeInLeft`}`} style={animationDelay(7)}>
          {burnSupply}
        </div>
      </div>
      <div>
        {/* CALL SPARTA API, USE A FALLBACK? */}
        <div className={`text-xl opacity-0 ${bulletPointsVisible && `animate-fadeInLeft`}`} style={animationDelay(8)}>
          Circulating Supply
        </div>
        <div className={`text-2xl md:text-4xl font-bold opacity-0 drop-shadow-white ${bulletPointsVisible && `animate-fadeInLeft`}`} style={animationDelay(9)}>
          {circSupply}
        </div>
      </div>
    </div>
  );
};

const Token = ({ data }) => {
  const { ref: bulletPointsRef, inView: bulletPointsVisible } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div id="token" className="h-screen bg-black justify-center flex flex-col snap-start pt-16">
      <div className="flex flex-col flex-1 items-center justify-center">
        <div className="flex flex-col text-white relative z-10 space-y-6 md:space-y-8">
          <div className={`flex justify-center`} >
            <h1 className={`text-3xl sm:text-5xl mb-2 opacity-0 ${bulletPointsVisible && "animate-fadeIn"}`} style={animationDelay(2)}>The SPARTA Token</h1>
          </div>
          <div className={`flex justify-center opacity-0 ${bulletPointsVisible && "animate-fadeIn"}`} style={animationDelay(3)}>
            <SpartaIcon className="text-transparent w-20 h-20 md:w-24 md:h-24" />
          </div>
          <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-16 pb-2 md:my-0">
            <TokenSupply bulletPointsVisible={bulletPointsVisible} />
            <div>
              <div ref={bulletPointsRef} className="text-center space-y-0">
                <BulletPoints data={data} bulletPointsVisible={bulletPointsVisible} />
              </div>
            </div>
          </div>
          <div className="mx-auto w-48">
            <a className="w-full mb-2" href="#">
              <div className={`p-1.5 px-4 rounded-md text-center hover:opacity-70 font-semibold drop-shadow-white transition border border-white tracking-[.2em] opacity-0 ${bulletPointsVisible && "animate-fadeIn md:animate-fadeInBottom"}`} style={animationDelay(9)}>
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
