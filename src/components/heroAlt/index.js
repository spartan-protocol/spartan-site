import * as React from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

const Hero = ({ data }) => {
  const subtitle = data.subtitle.split(" ");
  const firstWord = subtitle[0];
  const remainder = subtitle.slice(1).join(" ");

  return (
    <Container className={styles.heroBlock}>
      <div className={styles.heroLeft}>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.subtitle}>
          <span className='underline'>{firstWord}</span>
          <span> {remainder}</span>
        </div>
        <div className={styles.desc}>{data.description.description}</div>
        <div className='d-flex'>
          <a href={data.buttonLink1}>
            <div className={styles.cta}>{data.buttonLabel1}</div>
          </a>
          <a href={data.buttonLink2}>
            <div className={styles.ctaInfo}>{data.buttonLabel2}</div>
          </a>
        </div>
      </div>
      <div className={styles.heroRight}>
        <img className={styles.featImg} src={data.featureImage.file.url} alt={data.featureImage.file.filename} />
      </div>
    </Container>
  );
};

export default Hero;
