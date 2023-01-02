import * as React from "react";
import { useInView } from "react-intersection-observer";

import Footer from "../footer";
import SpartaIcon from "../../assets/icons/spartav2_white.svg";
import GetSupply from "../../helpers/GetSupply";
import TradeButtons from "../tradeButtons";

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

const BulletPoints = ({ bulletPointsVisible }) => {
  const bulletPoints = ["100% Community Allocation", "Fair Distribution", "Fair Launch"];
  const bulletPointsDescription = ["No Team Tokens", "PoB & Bond", "No ICO"];
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

const Token = () => {
  const { ref: bulletPointsRef, inView: bulletPointsVisible } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div
      id="token"
      className="h-screen max-h-screen overflow-y-auto overflow-x-hidden bg-black justify-center flex sm:w-10/12 sm:mx-auto flex-col snap-start pt-16 font-saira font-medium"
    >
      <div className="flex flex-col flex-1 items-center justify-center token-container">
        <div className="flex flex-col text-white relative z-20 space-y-6 md:space-y-8 w-full">
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
                <BulletPoints bulletPointsVisible={bulletPointsVisible} />
              </div>
            </div>
          </div>
          <div className={`flex flex-col items-center w-52 mx-auto text-center font-sairaCondensed font-semibold text-lg landing-image-container z-20 relative opacity-0 ${bulletPointsVisible && "animate-fadeInBottom"}`} style={animationDelay(9)} >
            <TradeButtons />
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Token;
