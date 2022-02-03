import * as React from "react";

import * as styles from "./styles.module.scss";
import Feature from "./feature/feature";

const Hero = ({ heroData, id }) => {
  const subtitle = heroData.subtitle.split(" ");
  const firstWord = subtitle[0];
  const remainder = subtitle.slice(1).join(" ");

  return (
    <div className={styles.wrapper + " " + id} id={id}>
      <div className={styles.title}>{heroData.title}</div>
      <div className={styles.subtitle}>
        <span className='underline'>{firstWord}</span>
        <span> {remainder}</span>
      </div>
      <div className={styles.desc}>{heroData.description.description}</div>
      <div className={styles.buttons}>
        <div className={styles.btnItem}>
          <a href={heroData.buttonLink1}>
            <div className={styles.cta}>{heroData.buttonLabel1}</div>
          </a>
        </div>
        <div className={styles.btnItem}>
          <a href={heroData.buttonLink2}>
            <div className={styles.ctaInfo}>{heroData.buttonLabel2}</div>
          </a>
        </div>
      </div>
      <div
        className={styles.featImgBlock}
        style={{
          backgroundImage: "url(" + heroData.featureImage.file.url + ")",
        }}
      >
        {heroData.feature && <Feature featData={heroData.feature} />}
        {heroData.richFeature && <Feature richData={heroData.richFeature} />}
      </div>
    </div>
  );
};

export default Hero;
