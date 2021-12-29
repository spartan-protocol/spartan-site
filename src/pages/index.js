import * as React from "react";
import "@fontsource/titillium-web" // Defaults to weight 400 with all styles included.

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "Titillium Web", // Change to titillium web
};
const titleStyles = {
  fontWeight: "bold",
  fontSize: "54px",
  lineHeight: "130%",
  color: "#000000",
};

// data
const sections = [
  {
    title: "Swap BSC assets",
    subtitle: "Instantly & privately",
    desc: "Swap Binance Smart Chain assets. No accounts, no forms, no permission. Transparent & almost instant.",
    image: "linkToImg",
    labelBtn1: "Swap",
    linkBtn1: "https://dapp.spartanprotocol.org/swap/",
    labelBtn1: "Read more",
    linkBtn1: "https://docs.spartanprotocol.org/",
  },
  {
    title: "Swap BSC assets",
    subtitle: "Instantly & privately",
    desc: "Swap Binance Smart Chain assets. No accounts, no forms, no permission. Transparent & almost instant.",
    image: "linkToImg",
    labelBtn1: "Swap",
    linkBtn1: "https://dapp.spartanprotocol.org/swap/",
    labelBtn1: "Read more",
    linkBtn1: "https://docs.spartanprotocol.org/",
  },
];

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Spartan Protocol</title>
      {sections.map((link) => (
        <>
          <div style={titleStyles}>{link.title}</div>
          <div>{link.subtitle}</div>
          <div>{link.desc}</div>
        </>
      ))}
      <img
        alt='Gatsby G Logo'
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  );
};

export default IndexPage;
