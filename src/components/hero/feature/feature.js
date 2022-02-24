import * as React from "react";

import * as styles from "./styles.module.scss";

const Feature = ({ featData = false, richData = false }) => {
  const isMulti = () => {
    if (richData.length > 1) {
      return true;
    }
    return false;
  };

  return (
    <>
      {featData ? (
        <div className={styles.wrapper + " h-100"}>
          <div className={styles.title}>{featData.title}</div>
          <div className={styles.desc}>{featData.description}</div>
        </div>
      ) : (
        <div className='h-100'>
          {richData.map((item, index) => (
            <div
              key={item.buttonLabel}
              className={
                isMulti()
                  ? styles.multiWrapper + " text-center"
                  : styles.wrapper + " text-center h-100"
              }
            >
              <div className={styles.logo}>
                <img
                  src={item.logo.file.url}
                  alt={item.logo.file.fileName}
                  width='180px'
                />
              </div>
              <div className={styles.desc}>{item.description}</div>
              <a href={item.buttonLink}>
                <div className={styles.button}>{item.buttonLabel}</div>
              </a>
              {index + 1 < richData.length && <br />}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Feature;
