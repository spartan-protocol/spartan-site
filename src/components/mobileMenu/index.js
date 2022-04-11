import * as React from "react";

import * as styles from "./styles.module.scss";

const MobileMenu = ({ closeNav }) => {
  return (
    <div id='myNav' className={styles.overlay}>
      <div
        role='button'
        aria-hidden='true'
        className={styles.closebtn}
        onClick={() => closeNav()}
      >
        &times;
      </div>

      <div className={styles.content}>
        <a href='/#swap' onClick={() => closeNav()}>
          Swap
        </a>
        <a href='/#pool' onClick={() => closeNav()}>
          Pool
        </a>
        <a href='/#stake' onClick={() => closeNav()}>
          Stake
        </a>
        <a href='/#dao' onClick={() => closeNav()}>
          DAO
        </a>
        <a href='/#footer' onClick={() => closeNav()}>
          Token
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
