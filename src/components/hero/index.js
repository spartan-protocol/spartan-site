import * as React from "react";

import * as styles from "./styles.module.scss";
import Feature from "./feature/feature";
import { useBreakpoint } from "../../providers/breakpoint";

const Hero = ({ heroData, id }) => {
  const breakpoint = useBreakpoint();

  const subtitle = heroData.subtitle.split(" ");
  const firstWord = subtitle[0];
  const remainder = subtitle.slice(1).join(" ");

  const getbgImgUrl = () => {
    if (breakpoint.xl) {
      return heroData.featureImage.file.url + "?w=1600"; // if 'xl' width
    }
    if (breakpoint.lg) {
      return heroData.featureImage.file.url + "?w=1200"; // if 'lg' width
    }
    if (breakpoint.md) {
      return heroData.featureImage.file.url + "?w=1024"; // if 'md' width
    }
    if (breakpoint.sm) {
      return heroData.featureImage.file.url + "?w=770"; // if 'sm' width
    }
    if (breakpoint.xs) {
      return heroData.featureImage.file.url + "?w=480"; // if 'xs' width
    }
    return "";
  };

  return (
    <div
      className={styles.wrapper + " " + id}
      id={id}
      style={{
        backgroundImage: `url(${getbgImgUrl()})`,
      }}
    >
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
      <div className={styles.featImgBlock}>
        {heroData.feature && <Feature featData={heroData.feature} />}
        {heroData.richFeature && <Feature richData={heroData.richFeature} />}
      </div>
    </div>
  );
};

export default Hero;
