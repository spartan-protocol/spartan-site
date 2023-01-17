import React, { useEffect, useState } from "react";

import MenuIcon from "./assets/menu.svg";
import SpartaIcon from "../../assets/icons/spartav2.svg";
import MobileMenu from "../mobileMenu";
import useFontFaceObserver from "use-font-face-observer";

const Navbar = ({ isMetaMask }) => {
  const [navOpen, setNavOpen] = React.useState(false);

  const toggleNav = () => {
    if (navOpen) {
      closeNav();
    } else {
      openNav();
    }
  };
  let html, userAgent;
  if (typeof document !== "undefined") {
    html = document.querySelector("html");
  }
  if (typeof navigator !== "undefined") {
    userAgent = navigator.userAgent;
  }
  const iOs = userAgent && userAgent.match(/iPhone|iPad|iPod/i);

  const openNav = () => {
    document.getElementById("mobileNav").classList.replace("animate-[disappearLeft_0.4s_ease_none]", "animate-[fadeInLeft_0.4s_ease_none]");
    document.getElementById("mobileNav").style.display = "flex";

    // fix for scrolling issues on safari based browsers
    // we need to disable smooth scrolling in order to make it work
    if (iOs) {
      html.style.scrollBehavior = "auto";
      html.style.scrollSnapType = "none";
    }
    setNavOpen(true);
  };

  const closeNav = () => {
    // fix for scrolling issues on safari based browsers
    // enable it a while after the nav is hidden
    if (iOs) {
      setTimeout(() => {
        html.style.scrollBehavior = "smooth";
        html.style.scrollSnapType = "y mandatory";
      }, 200);
    }

    document.getElementById("mobileNav").classList.replace("animate-[fadeInLeft_0.4s_ease_none]", "animate-[disappearLeft_0.4s_ease_none]");
    setTimeout(() => {
      document.getElementById("mobileNav").style.display = "none";
    }, 400);
    setNavOpen(false);
  };

  // check if the font has been loaded
  const isFontLoaded = useFontFaceObserver([{ family: `Saira Condensed` }]);

  // handle the case when there will be a problem while font loading
  const [fontLoadedTimeout, setFontLoadedTimeout] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (!isFontLoaded) setFontLoadedTimeout(true);
    }, 2000);
  });

  const dappButton = () => {
    return (
      (isFontLoaded || fontLoadedTimeout) && (
        <div className="animate-[fadeIn_0.3s_ease_forwards]">
          <a
            className="hover:opacity-60 transition"
            href="https://dapp.spartanprotocol.org"
            target={isMetaMask ? undefined : "_blank"}
            rel={isMetaMask ? undefined : "noreferrer"}
          >
            <div className={`text-gray-300 border text-xs px-1 font-sairaCondensed ${isFontLoaded && "scale-x-110"}`}>
              <div className="px-1 scale-y-80 font-thin tracking-[.2em] whitespace-nowrap">OPEN DAPP</div>
            </div>
          </a>
        </div>
      )
    );
  };

  return (
    <div className="flex bg-black w-full p-2 px-4 justify-between fixed z-30">
      <div className="flex align-center w-36">
        <a href="#home">
          <SpartaIcon width="30px" height="30px" />
        </a>
      </div>
      <div className="hidden font-blinker lg:font-saira sm:flex text-white items-center space-x-4 md:space-x-6 text-lg text-center">
        <a className="hover:opacity-60 transition hidden-landscape" href="#home">
          Home
        </a>
        <a className="hover:opacity-60 transition" href="#swap">
          Swap
        </a>
        <a className="hover:opacity-60 transition" href="#pool">
          Pool
        </a>
        <a className="hover:opacity-60 transition" href="#stake">
          Stake
        </a>
        <a className="hover:opacity-60 transition" href="#video">
          Video
        </a>
        <a className="hover:opacity-60 transition" href="#contributors">
          Contributors
        </a>
        <a className="hover:opacity-60 transition" href="#token">
          Token
        </a>
      </div>
      <div className="flex items-center justify-end w-36 sm:pr-2">
        <div className="mr-1 sm:hidden block">
          <div className="p-2 mr-2" onClick={() => toggleNav()} onKeyDown={() => toggleNav()} role="button" tabIndex={0}>
            <MenuIcon className="cursor-pointer transition hover:opacity-60" height="20px" fill="white" />
          </div>
          <MobileMenu closeNav={closeNav} />
        </div>
        {dappButton()}
      </div>
    </div>
  );
};

export default Navbar;
