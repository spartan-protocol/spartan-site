import { useState, useEffect } from "react";

const GetSupply = () => {
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

  return { circSupply, burnSupply };
};

export default GetSupply;
