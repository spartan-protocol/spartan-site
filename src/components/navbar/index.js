import * as React from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Container type='spread'>
        <div className='d-flex'>
          <div className={styles.brand}>
            <img
              src='./icons/icon-90x90.png'
              alt='Spartan Protocol V2 token icon'
              height='50px'
            />
          </div>
          <div className={styles.title}>Spartan Protocol</div>
        </div>
        <div className={styles.links}>
          {/* <ul>
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
          </ul> */}
        </div>
        <div className='d-flex'>
          <a href='https://dapp.spartanprotocol.org'>
            <div className={styles.dappBtn}>Go to DApp</div>
          </a>
          <a href='https://docs.spartanprotocol.org'>
            <div className={styles.docsBtn}>Go to Docs</div>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
