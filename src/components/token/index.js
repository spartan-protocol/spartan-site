import * as React from "react";
import { useInView } from "react-intersection-observer";

import Footer from "../footer";
import SpartaIcon from "../../assets/icons/spartav2_white.svg";
import GetSupply from "../../helpers/GetSupply";

const animationDelay = (delay) => ({ animationDelay: `${delay * 75}ms`, WebkitAnimationDelay: `${delay * 75}ms` });

const BulletPoint = ({ text, index, bulletPointsVisible }) => {
  return (
    <div
      className={`flex justify-center sm:justify-start text-lg sm:text-xl max-h-8 sm:max-h-max opacity-0 ${
        bulletPointsVisible && `animate-fadeIn md:animate-fadeInRight`
      }`}
      style={animationDelay(4 + index * 2)}
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
        <div key={item}>
          <BulletPoint text={item} index={index} bulletPointsVisible={bulletPointsVisible} />
          <div
            className={`text-2xl md:text-4xl font-bold opacity-0 drop-shadow-white text-center sm:text-left${
              bulletPointsVisible && ` animate-fadeIn md:animate-fadeInRight`
            }${index === 2 && ` tracking-wider`}`}
            style={animationDelay(5 + index * 2)}
          >
            {bulletPointsDescription[index]}
          </div>
        </div>
      );
    } else {
      return (
        <div key={item}>
          <BulletPoint text={item} index={index} bulletPointsVisible={bulletPointsVisible} />
        </div>
      );
    }
  });
};

const TokenSupply = ({ bulletPointsVisible }) => {
  const { circSupply, burnSupply } = GetSupply();
  return (
    <div className="text-right flex-1 hidden sm:block mr-2 font-saira font-medium">
      <div>
        <div className={`text-xl tracking-wider opacity-0 ${bulletPointsVisible && `animate-fadeInLeft`}`} style={animationDelay(4)}>
          Maximum Supply
        </div>
        <div className={`text-2xl md:text-4xl font-bold opacity-0 drop-shadow-white ${bulletPointsVisible && `animate-fadeInLeft`}`} style={animationDelay(5)}>
          300,000,000
        </div>
      </div>
      <div>
        {/* CALL SPARTA API, USE A FALLBACK? */}
        <div className={`text-xl opacity-0 ${bulletPointsVisible && `animate-fadeInLeft`}`} style={animationDelay(6)}>
          Circulating Supply
        </div>
        <div
          className={`text-2xl tracking-wider md:text-4xl font-bold opacity-0 drop-shadow-white ${bulletPointsVisible && `animate-fadeInLeft`}`}
          style={animationDelay(7)}
        >
          {circSupply}
        </div>
      </div>
      <div>
        {/* GET BALANCE OF DEAD ADDRESS */}
        <div className={`text-xl opacity-0 ${bulletPointsVisible && `animate-fadeInLeft`}`} style={animationDelay(8)}>
          Burned Supply
        </div>
        <div className={`text-2xl md:text-4xl font-bold opacity-0 drop-shadow-white ${bulletPointsVisible && `animate-fadeInLeft`}`} style={animationDelay(9)}>
          {burnSupply}
        </div>
      </div>
    </div>
  );
};

const Token = ({ data }) => {
  const { ref: bulletPointsRef, inView: bulletPointsVisible } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div id="token" className="h-screen max-h-screen overflow-y-autobg-black justify-center flex sm:w-10/12 sm:mx-auto flex-col snap-start pt-16 font-saira font-medium">
      <div className="flex flex-col flex-1 items-center justify-center token-container">
        <div className="flex flex-col text-white relative z-10 space-y-6 md:space-y-8 w-full">
          <div className={`flex justify-center`}>
            <h1 className={`text-4xl sm:text-6xl mb-2 opacity-0 ${bulletPointsVisible && "animate-fadeIn"}`} style={animationDelay(2)}>
              The SPARTA Token
            </h1>
          </div>
          <div className={`logo flex justify-center opacity-0 ${bulletPointsVisible && "animate-fadeIn"}`} style={animationDelay(3)}>
            <SpartaIcon className="text-transparent w-20 h-20 md:w-24 md:h-24" />
          </div>
          <div className="flex flex-col justify-center sm:flex-row pb-2 md:my-0 bullet-points">
            <TokenSupply bulletPointsVisible={bulletPointsVisible} />
            <div className="sm:ml-2 flex-1">
              <div ref={bulletPointsRef} className="text-center space-y-0">
                <BulletPoints data={data} bulletPointsVisible={bulletPointsVisible} />
              </div>
            </div>
          </div>
          <div className="mx-auto w-48 button">
            <a
              className="w-full mb-2"
              href="https://dapp.spartanprotocol.org/swap?asset1=0x0000000000000000000000000000000000000000&asset2=0x3910db0600eA925F63C36DdB1351aB6E2c6eb102"
            >
              <div
                className={`p-1.5 px-4 rounded-md text-center hover:opacity-70 font-semibold drop-shadow-white transition border border-white tracking-[.2em] opacity-0 ${
                  bulletPointsVisible && "animate-fadeIn md:animate-fadeInBottom"
                }`}
                style={animationDelay(9)}
              >
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
