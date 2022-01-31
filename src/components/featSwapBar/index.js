import * as React from "react";

import * as styles from "./styles.module.scss";

import DownIcon from "../header/assets/down.svg";

const FeatSwapBar = () => {
  return (
    <div className={styles.featureBar}>
      <div className={styles.wrapper}>
        <div className={styles.feeTitle}><DownIcon fill='white' height="15px" className="me-2" />Low Fees</div>
        <div className={styles.feeDesc}>
          Swap rate slip trends to 0% with deeper pools
        </div>
        <div className={styles.secureTitle}><DownIcon fill='white' height="15px" className="me-2" />Highly Secure</div>
        <div className={styles.secureDesc}>
          Manipulative trades charged exponentially higher fee
        </div>
        <div className={styles.oracleTitle}><DownIcon fill='white' height="15px" className="me-2" />Internal Oracle</div>
        <div className={styles.oracleDesc}>
          Pools kept in balance by economic incentive
        </div>
      </div>
    </div>
  );
};

export default FeatSwapBar;
