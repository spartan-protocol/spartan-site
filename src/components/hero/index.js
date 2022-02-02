import * as React from "react";

import * as styles from "./styles.module.scss";
import SwapFeat from "./swapFeats";

const Hero = ({ data, id }) => {
  const subtitle = data.subtitle.split(" ");
  const firstWord = subtitle[0];
  const remainder = subtitle.slice(1).join(" ");

  return (
    <div className={styles.wrapper + " " + id} id={id}>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.subtitle}>
        <span className='underline'>{firstWord}</span>
        <span> {remainder}</span>
      </div>
      <div className={styles.desc}>{data.description.description}</div>
      <div className={styles.buttons}>
        <div className={styles.btnItem}>
          <a href={data.buttonLink1}>
            <div className={styles.cta}>{data.buttonLabel1}</div>
          </a>
        </div>
        <div className={styles.btnItem}>
          <a href={data.buttonLink2}>
            <div className={styles.ctaInfo}>{data.buttonLabel2}</div>
          </a>
        </div>
      </div>
      <div
        className={styles.featImgBlock}
        style={{ backgroundImage: "url(" + data.featureImage.file.url + ")" }}
      >
        {id === "swap" && <SwapFeat />}
      </div>
    </div>
  );
};

export default Hero;
