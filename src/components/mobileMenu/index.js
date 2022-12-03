import * as React from "react";

const MobileMenu = ({ closeNav }) => {
  return (
    <div id="myNav" className="flex flex-col hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-40 animate-[fadeInLeft_0.4s_ease_none]">
      <div className="flex-1 flex flex-col items-center justify-center text-3xl text-gray-200">
        <div className="absolute w-full h-full cursor-default" role="button" aria-hidden="true" onClick={() => setTimeout(() => closeNav(), 50)}></div>
        <div className="relative z-30 flex flex-col space-y-8 text-center p-8 select-none">
          <a className="transition hover:opacity-60" href="#home" onClick={() => setTimeout(() => closeNav(), 50)}>
            Home
          </a>
          <a className="transition hover:opacity-60" href="#swap" onClick={() => setTimeout(() => closeNav(), 50)}>
            Swap
          </a>
          <a className="transition hover:opacity-60" href="#pool" onClick={() => setTimeout(() => closeNav(), 50)}>
            Pool
          </a>
          <a className="transition hover:opacity-60" href="#stake" onClick={() => setTimeout(() => closeNav(), 50)}>
            Stake
          </a>
          <a className="transition hover:opacity-60" href="#contributors" onClick={() => setTimeout(() => closeNav(), 50)}>
            Contributors
          </a>
          <a className="transition hover:opacity-60" href="#video" onClick={() => setTimeout(() => closeNav(), 50)}>
            Video
          </a>
          <a className="transition hover:opacity-60" href="#token" onClick={() => setTimeout(() => closeNav(), 50)}>
            Tokenomics
          </a>
          <a className="transition hover:opacity-60" href="#token" onClick={() => setTimeout(() => closeNav(), 50)}>
            Token
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
