import * as React from "react";

import * as styles from "./styles.module.scss";
import DownArrow from "../../assets/icons/arrowDown.svg";

const Jumper = () => {
  return (
    <div class={styles.wrapper}>
      <div class={styles.container}>
        <a href='#toscroll'>
          <span class={styles.text}>Next</span>
          <DownArrow width='20px' height='20px' stroke='black' />
        </a>
      </div>
    </div>
  );
};

export default Jumper;
