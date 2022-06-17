import * as React from "react";
import { useState, useEffect } from "react";

import * as styles from "./styles.module.scss";

import SpartaIcon from "../../assets/icons/spartav2.svg";
import DotIcon from "../../assets/icons/dot.svg";

const Footer = () => {
  const [circSupply, setCircSupply] = useState("92,561,042");
  const [burnSupply, setBurnSupply] = useState("57,480,300");
  useEffect(() => {
    const formatter = new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0,
    });
    fetch("https://api.spartanprotocol.org/api/v1/supply")
      .then((res) => {
        res.json();
      })
      .then((result) => {
        result?.circulatingSupply &&
          setCircSupply(formatter.format(result.circulatingSupply));
        result?.burned && setBurnSupply(formatter.format(result.burned));
      }).catch((error) => console.error(error.message))
  }, []);

  return (
    <div className={styles.footer} id='footer'>
      <div className={styles.wrapper}>
        <div className={styles.first}>
          <div className={styles.maxTitle}>Maximum Supply</div>
          <div className={styles.maxNumb}>300,000,000</div>
          {/* GET BALANCE OF DEAD ADDRESS */}
          <div className={styles.burnTitle}>Burned Supply</div>
          <div className={styles.burnNumb}>{burnSupply}</div>
          {/* CALL SPARTA API, USE A FALLBACK? */}
          <div className={styles.circTitle}>Circulating Supply</div>
          <div className={styles.circNumb}>{circSupply}</div>
        </div>
        <div className={styles.second}>
          <div className={styles.title1}>
            <SpartaIcon
              height='30px'
              width='30px'
              style={{ marginRight: "10px", verticalAlign: "top" }}
            />
            The SPARTA Token
          </div>
          <div className={styles.title2}>Fair Distribution</div>
          <div className={styles.title3}>Proof of Burn</div>
          <div className={styles.title4}>Bond+Mint</div>
          <div className={styles.no1}>
            <DotIcon
              width='8'
              fill='white'
              style={{ marginRight: "7px", marginBottom: "2px" }}
            />
            No ICO
          </div>
          <div className={styles.no2}>
            <DotIcon
              width='8'
              fill='white'
              style={{ marginRight: "7px", marginBottom: "2px" }}
            />
            No Airdrop
          </div>
          <div className={styles.no3}>
            <DotIcon
              width='8'
              fill='white'
              style={{ marginRight: "7px", marginBottom: "2px" }}
            />
            No Private Sale
          </div>
          <div className={styles.no4}>
            <DotIcon
              width='8'
              fill='white'
              style={{ marginRight: "7px", marginBottom: "2px" }}
            />
            No Team Allocation
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
