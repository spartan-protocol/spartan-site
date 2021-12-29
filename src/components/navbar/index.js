import * as React from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Container>
        <h1>Navbar</h1>
      </Container>
    </div>
  );
};

export default Navbar;
