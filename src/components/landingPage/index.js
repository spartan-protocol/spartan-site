import React, { useState } from "react";

import SocialIcons from "./socialIcons";

const LandingPage = ({ data }) => {
  const [showTradeButtons, setShowTradeButtons] = useState(false);

  const tradeButtons = () => {
    if (!showTradeButtons) return null;
    try {
      const { tradeSpartaLinks } = data;
      const lastIndex = tradeSpartaLinks.length - 1;
      const borderClass = (i) => `${i > 0 && "border-t-0"} ${i === 0 && "rounded-t"} ${i === lastIndex && "rounded-b"}`;

      return (
        <div
          className="flex animate-fadeIn flex-col absolute w-full z-10"
          onMouseOut={() => setShowTradeButtons(false)}
          onBlur={() => setShowTradeButtons(false)}
          onClick={() => setShowTradeButtons(false)}
        >
          <div className="h-10"></div>
          {tradeSpartaLinks.map((el, i) => (
            <a
              href={el.node.url}
              target="_blank"
              rel="noreferrer"
              className={`border ${borderClass(i)} p-1.5 scale-x-105 bg-black text-white cursor-pointer hover:bg-spartan-red transition`}
              key={el.node.id}
            >
              {el.node.label}
            </a>
          ))}
        </div>
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="home" className="h-screen bg-black justify-center snap-start">
      <div className="flex flex-col flex-1 h-full items-center justify-center">
        <div className="flex flex-col flex-1 justify-evenly">
          <div className="font-saira text-white text-center px-10 max-w-sm sm:max-w-xl">
            <h1 className="text-3xl sm:text-5xl mb-2 opacity-0 animate-fadeIn">{data.title}</h1>
            <div
              className="w-64 text-xs sm:w-96 sm:text-sm mx-auto font-extralight text-gray-400 animate-fadeIn opacity-0"
              style={{ animationDelay: "200ms", WebkitAnimationDelay: "200ms" }}
            >
              <span className="bg-black bg-opacity-50 rounded">{data.tagline}</span>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center w-52 mx-auto text-center font-sairaCondensed font-semibold text-lg">
              <a className="mb-2 w-full animate-fadeInLeft" href={data.ctaButtonLink}>
                <div className="bg-white w-full h-full p-1.5 text-black rounded hover:opacity-70 transition">{data.ctaButton}</div>
              </a>
              <div
                className="w-full relative z-10 opacity-0 animate-fadeInLeft flex flex-col"
                onFocus={() => setShowTradeButtons(true)}
                onMouseOver={() => setShowTradeButtons(true)}
                onClick={() => setShowTradeButtons(true)}
                style={{ animationDelay: "200ms", WebkitAnimationDelay: "200ms" }}
              >
                <div>
                  <div
                    className={`${
                      showTradeButtons ? "bg-spartan-red" : "bg-black"
                    } cursor-pointer border border-white p-1.5 text-white w-full h-full rounded hover:opacity-70 transition`}
                  >
                    {data.cexButtonLabel}
                  </div>
                </div>
                {tradeButtons()}
              </div>
            </div>
            <SocialIcons data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
