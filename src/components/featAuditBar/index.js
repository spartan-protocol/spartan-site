import * as React from "react";

import * as styles from "./styles.module.scss";

const FeatAuditBar = () => {
  return (
    <div className={styles.featureBar}>
      <div className={styles.wrapper}>
        <div className={styles.arenaLogo}>
          <img src='./brands/arena.png' width='150px' />
        </div>
        <div className={styles.arena}>$98k Audit Contest *BTN*</div>
        <div className={styles.certikLogo}>
          <img src='./brands/certik.png' width='150px' />
        </div>
        <div className={styles.certik}>Smart Contract Audit *BTN*</div>
        <div className={styles.githubLogo}>
          <img src='./brands/github.png' width='150px' />
        </div>
        <div className={styles.github}>100% Open Source *BTN*</div>
      </div>
    </div>
  );
};

export default FeatAuditBar;
