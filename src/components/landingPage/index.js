import { StaticImage } from "gatsby-plugin-image";
import React, { useState, useRef, useEffect } from "react";

const LandingPage = ({ data }) => {
  const [showTradeButtons, setShowTradeButtons] = useState(false);
  const [blockTradeButtons, setBlockTradeButtons] = useState(false);
  const [tradeButtonsUp, setTradeButtonsUp] = useState(false);

  const tradingButtonsRef = useRef();
  const tradeButtons = () => {
    if (!showTradeButtons) return null;
    try {
      const { tradeSpartaLinks } = data;
      const lastIndex = tradeSpartaLinks.length - 1;
      const borderClass = (i) => `${i > 0 && "border-t-0"} ${i === 0 && "rounded-t"} ${i === lastIndex && "rounded-b"}`;
      return (
        <div
          ref={tradingButtonsRef}
          className="flex animate-fadeIn flex-col absolute w-full z-20 button"
          onMouseOut={() => setShowTradeButtons(false)}
          onBlur={() => setShowTradeButtons(false)}
          onClick={() => setShowTradeButtons(false)}
        >
          {!tradeButtonsUp && <div className="h-10 cursor-pointer"></div>}
          {tradeSpartaLinks
            .sort((a, b) => (!tradeButtonsUp ? a.node.order - b.node.order : b.node.order - a.node.order))
            .map((el, i) => (
              <a
                href={el.node.url}
                target="_blank"
                rel="noreferrer"
                className={`border ${borderClass(i)} p-1.5 scale-x-105 bg-black text-white cursor-pointer select-none hover:bg-spartan-red z-30 transition`}
                key={el.node.id}
              >
                {el.node.label}
              </a>
            ))}
          {tradeButtonsUp && <div className="h-10 cursor-pointer"></div>}
        </div>
      );
    } catch (err) {
      console.log(err);
    }
  };

  // disable opening trade links on hover, when someone will click on the button
  const tradeButtonOnClick = () => {
    setBlockTradeButtons(true);
    setShowTradeButtons(!showTradeButtons);
  };

  const isInViewport = (el) => {
    if (!el || !el.current) return;
    const rect = el.current.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  useEffect(() => {
    if (tradingButtonsRef.current) tradingButtonsRef.current.style = "";
    const inViewport = isInViewport(tradingButtonsRef);
    if (!inViewport) {
      setTradeButtonsUp(true);
      if (tradingButtonsRef.current) tradingButtonsRef.current.style = "margin-top: -122px;";
    } else setTradeButtonsUp(false);
  }, [showTradeButtons]);

  return (
    <div id="home" className="h-screen bg-black justify-center snap-start">
      <div className="flex flex-1 h-full items-center justify-center">
        <div className="flex flex-col flex-1 justify-center items-center">
          <div className="flex justify-center items-center">
            <div className="font-saira text-white text-center">
              <h1 className="text-4xl sm:text-5xl px-6 mb-2 opacity-0 animate-fadeIn tracking-[.2em] sm:tracking-[.25em]">{data.title.toUpperCase()}</h1>
              <div
                className="w-64 text-xs sm:w-96 sm:text-sm mx-auto font-extralight text-gray-400 animate-fadeIn opacity-0"
                style={{ animationDelay: "200ms", WebkitAnimationDelay: "200ms" }}
              >
                <span className="bg-black bg-opacity-50 rounded">{data.tagline}</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center w-52 mx-auto text-center font-sairaCondensed font-semibold text-lg">
              <div className="w-full sm:w-96 mb-4">
                <StaticImage src="../../assets/images/combined.png" alt="mobileView" />
              </div>
              <a className="mb-2 relative z-10 w-full animate-fadeInLeft" href={data.ctaButtonLink}>
                <div className="bg-white w-full h-full p-1.5 text-black rounded hover:opacity-70 transition button">{data.ctaButton}</div>
              </a>
              <div
                className="w-full relative z-20 opacity-0 animate-fadeInLeft button flex flex-col"
                onFocus={() => setShowTradeButtons(true)}
                onMouseOver={() => !blockTradeButtons && setShowTradeButtons(true)}
                onMouseOut={() => setBlockTradeButtons(false)}
                onClick={() => tradeButtonOnClick()}
                style={{ animationDelay: "200ms", WebkitAnimationDelay: "200ms" }}
              >
                <div>
                  <div
                    className={`${
                      showTradeButtons ? "bg-spartan-red" : "bg-black"
                    } select-none cursor-pointer border border-white p-1.5 text-white w-full h-full rounded transition button`}
                  >
                    {data.cexButtonLabel}
                  </div>
                </div>
                {tradeButtons()}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showTradeButtons && <div className="fixed w-full h-full top-0 left-0" onClick={() => setShowTradeButtons(false)}></div>}
    </div>
  );
};

export default LandingPage;
