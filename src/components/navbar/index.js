import * as React from "react";

import MenuIcon from "./assets/menu.svg";
import SpartaIcon from "../../assets/icons/spartav2.svg";
import MobileMenu from "../mobileMenu";

const Navbar = () => {
  const [navOpen, setNavOpen] = React.useState(false);

  const toggleNav = () => {
    if (navOpen) {
      closeNav();
    } else {
      openNav();
    }
  };

  const openNav = () => {
    document.getElementById("myNav").style.width = "100vw";
    setNavOpen(true);
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
    setNavOpen(false);
  };

  return (
    <div className="flex bg-black w-full p-2 px-4 justify-between fixed z-20">
      <div className="flex align-center w-36">
        <a href="/#home">
          <SpartaIcon width="30px" height="30px" />
        </a>
      </div>
      <div className="hidden sm:flex text-white items-center space-x-4 text-lg text-center">
        <a href="/#swap">Swap</a>
        <a href="/#pool">Pool</a>
        <a href="/#stake">Stake</a>
        <a href="/#dao">DAO</a>
        <a href="/#footer">Token</a>
      </div>
      <div className="flex items-center justify-end w-36 pr-2">
        <div className="mr-4 cursor-pointer">
          <MenuIcon height="20px" fill="white" onClick={() => toggleNav()} />
          <MobileMenu closeNav={closeNav} />
        </div>
        <div>
          <a href="https://dapp.spartanprotocol.org">
            <div className="text-white border text-xs p-1 font-sairaCondensed scale-x-125">
              <div className="px-1.5">OPEN DAPP</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
