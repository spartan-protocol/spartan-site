import * as React from "react";

import * as styles from "./styles.module.scss";

const FeatureBar = ({ children }) => {
  return (
    <div className={styles.featureBar}>{children}</div>
  );
};

export default FeatureBar;
