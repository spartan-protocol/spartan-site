import * as React from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

import DownIcon from "./assets/down.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <Container type='center'>
        <div className='full-width'>
          <div className={styles.headerTitle}>
            Your DeFi protocol for incentivised liquidity & synthetic assets
          </div>
        </div>
        <div className="hide-sm">
          <div className={styles.headerItem}>
            <div className={styles.headerItemTitle}>Swap</div>
            <div className={styles.headerItemBody}>
              Trade BSC assets, fast & private!
            </div>
            <a href='#swap'>
              <DownIcon fill='white' height='25px' />
            </a>
          </div>
          <div className={styles.headerItem}>
            <div className={styles.headerItemTitle}>Pool</div>
            <div className={styles.headerItemBody}>
              Provide liquidity, without fees!
            </div>
            <a href='#pool'>
              <DownIcon fill='white' height='25px' />
            </a>
          </div>
          <div className={styles.headerItem}>
            <div className={styles.headerItemTitle}>Stake</div>
            <div className={styles.headerItemBody}>
              Stake LP's, earn extra yield!
            </div>
            <a href='#stake'>
              <DownIcon fill='white' height='25px' />
            </a>
          </div>
          <div className={styles.headerItem}>
            <div className={styles.headerItemTitle}>Synths</div>
            <div className={styles.headerItemBody}>
              Forge Synths, play the market!
            </div>
            <a href='#synths'>
              <DownIcon fill='white' height='25px' />
            </a>
          </div>
          <div className={styles.headerItem}>
            <div className={styles.headerItemTitle}>DAO</div>
            <div className={styles.headerItemBody}>
              Vote to govern the protocol!
            </div>
            <a href='#dao'>
              <DownIcon fill='white' height='25px' />
            </a>
          </div>
          <div className={styles.headerItem}>
            <div className={styles.headerItemTitle}>Socials</div>
            <div className={styles.headerItemBody}>
              <DownIcon fill='white' height='49px' />
              <DownIcon fill='white' height='49px' />
              <DownIcon fill='white' height='49px' />
              <DownIcon fill='white' height='49px' />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
