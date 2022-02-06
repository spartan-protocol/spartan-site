import * as React from "react";

import * as styles from "./styles.module.scss";

import DiscordIcon from "./assets/discord.svg";
import GithubIcon from "./assets/github.svg";
import TelegramIcon from "./assets/telegram.svg";
import TwitterIcon from "./assets/twitter.svg";
import { useBreakpoint } from "../../providers/breakpoint";

const Header = ({ data }) => {
  const breakpoint = useBreakpoint();

  const getbgImgUrl = () => {
    if (breakpoint.xl) {
      return data.heroBackground.file.url + "?w=1600"; // if 'xl' width
    }
    if (breakpoint.lg) {
      return data.heroBackground.file.url + "?w=1200"; // if 'lg' width
    }
    if (breakpoint.md) {
      return data.heroBackground.file.url + "?w=1024"; // if 'md' width
    }
    if (breakpoint.sm) {
      return data.heroBackground.file.url + "?w=770"; // if 'sm' width
    }
    if (breakpoint.xs) {
      return data.heroBgNarrow.file.url + "?w=480"; // if 'xs' width
    }
    return "";
  };

  return (
    <div
      className={styles.header}
      style={{
        backgroundImage: `url(${getbgImgUrl()})`,
      }}
    >
      <div className={styles.wrapper}>
        {/* <div className={styles.top}>
          
        </div> */}
        <div className={styles.bottom}>
          <div className={styles.title1}>SPARTAN</div>
          <div className={styles.title2}>PROTOCOL</div>
          <div className={styles.tagline}>{data.tagline}</div>
          <div className={styles.dappBtn}>
            <a href={data.ctaButtonLink}>
              <div className={styles.btn1}>{data.ctaButton}</div>
            </a>
          </div>
          <div className={styles.cexBtn}>
            <a href={data.cexButtonLink}>
              <div className={styles.btn2}>{data.cexButtonLabel}</div>
            </a>
          </div>
          <div className={styles.socials}>
            <a href={data.twitterUrl}>
              <div className={styles.headerSocialItem}>
                <TwitterIcon
                  fill='black'
                  height='30px'
                  style={{ marginRight: "6px" }}
                />
              </div>
            </a>
            <a href={data.telegramUrl}>
              <div className={styles.headerSocialItem}>
                <TelegramIcon fill='black' height='30px' style={{ marginRight: "8px" }} />
              </div>
            </a>
            <a href={data.gitHubUrl}>
              <div className={styles.headerSocialItem}>
                <GithubIcon fill='black' height='30px' style={{ marginRight: "9px" }} />
              </div>
            </a>
            <a href={data.discordUrl}>
              <div className={styles.headerSocialItem}>
                <DiscordIcon fill='black' height='30px' />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
