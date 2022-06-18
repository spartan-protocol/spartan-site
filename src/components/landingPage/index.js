import * as React from "react";

import SocialIcons from "./SocialIcons";

const LandingPage = ({ data }) => {
  return (
    <div id="home" className="h-screen bg-black justify-center">
      <div className="flex flex-col flex-1 h-full items-center justify-center">
        <div className="flex flex-col flex-1 justify-evenly">
          <div className="font-saira text-white text-center px-8">
            <h1 className="text-3xl sm:text-5xl mb-2 opacity-0 animate-fadeIn">{data.title}</h1>
            <div className="w-64 text-xs sm:w-96 sm:text-sm mx-auto font-extralight text-gray-400 animate-[fadeIn_1.5s_ease_forwards] opacity-0">{data.subtitle}</div>
          </div>
          <div>
            <div className="flex flex-col items-center w-52 mx-auto text-center font-sairaCondensed font-semibold text-lg">
              <a className="bg-white p-1.5 text-black rounded mb-2 w-full animate-fadeInLeft" href={data.ctaButtonLink}>
                {data.ctaButtonLabel}
              </a>
              <a className={`border border-white p-1.5 text-white w-full rounded opacity-0 animate-fadeInLeft animation-delay-300`} href={data.cexButtonLink}>
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
