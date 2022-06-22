import * as React from "react";

import SocialIcons from "./socialIcons";

const LandingPage = ({ data }) => {
  return (
    <div id="home" className="h-screen bg-black justify-center">
      <div className="flex flex-col flex-1 h-full items-center justify-center">
        <div className="flex flex-col flex-1 justify-evenly">
          <div className="font-saira text-white text-center px-10 max-w-sm sm:max-w-xl">
            <h1 className="text-3xl sm:text-5xl mb-2 opacity-0 animate-fadeIn">{data.title}</h1>
            <div className="absolute flex justify-center w-screen left-0">
              <div className="w-64 text-xs absolute z-10 sm:w-96 sm:text-sm mx-auto font-extralight text-gray-400 animate-[fadeIn_1.5s_ease_forwards] opacity-0">{data.tagline}</div>
              <div className="w-64 text-xs absolute sm:w-96 sm:text-sm mx-auto font-semibold text-black animate-[fadeIn_1.5s_ease_forwards] opacity-0">{data.tagline}</div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center w-52 mx-auto text-center font-sairaCondensed font-semibold text-lg">
              <a className="bg-white p-1.5 text-black rounded mb-2 w-full animate-fadeInLeft" href={data.ctaButtonLink}>
                {data.ctaButton}
              </a>
              <a className="border border-white p-1.5 text-white w-full rounded opacity-0 animate-fadeInLeft animation-delay-300 bg-black" href={data.cexButtonLink}>
                {data.cexButtonLabel}
              </a>
            </div>
            <SocialIcons data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
