import * as React from "react";
import { useInView } from "react-intersection-observer";

const Swap = ({ data }) => {
  const { ref: textRef, inView: textVisible } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: button1Ref, inView: button1Visible } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: button2Ref, inView: button2Visible } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div id="swap" className="h-screen bg-black justify-center">
      <div className="flex flex-col flex-1 h-full items-center justify-center">
        <div className="flex flex-col flex-1 justify-evenly relative z-10">
          <div ref={textRef} className="font-saira text-white text-center px-8">
            <h1 className={`text-3xl sm:text-5xl mb-2 opacity-0 ${textVisible && "animate-fadeIn"}`}>{data.title}</h1>
            <div
              className={`w-64 text-xs sm:w-96 sm:text-sm mx-auto font-extralight text-gray-400 opacity-0 ${
                textVisible && "animate-fadeIn animation-delay-300"
              }`}
            >
              <span className="bg-black bg-opacity-50 rounded">{data.subtitle}</span>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center w-52 mx-auto text-center font-sairaCondensed font-semibold text-lg">
              <a ref={button1Ref} className={`w-full mb-2 opacity-0 ${button1Visible && "animate-fadeInLeft"}`} href={data.buttonLink1}>
                <div className="bg-white p-1.5 text-black rounded w-full h-full hover:opacity-70 transition">{data.buttonLabel1}</div>
              </a>
              <a ref={button2Ref} className={`w-full opacity-0 ${button2Visible && "animate-fadeInLeft animation-delay-300"}`} href={data.buttonLink2}>
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
