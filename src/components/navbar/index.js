import * as React from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

import MenuIcon from "./assets/menu.svg";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.firstSection}>
        <div className={styles.brand}>
          <img
            src='./icons/icon-90x90.png'
            alt='Spartan Protocol V2 token icon'
            height='40px'
          />
        </div>
        {/* <div className={styles.title}>Spartan Protocol</div> */}
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <a href='#'>Swap</a>
          </li>
          <li>
            <a href='#'>Pool</a>
          </li>
          <li>
            <a href='#'>Stake</a>
          </li>
          <li>
            <a href='#'>Synth</a>
          </li>
          <li>
            <a href='#'>Token</a>
          </li>
          <li>
            <a href='#'>DAO</a>
          </li>
        </ul>
      </div>
      <div className={styles.btnSection}>
        <div className={styles.mobileLinks}>
          <MenuIcon height='40px' fill='white' />
        </div>
        <div>
          <a href='https://dapp.spartanprotocol.org'>
            <div className={styles.dappBtn}>
              <div>Open DApp</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
