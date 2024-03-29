import * as React from "react";

const MobileMenu = ({ closeNav, isErrorPage, rootPage }) => {
  return (
    <div id="mobileNav" className="flex-col hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-40 animate-[fadeInLeft_0.4s_ease_none]">
      <div className="flex-1 flex flex-col items-center justify-center text-4xl text-gray-200">
        <div className="absolute w-full h-full cursor-default" role="button" aria-hidden="true" onClick={() => closeNav()}></div>
        <div className="relative z-30 flex flex-col space-y-8 text-center p-8 select-none mobile-menu-cont">
          <a className="transition hover:opacity-60 mobile-menu-item" href={`${isErrorPage ? rootPage : ''}#home`} onClick={() => closeNav()}>
            Home
          </a>
          <a className="transition hover:opacity-60 mobile-menu-item" href={`${isErrorPage ? rootPage : ''}#swap`} onClick={() => closeNav()}>
            Swap
          </a>
          <a className="transition hover:opacity-60 mobile-menu-item" href={`${isErrorPage ? rootPage : ''}#pool`} onClick={() => closeNav()}>
            Pool
          </a>
          <a className="transition hover:opacity-60 mobile-menu-item" href={`${isErrorPage ? rootPage : ''}#stake`} onClick={() => closeNav()}>
            Stake
          </a>
          <a className="transition hover:opacity-60 mobile-menu-item" href={`${isErrorPage ? rootPage : ''}#video`} onClick={() => closeNav()}>
            Video
          </a>
          <a className="transition hover:opacity-60 mobile-menu-item" href={`${isErrorPage ? rootPage : ''}#contributors`} onClick={() => closeNav()}>
            Contributors
          </a>
          <a className="transition hover:opacity-60 mobile-menu-item" href={`${isErrorPage ? rootPage : ''}#token`} onClick={() => closeNav()}>
            Tokenomics
          </a>
          <a className="transition hover:opacity-60 mobile-menu-item" href={`${isErrorPage ? rootPage : ''}#token`} onClick={() => closeNav()}>
            Token
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
