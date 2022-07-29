import * as React from "react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Footer from "../footer";
import SpartaIcon from "../../assets/icons/spartav2.svg";
import DotIcon from "../../assets/icons/dot.svg";

const animationDelay = (delay, index = 1) => ({ animationDelay: `${index + delay}00ms`, WebkitAnimationDelay: `${index + delay}00ms` });

const BulletPoint = ({ text, index, bulletPointsVisible }) => {
  return (
    <div className={`flex justify-center text-lg max-h-8 opacity-0 ${bulletPointsVisible && `animate-fadeIn`}`} style={animationDelay(11, index)}>
      <DotIcon className="mr-2" width="8" fill="white" />
      {text}
    </div>
  );
};

const Token = () => {
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
        result?.circulatingSupply && setCircSupply(formatter.format(result.circulatingSupply));
        result?.burned && setBurnSupply(formatter.format(result.burned));
      })
      .catch((error) => console.error(error.message));
  }, []);

  const bulletPointsData = ["Fair Distribution", "Proof of Burn", "Bond+Mint", "No ICO", "No Airdrop", "No Private Sale", "No Team Allocation"];

  const { ref: textRef, inView: textVisible } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: bulletPointsRef, inView: bulletPointsVisible } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div id="token" className="h-screen bg-black justify-center flex flex-col">
      <div className="flex flex-col flex-1 items-center justify-center">
        <div ref={textRef} className="flex flex-col text-white text-center space-y-4 relative z-10 mb-4">
          <div>
            <div className={`text-2xl opacity-0 ${textVisible && `animate-fadeIn`}`} style={animationDelay(3)}>
              Maximum Supply
            </div>
            <div className={`text-3xl font-bold opacity-0 ${textVisible && `animate-fadeIn`}`} style={animationDelay(4)}>
              300,000,000
            </div>
          </div>
          <div>
            {/* GET BALANCE OF DEAD ADDRESS */}
            <div className={`text-2xl opacity-0 ${textVisible && `animate-fadeIn`}`} style={animationDelay(5)}>
              Burned Supply
            </div>
            <div className={`text-3xl font-bold opacity-0 ${textVisible && `animate-fadeIn`}`} style={animationDelay(6)}>
              {burnSupply}
            </div>
          </div>
          <div>
            {/* CALL SPARTA API, USE A FALLBACK? */}
            <div className={`text-2xl opacity-0 ${textVisible && `animate-fadeIn`}`} style={animationDelay(7)}>
              Circulating Supply
            </div>
            <div className={`text-3xl font-bold opacity-0 ${textVisible && `animate-fadeIn`}`} style={animationDelay(8)}>
              {circSupply}
            </div>
          </div>
        </div>
        <div className="flex flex-col text-white relative z-10">
          <div className={`flex items-center my-4  opacity-0 ${textVisible && `animate-fadeIn`}`} style={animationDelay(9)}>
            <SpartaIcon height="30px" width="30px" style={{ marginRight: "10px", verticalAlign: "top" }} />
            <div className="text-xl">The SPARTA Token</div>
          </div>
          <div ref={bulletPointsRef} className="text-center">
            {bulletPointsData.map((item, index) => (
              <BulletPoint text={item} key={item} index={index} bulletPointsVisible={bulletPointsVisible} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Token;
