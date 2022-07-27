import * as React from "react";

import SocialIcons from "./socialIcons";

const LandingPage = ({ data }) => {
  return (
    <div id="home" className="h-screen bg-black justify-center">
      <div className="flex flex-col flex-1 h-full items-center justify-center">
        <div className="flex flex-col flex-1 justify-evenly">
          <div className="font-saira text-white text-center px-10 max-w-sm sm:max-w-xl">
            <h1 className="text-3xl sm:text-5xl mb-2 opacity-0 animate-fadeIn">{data.title}</h1>
            <div className="w-64 text-xs sm:w-96 sm:text-sm mx-auto font-extralight text-gray-400 animate-fadeIn animation-delay-300 opacity-0">
              <span className="bg-black bg-opacity-50 rounded">{data.tagline}</span>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center w-52 mx-auto text-center font-sairaCondensed font-semibold text-lg">
              <a className="mb-2 w-full animate-fadeInLeft" href={data.ctaButtonLink}>
                <div className="bg-white w-full h-full p-1.5 text-black rounded hover:opacity-70 transition">{data.ctaButton}</div>
              </a>
              <a className="w-full opacity-0 animate-fadeInLeft animation-delay-300" href={data.cexButtonLink}>
                <div className="border bg-black border-white p-1.5 text-white w-full h-full rounded hover:opacity-70 transition">{data.cexButtonLabel}</div>
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
