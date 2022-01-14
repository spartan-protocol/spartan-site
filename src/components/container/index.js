import * as React from "react";

import * as styles from "./styles.module.scss";

const Container = ({ children, className = "", type = "" }) => {
  let _type = type;
  if (type === "even") {
    _type = " flex-even ";
  } else if (type === "spread") {
    _type = " flex-spread ";
  } else if (type === "center") {
    _type = " flex-center ";
  } else {
    _type = " flex-start ";
  }
  return <div className={styles.container + _type + className}>{children}</div>;
};

export default Container;
