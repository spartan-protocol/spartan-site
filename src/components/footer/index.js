import * as React from "react";

import * as styles from "./styles.module.scss";

import SpartaIcon from "./assets/spartav2.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.title1}>
          The <span className={styles.title1Strong}>SPARTA</span> Token
        </div>
        <div className={styles.title2}>Fair Distribution</div>
        <div className={styles.title3}>Proof of Burn</div>
        <div className={styles.title4}>Bond+Mint</div>
        <div className={styles.logo}>
          <SpartaIcon height='230px' width='230px' />
        </div>
        <div className={styles.no1}>
          <span className={styles.noWeak}>No</span> ICO
        </div>
        <div className={styles.no2}>
          <span className={styles.noWeak}>No</span> Airdrop
        </div>
        <div className={styles.no3}>
          <span className={styles.noWeak}>No</span> Private Sale
        </div>
        <div className={styles.no4}>
          <span className={styles.noWeak}>No</span> Team Allocation
        </div>
      </div>
    </div>
  );
};

export default Footer;
