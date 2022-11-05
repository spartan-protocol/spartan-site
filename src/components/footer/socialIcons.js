import * as React from "react";

import { useBreakpoint } from "../../providers/breakpoint";

import DiscordIcon from "../../assets/logos/discord_logo.svg";
import GithubIcon from "../../assets/logos/github_logo.svg";
import TelegramIcon from "../../assets/logos/telegram_logo.svg";
import TwitterIcon from "../../assets/logos/twitter_logo.svg";
import BscscanIcon from "../../assets/logos/bscscan_logo.svg";

const SocialIcons = ({ data }) => {
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
    <div className="flex justify-center mt-4 fixed w-full bottom-0 py-2 mb-2 sm:mb-0 z-50 space-x-4">
      <div className="opacity-0 animate-fadeInBottom" style={{ animationDelay: "200ms", WebkitAnimationDelay: "200ms" }}>
        <a className="hover:opacity-60 transition" href={data.twitterUrl}>
          <TwitterIcon fill="white" height={getSocialSize(-3)} className="w-7 h-7 mx-1" />
        </a>
      </div>
      <div className="opacity-0 animate-fadeInBottom" style={{ animationDelay: "400ms", WebkitAnimationDelay: "400ms" }}>
        <a className="hover:opacity-60 transition" href={data.telegramUrl}>
          <TelegramIcon fill="white" height={getSocialSize()} className="w-7 h-7 mx-1" />
        </a>
      </div>
      <div className="opacity-0 animate-fadeInBottom" style={{ animationDelay: "500ms", WebkitAnimationDelay: "500ms" }}>
        <a className="hover:opacity-60 transition" href={data.gitHubUrl}>
          <GithubIcon fill="white" height={getSocialSize()} className="w-7 h-7 mx-1" />
        </a>
      </div>
      <div className="opacity-0 animate-fadeInBottom" style={{ animationDelay: "600ms", WebkitAnimationDelay: "600ms" }}>
        <a className="hover:opacity-60 transition" href={data.discordUrl}>
          <DiscordIcon fill="white" height={getSocialSize()} className="w-7 h-7 mx-1" />
        </a>
      </div>
      <div className="opacity-0 animate-fadeInBottom" style={{ animationDelay: "700ms", WebkitAnimationDelay: "700ms" }}>
        <a className="hover:opacity-60 transition" href={data.bscscanUrl}>
          <BscscanIcon fill="white" height={getSocialSize()} width={getSocialSize(-6)} className="w-7 h-7 mx-1 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
