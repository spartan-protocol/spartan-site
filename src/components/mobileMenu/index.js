import * as React from "react";

const MobileMenu = ({ closeNav }) => {
  return (
    <div id="myNav" className="flex flex-col hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-30">
      <div className="flex-1 flex flex-col items-center justify-center text-4xl text-gray-200">
        <div className="absolute w-full h-full cursor-default" role="button" aria-hidden="true" onClick={() => closeNav()}></div>
        <div className="relative z-10 flex flex-col space-y-8 text-center p-8 select-none">
          <a className="transition hover:opacity-60" href="#home" onClick={() => closeNav()}>
            Home
          </a>
          <a className="transition hover:opacity-60" href="#swap" onClick={() => closeNav()}>
            Swap
          </a>
          <a className="transition hover:opacity-60" href="#pool" onClick={() => closeNav()}>
            Pool
          </a>
          <a className="transition hover:opacity-60" href="#stake" onClick={() => closeNav()}>
            Stake
          </a>
          <a className="transition hover:opacity-60" href="#dao" onClick={() => closeNav()}>
            DAO
          </a>
          <a className="transition hover:opacity-60" href="#footer" onClick={() => closeNav()}>
            Token
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
