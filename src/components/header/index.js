import * as React from "react";

import * as styles from "./styles.module.scss";

import DiscordIcon from "./assets/discord.svg";
import GithubIcon from "./assets/github.svg";
import TelegramIcon from "./assets/telegram.svg";
import TwitterIcon from "./assets/twitter.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.headerSpartan}>SPARTAN</div>
        <div className={styles.headerProtocol}>PROTOCOL</div>
        <div className={styles.headerSubtitle}>
          Incentivized liquidity & synthetic assets on BSC
        </div>
        {/* <div className={styles.headerBinance}>
          <BinanceIcon height='190px' />
        </div> */}
        <div className={styles.headerBtn}>
          <a href='https://dapp.spartanprotocol.org'>
            <div className={styles.headerBtn1}>Open DApp</div>
          </a>
        </div>
        <div className={styles.headerSocials}>
          <a href='https://twitter.com/SpartanProtocol'>
            <div className={styles.headerSocialItem}>
              <TwitterIcon fill='black' height='49px' />
            </div>
          </a>
          <a href='https://t.me/SpartanProtocolOrg'>
            <div className={styles.headerSocialItem}>
              <TelegramIcon fill='black' height='49px' />
            </div>
          </a>
          <a href='https://github.com/spartan-protocol'>
            <div className={styles.headerSocialItem}>
              <GithubIcon fill='black' height='49px' />
            </div>
          </a>
          <a href='https://discord.gg/wQggvntnGk'>
            <div className={styles.headerSocialItem}>
              <DiscordIcon fill='black' height='49px' />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
