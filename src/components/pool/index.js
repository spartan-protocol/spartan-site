import * as React from "react";
import { useInView } from "react-intersection-observer";

import LiquidityIcon from "../../assets/icons/liquidity.svg";

const Pool = ({ isMetaMask }) => {
  const { ref: textRef, inView: textVisible } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: button1Ref, inView: button1Visible } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: button2Ref, inView: button2Visible } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div id="pool" className="h-screen max-h-screen overflow-y-auto bg-black justify-center snap-start snap-always">
      <div className="flex flex-col flex-1 h-full items-center justify-center">
        <div className="flex flex-1 flex-col md:flex-row justify-center items-center relative z-10 space-y-8 md:space-y-0 space-x-0 md:space-x-12">
          <div ref={textRef} className="font-saira text-white px-2 md:px-8 text-center md:text-left">
            <h1 className={`text-4xl sm:text-5xl mb-2 opacity-0 font-medium ${textVisible && "animate-fadeIn"}`}>Provide Liquidity.</h1>
            <h1 className={`text-4xl sm:text-5xl mb-2 opacity-0 font-medium ${textVisible && "animate-fadeIn"}`}>No middle-man.</h1>
            <div
              className={`text-sm sm:text-md ml-1 text-white opacity-0 ${textVisible && "animate-fadeIn"}`}
              style={{ animationDelay: "200ms", WebkitAnimationDelay: "200ms" }}
            >
              <span className="bg-black bg-opacity-50 rounded">Put your spare tokens to work in liquidity pools.</span>
            </div>
          </div>
          <div className="flex justify-center items-center pr-1 text-white">
            <LiquidityIcon
              className={`w-24 h-24 sm:w-36 sm:h-36 opacity-0 landscape-margin ${textVisible && "animate-fadeInLeft"}`}
              style={{ animationDelay: "100ms", WebkitAnimationDelay: "100ms" }}
            />
          </div>
          <div>
            <div className="flex flex-col items-center w-52 mx-auto text-center font-sairaCondensed font-semibold text-lg">
              <a
                ref={button1Ref}
                className={`w-full mb-2 opacity-0 ${button1Visible && "animate-fadeInLeft"}`}
                href="https://dapp.spartanprotocol.org/liquidity"
                target={isMetaMask ? undefined : "_blank"}
                rel={isMetaMask ? undefined : "noreferrer"}
              >
                <div className="bg-white p-1.5 text-black rounded w-full h-full hover:opacity-70 transition button smPhoneButtons">Add Liquidity</div>
              </a>
              <a
                ref={button2Ref}
                className={`w-full opacity-0 ${button2Visible && "animate-fadeInLeft"}`}
                style={{ animationDelay: "200ms", WebkitAnimationDelay: "200ms" }}
                href="https://docs.spartanprotocol.org/#/liquidity-pools"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded bg-black border border-white p-1.5 text-white w-full h-full hover:opacity-70 transition button smPhoneButtons">
                  Read More
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pool;
