import * as React from "react";
import { useInView } from "react-intersection-observer";

import titleHelper from "../../helpers/titleHelper";
import SwapIcon from "../../assets/icons/spartanSwap.svg";

const Swap = ({ data }) => {
  const { ref: textRef, inView: textVisible } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: button1Ref, inView: button1Visible } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: button2Ref, inView: button2Visible } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div id="swap" className="h-screen bg-black justify-center snap-start">
      <div className="flex flex-col flex-1 h-full items-center justify-center">
        <div className="flex flex-col md:flex-row flex-1 items-center justify-center relative z-10 space-y-8 md:space-y-0 space-x-0 md:space-x-12">
          <div ref={textRef} className="font-saira text-white text-center md:text-left">
            {titleHelper(data.title, textVisible)}
            <div
              className={`text-xs sm:text-sm mx-auto font-extralight text-gray-400 opacity-0 ${textVisible && "animate-fadeIn"}`}
              style={{ animationDelay: "200ms", WebkitAnimationDelay: "200ms" }}
            >
              <span className="bg-black bg-opacity-50 rounded">{data.subtitle}</span>
            </div>
          </div>
          <div className="animate-fadeIn flex justify-center items-center pr-1 text-spartan-red">
            <SwapIcon width="180px" height="180px" />
          </div>
          <div>
            <div className="flex flex-col items-center w-52 mx-auto text-center font-sairaCondensed font-semibold text-lg">
              <a ref={button1Ref} className={`w-full mb-2 opacity-0 ${button1Visible && "animate-fadeInLeft"}`} href={data.buttonLink1}>
                <div className="bg-white p-1.5 text-black rounded w-full h-full hover:opacity-70 transition">{data.buttonLabel1}</div>
              </a>
              <a
                ref={button2Ref}
                className={`w-full opacity-0 ${button2Visible && "animate-fadeInLeft"}`}
                style={{ animationDelay: "200ms", WebkitAnimationDelay: "200ms" }}
                href={data.buttonLink2}
              >
                <div className="rounded bg-black border border-white p-1.5 text-white w-full h-full hover:opacity-70 transition">{data.buttonLabel2}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
