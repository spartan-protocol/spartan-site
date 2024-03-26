import React, { useState, useRef, useEffect } from "react";

const TradeButtons = ({ isMetaMask }) => {
  const [showTradeButtons, setShowTradeButtons] = useState(false);
  const [blockTradeButtons, setBlockTradeButtons] = useState(false);
  const [tradeButtonsUp, setTradeButtonsUp] = useState(false);

  const data = [
    {
      label: "Spartan DEX",
      url: "https://dapp.spartanprotocol.org/swap?asset2=0x3910db0600eA925F63C36DdB1351aB6E2c6eb102",
      order: 1,
    },
    {
      label: "MEXC Exchange",
      url: "https://www.mexc.com/exchange/SPARTA1_USDT?inviteCode=1SsHx",
    },
  ];

  const tradingButtonsRef = useRef();
  const tradeButtons = () => {
    if (!showTradeButtons) return null;
    const lastIndex = data.length - 1;
    const borderClass = (i) => `${i > 0 && "border-t-0"} ${i === 0 && "rounded-t"} ${i === lastIndex && "rounded-b"}`;
    return (
      <div
        ref={tradingButtonsRef}
        className="flex animate-fadeIn flex-col absolute w-full z-20 button"
        onMouseOut={() => setShowTradeButtons(false)}
        onBlur={() => setShowTradeButtons(false)}
        onClick={() => setShowTradeButtons(false)}
        onKeyDown={() => setShowTradeButtons(false)}
        role="button"
        tabIndex={0}
      >
        {!tradeButtonsUp && <div className="h-10 cursor-pointer"></div>}
        {data.map((el, i) => (
          <a
            href={el.url}
            target={el.label === "Spartan DEX" && isMetaMask ? undefined : "_blank"}
            rel={el.label === "Spartan DEX" && isMetaMask ? undefined : "noreferrer"}
            className={`border ${borderClass(i)} p-1.5 scale-x-105 bg-black text-white cursor-pointer select-none hover:bg-spartan-red z-30 transition`}
            key={el.label}
          >
            {el.label}
          </a>
        ))}
        {tradeButtonsUp && <div className="h-10 cursor-pointer"></div>}
      </div>
    );
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
    const margin = 40 * data.length + 2;
    if (!inViewport) {
      setTradeButtonsUp(true);
      if (tradingButtonsRef.current) tradingButtonsRef.current.style = `margin-top: -${margin}px;`;
    } else setTradeButtonsUp(false);
  }, [showTradeButtons, data.length]);

  return (
    <>
      <div
        className="w-full relative z-20 opacity-0 animate-fadeInLeft button flex flex-col"
        onFocus={() => setShowTradeButtons(true)}
        onMouseOver={() => !blockTradeButtons && setShowTradeButtons(true)}
        onMouseOut={() => setBlockTradeButtons(false)}
        onClick={() => tradeButtonOnClick()}
        onBlur={() => null}
        onKeyDown={() => tradeButtonOnClick()}
        style={{ animationDelay: "200ms", WebkitAnimationDelay: "200ms" }}
        role="button"
        tabIndex={0}
      >
        <div>
          <div
            className={`${
              showTradeButtons ? "bg-spartan-red" : "bg-black"
            } select-none cursor-pointer border border-white p-1.5 text-white w-full h-full rounded transition button smPhoneButtons`}
          >
            Trade SPARTA
          </div>
        </div>
        {tradeButtons()}
      </div>
      {showTradeButtons && (
        <div
          className="fixed w-full h-full top-0 left-0"
          aria-label="close trade buttons"
          onClick={() => setShowTradeButtons(false)}
          role="button"
          tabIndex={0}
          onKeyDown={() => setShowTradeButtons(false)}
        ></div>
      )}
    </>
  );
};

export default TradeButtons;
