import * as React from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

import DownIcon from "./assets/down.svg";
import BinanceIcon from "./assets/binance.svg";
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
        <div className={styles.headerBinance}>
          <BinanceIcon height='190px' />
        </div>
        <div className={styles.headerBtn}>Open DApp</div>
        <div className={styles.headerSocials}>
          <div className={styles.headerSocialItem}>
            <TwitterIcon fill='white' height='49px' />
          </div>
          <div className={styles.headerSocialItem}>
            <TelegramIcon fill='white' height='49px' />
          </div>
          <div className={styles.headerSocialItem}>
            <GithubIcon fill='white' height='49px' />
          </div>
          <div className={styles.headerSocialItem}>
            <DiscordIcon fill='white' height='49px' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
