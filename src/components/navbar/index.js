import * as React from "react";

import * as styles from "./styles.module.scss";

import MenuIcon from "./assets/menu.svg";
import SpartaIcon from "../../assets/icons/spartav2.svg";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.firstSection}>
        <a href='/'>
          <div className={styles.brand}>
            <SpartaIcon height='36px' />
          </div>
        </a>
        <div className={styles.title}>SPARTAN PROTOCOL</div>
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <a href='/#swap'>Swap</a>
          </li>
          <li>
            <a href='/#pool'>Pool</a>
          </li>
          <li>
            <a href='/#stake'>Stake</a>
          </li>
          <li>
            <a href='/#synths'>Synths</a>
          </li>
          <li>
            <a href='/#dao'>DAO</a>
          </li>
          <li>
            <a href='/#footer'>Token</a>
          </li>
        </ul>
      </div>
      <div className={styles.btnSection}>
        <div className={styles.mobileLinks}>
          <MenuIcon height='20px' fill='white' />
        </div>
        <div>
          <a href='https://dapp.spartanprotocol.org'>
            <div className={styles.dappBtn}>
              <div>OPEN DAPP</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
