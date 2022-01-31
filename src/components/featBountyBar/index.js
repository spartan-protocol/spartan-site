import * as React from "react";

import * as styles from "./styles.module.scss";

import DownIcon from "../header/assets/down.svg";

const FeatBountyBar = () => {
  return (
    <div className={styles.featureBar}>
      <div className={styles.wrapper}>
        <div className={styles.feeTitle}>
          <DownIcon fill='white' height='15px' className='me-2' />
          IMMUNEFI
        </div>
        <div className={styles.feeDesc}>INFO</div>
        <div className={styles.secureTitle}>
          <DownIcon fill='white' height='15px' className='me-2' />
          BOUNTY
        </div>
        <div className={styles.secureDesc}>INFO</div>
        <div className={styles.oracleTitle}>
          <DownIcon fill='white' height='15px' className='me-2' />
          INFO
        </div>
        <div className={styles.oracleDesc}>INFO</div>
      </div>
    </div>
  );
};

export default FeatBountyBar;
