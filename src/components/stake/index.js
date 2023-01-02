import * as React from "react";
import { useInView } from "react-intersection-observer";

import StakeIcon from "../../assets/icons/staking.svg";

const Stake = () => {
  const { ref: textRef, inView: textVisible } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: button1Ref, inView: button1Visible } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: button2Ref, inView: button2Visible } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div id="stake" className="h-screen max-h-screen overflow-y-auto bg-black justify-center snap-start">
      <div className="flex flex-col flex-1 h-full items-center justify-center">
        <div className="flex flex-1 flex-col md:flex-row justify-center items-center relative z-10 space-y-8 md:space-y-0 space-x-0 md:space-x-12">
          <div ref={textRef} className="font-saira text-white px-2 md:px-8 text-center md:text-left">
            <h1 className={`text-4xl sm:text-5xl mb-2 opacity-0 font-medium ${textVisible && "animate-fadeIn"}`}>Stake LP tokens.</h1>
            <h1 className={`text-4xl sm:text-5xl mb-2 opacity-0 font-medium ${textVisible && "animate-fadeIn"}`}>Claim every second.</h1>
            <div
              className={`text-sm sm:text-md ml-1 text-white opacity-0 ${textVisible && "animate-fadeIn"}`}
              style={{ animationDelay: "200ms", WebkitAnimationDelay: "200ms" }}
            >
              <span className="bg-black bg-opacity-50 rounded">Want additional yield?</span>
            </div>
          </div>
          <div className="flex justify-center items-center pr-1 text-white">
            <StakeIcon
              className={`w-28 h-28 sm:w-44 sm:h-44 opacity-0 ${textVisible && "animate-fadeInLeft"}`}
              style={{ animationDelay: "100ms", WebkitAnimationDelay: "100ms" }}
            />
          </div>
          <div>
            <div className="flex flex-col items-center w-52 mx-auto text-center font-sairaCondensed font-semibold text-lg">
              <a ref={button1Ref} className={`w-full mb-2 opacity-0 ${button1Visible && "animate-fadeInLeft"}`} href="https://dapp.spartanprotocol.org/vaults">
                <div className="bg-white p-1.5 text-black rounded w-full h-full hover:opacity-70 transition button">Stake DaoVault</div>
              </a>
              <a
                ref={button2Ref}
                className={`w-full opacity-0 ${button2Visible && "animate-fadeInLeft"}`}
                style={{ animationDelay: "200ms", WebkitAnimationDelay: "200ms" }}
                href="https://docs.spartanprotocol.org/#/staking"
              >
                <div className="rounded bg-black border border-white p-1.5 text-white w-full h-full hover:opacity-70 transition button">Read More</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stake;
