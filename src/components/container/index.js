import * as React from "react";

import * as styles from "./styles.module.scss";

const Container = ({ children, className = '' }) => {
  return (
    <div className={styles.container + " d-flex " + className}>{children}</div>
  );
};

export default Container;