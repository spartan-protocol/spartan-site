import * as React from "react";

import * as styles from "./styles.module.scss";

const Container = ({ children, className = "", type = "" }) => {
  let _type = type;
  if (type === "full") {
    _type = styles.full;
  } else {
    _type = "";
  }
  return (
    <div className={styles.container + " " + _type + " " + className}>
      {children}
    </div>
  );
};

export default Container;
