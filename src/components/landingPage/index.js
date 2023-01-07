import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import TradeButtons from "../tradeButtons";

const LandingPage = () => {
  return (
    <div id="home" className="h-screen my-auto overflow-y-auto bg-black justify-center snap-start">
      <div className="flex flex-1 h-full items-center justify-center">
        <div className="flex flex-col flex-1 justify-center items-center content">
          <div className="flex justify-center items-center landing-text-container">
            <div className="font-saira text-white text-center landscape-text">
              <h1 className="text-4xl sm:text-6xl px-6 mb-2 opacity-0 animate-fadeIn tracking-[.2em] sm:tracking-[.25em] font-medium">SPARTAN PROTOCOL</h1>
              <div
                className="w-64 text-xs sm:w-96 sm:text-sm mx-auto text-white animate-fadeIn opacity-0"
                style={{ animationDelay: "200ms", WebkitAnimationDelay: "200ms" }}
              >
                <span className="bg-black bg-opacity-50 rounded">Open DeFi and stablecoins on BNB Smart Chain</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center w-52 mx-auto text-center font-sairaCondensed font-semibold text-lg landing-image-container">
              <div className="w-full sm:w-96 my-6 md:my-10 2xl:my-14 image-container">
                <StaticImage className="2xl:w-48 lg:w-36 md:w-32 w-40 landscape-image opacity-0 animate-fadeInBottom" src="../../assets/images/sp_iphone_mockup.png" alt="mobileView"  style={{ animationDelay: "300ms", WebkitAnimationDelay: "300ms" }} />
              </div>
              <div className="w-full flex flex-col button-container">
                <a className="mb-2 relative z-10 w-full animate-fadeInLeft" href="https://dapp.spartanprotocol.org/">
                  <div className="bg-white w-full h-full p-1.5 text-black rounded hover:opacity-70 transition button">Open DApp</div>
                </a>
                <TradeButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
