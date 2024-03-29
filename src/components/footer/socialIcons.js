import * as React from "react";

import { useBreakpoint } from "../../providers/breakpoint";

import DocsIcon from "../../assets/logos/docs_logo.svg";
import GithubIcon from "../../assets/logos/github_logo.svg";
import TelegramIcon from "../../assets/logos/telegram_logo.svg";
import TwitterIcon from "../../assets/logos/twitter_logo.svg";
import BscscanIcon from "../../assets/logos/bscscan_logo.svg";

const SocialIcons = () => {
  const breakpoint = useBreakpoint();

  const getSocialSize = (offset = 0) => {
    if (breakpoint.xl) {
      return 31 + offset + "px"; // if 'xl' width
    }
    if (breakpoint.lg) {
      return 31 + offset + "px"; // if 'lg' width
    }
    if (breakpoint.md) {
      return 31 + offset + "px"; // if 'md' width
    }
    if (breakpoint.sm) {
      return 31 + offset + "px"; // if 'sm' width
    }
    if (breakpoint.xs) {
      return 31 + offset + "px"; // if 'xs' width
    }
    return 31 + offset + "px";
  };

  return (
    <div className="flex justify-center mt-4 fixed w-full bottom-0 py-2 mb-1 sm:mb-0 z-20 space-x-7">
      <div className="opacity-0 animate-fadeInBottom" style={{ animationDelay: "200ms", WebkitAnimationDelay: "200ms" }}>
        <a className="hover:opacity-60 transition" href="https://twitter.com/spartanprotocol" target="_blank" rel="noreferrer">
          <TwitterIcon fill="white" height={getSocialSize(-3)} className="shadow-md w-7 h-7 mx-1" />
        </a>
      </div>
      <div className="opacity-0 animate-fadeInBottom" style={{ animationDelay: "400ms", WebkitAnimationDelay: "400ms" }}>
        <a className="hover:opacity-60 transition" href="https://t.me/SpartanProtocolOrg" target="_blank" rel="noreferrer">
          <TelegramIcon fill="white" height={getSocialSize()} className="shadow-md w-7 h-7 mx-1" />
        </a>
      </div>
      <div className="opacity-0 animate-fadeInBottom" style={{ animationDelay: "500ms", WebkitAnimationDelay: "500ms" }}>
        <a className="hover:opacity-60 transition" href="https://github.com/spartan-protocol" target="_blank" rel="noreferrer">
          <GithubIcon fill="white" height={getSocialSize()} className="shadow-md w-7 h-7 mx-1" />
        </a>
      </div>
      <div className="opacity-0 animate-fadeInBottom" style={{ animationDelay: "600ms", WebkitAnimationDelay: "600ms" }}>
        <a className="hover:opacity-60 transition" href="https://docs.spartanprotocol.org" target="_blank" rel="noreferrer">
          <DocsIcon fill="white" height={getSocialSize()} className="shadow-md w-7 h-7 mx-1" />
        </a>
      </div>
      <div className="opacity-0 animate-fadeInBottom" style={{ animationDelay: "700ms", WebkitAnimationDelay: "700ms" }}>
        <a
          className="hover:opacity-60 transition"
          href="https://bscscan.com/address/0x3910db0600eA925F63C36DdB1351aB6E2c6eb102"
          target="_blank"
          rel="noreferrer"
        >
          <BscscanIcon fill="white" height={getSocialSize()} width={getSocialSize(-6)} className="shadow-md w-7 h-7 mx-1 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
