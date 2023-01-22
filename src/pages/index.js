import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import "@fontsource/blinker/400.css"; // .font-blinker

import "@fontsource/saira/400.css"; // .font-saira
import "@fontsource/saira/500.css"; // .font-saira .font-medium
import "@fontsource/saira/600.css"; // .font-saira .font-semibold
import "@fontsource/saira/700.css"; // .font-saira .font-bold

import "@fontsource/saira-condensed/400.css"; // .font-sairaCondensed
import "@fontsource/saira-condensed/600.css"; // .font-sairaCondensed .font-semibold

import "../sass/global.scss";

import Navbar from "../components/navbar";
import Swap from "../components/swap";
import Pool from "../components/pool";
import Stake from "../components/stake";
import Tokenomics from "../components/tokenomics";
import Token from "../components/token";
import Contributors from "../components/contributors";
import LandingPage from "../components/landingPage";
import Video from "../components/video";
import Friends from "../components/friends";
import SocialIcons from "../components/footer/socialIcons";
import BackgroundAnimation from "../components/backgroundAnimation";
import { BreakpointProvider } from "../providers/breakpoint";
import { defaultFallbackInView } from "react-intersection-observer";

const IndexPage = ({ serverData }) => {
  const { totalSupply, circulatingSupply, burnedSupply } = serverData;

  const [isMetaMask, setisMetaMask] = useState(false);

  useEffect(() => {
    // fix for landing page height on some mobile browsers (ios)
    function setLandingPageHeight(doc) {
      let prevClientHeight;
      function handleResize() {
        const clientHeight = doc.clientHeight;
        if (clientHeight === prevClientHeight) return;
        requestAnimationFrame(function updateViewportHeight() {
          document.querySelector("#home").style.height = clientHeight - clientHeight * 0.01 + "px";
          prevClientHeight = clientHeight;
        });
      }
      handleResize();
      return handleResize;
    }
    const { clientWidth } = document.documentElement;
    const { userAgent } = navigator;
    const iOs = userAgent && userAgent.match(/iPhone|iPad|iPod/i);
    if (clientWidth < 600 && iOs) {
      window.addEventListener("resize", setLandingPageHeight(document.documentElement));
      setLandingPageHeight(document.documentElement);
    }
    if (clientWidth < 415 && window?.ethereum?.isMetaMask) {
      setisMetaMask(true);
    }
  }, []);

  const heroData = useStaticQuery(
    graphql`
      query {
        allRestApiReposSpartanProtocolSpartanProtocolDAppV2Contributors {
          edges {
            node {
              login
              avatar_url
              html_url
              type
              contributions
            }
          }
        }
        allRestApiReposSpartanProtocolSpartanDocsContributors {
          edges {
            node {
              login
              avatar_url
              html_url
              type
              contributions
            }
          }
        }
        allRestApiReposSpartanProtocolSpartanSiteContributors {
          edges {
            node {
              login
              avatar_url
              html_url
              type
              contributions
            }
          }
        }
      }
    `
  );

  const dappContributors = heroData.allRestApiReposSpartanProtocolSpartanProtocolDAppV2Contributors.edges;
  const spartanDocsContributors = heroData.allRestApiReposSpartanProtocolSpartanDocsContributors.edges;
  const spartanSiteContributors = heroData.allRestApiReposSpartanProtocolSpartanSiteContributors.edges;

  const githubContributors = { dappContributors, spartanDocsContributors, spartanSiteContributors };

  const mediaQueries = {
    xs: "(max-width: 480px)", // use max here for default/smallest
    sm: "(min-width: 481px)", // use min for rest
    md: "(min-width: 769px)", // use min for rest
    lg: "(min-width: 1024px)", // use min for rest
    xl: "(min-width: 1200px)", // use min for rest
  };

  // support intersection observer for older browsers
  if (typeof window !== "undefined" && !window.IntersectionObserver) {
    defaultFallbackInView(true);
  }

  return (
    <BreakpointProvider queries={mediaQueries}>
      <Navbar isMetaMask={isMetaMask} isErrorPage={false} />
      <BackgroundAnimation />
      <div className="wrapper">
        <SocialIcons />
        <LandingPage isMetaMask={isMetaMask} />
        <Swap isMetaMask={isMetaMask} />
        <Pool isMetaMask={isMetaMask} />
        <Stake isMetaMask={isMetaMask} />
        <Video />
        <Contributors data={{ githubContributors }} />
        {/* <Tokenomics /> is for mobile devices only */}
        <Tokenomics totalSupply={totalSupply} circulatingSupply={circulatingSupply} burnedSupply={burnedSupply} />
        <Token isMetaMask={isMetaMask} totalSupply={totalSupply} circulatingSupply={circulatingSupply} burnedSupply={burnedSupply} />
        <Friends />
      </div>
    </BreakpointProvider>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Spartan Protocol | Permissionless DeFi & stablecoins on BNB Chain (BSC)</title>
    <meta name="description" content="Liquidity-sensitive AMM algorithm on BNB SmartChain providing permissionless DeFi services. Community-built & run" />
    {/* <link rel="icon" href="img/favicon.ico" sizes="any" />
    <link rel="icon" href="img/favicon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="img/apple-touch-icon.png" /> */}
    <meta name="author" content="Spartan Protocol Community" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://SpartanProtocol.org" />
    <meta property="og:title" content="Spartan Protocol | Permissionless DeFi & stablecoins on BNB Chain (BSC)" />
    <meta property="og:image" content="./og-img-placeholder.png" />
    <meta property="og:description" content="Liquidity-sensitive AMM algorithm on BNB Chain providing permissionless DeFi services. Community-built & run" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Spartan Protocol | Permissionless DeFi & stablecoins on BNB Chain (BSC)" />
    <meta name="twitter:description" content="Liquidity-sensitive AMM algorithm on BNB Chain providing permissionless DeFi services. Community-built & run" />
    <meta name="twitter:url" content="https://SpartanProtocol.org" />
    <meta name="twitter:image" content="./og-img-placeholder.png" />
  </>
);

export async function getServerData() {
  try {
    const res = await fetch(`https://api.spartanprotocol.org/api/v1/supply`);
    if (!res.ok) {
      console.log("Couldnt retreive supply data, using fallback");
      throw new Error(`Response failed`);
    }
    const data = await res.json();
    return {
      props: {
        totalSupply: data.totalSupply,
        circulatingSupply: data.circulatingSupply,
        burnedSupply: data.burned,
      },
    };
  } catch (error) {
    return {
      props: {
        totalSupply: "123056099", // Updated 19/01/2023
        circulatingSupply: "88258447", // Updated 19/01/2023
        burnedSupply: "57480308", // Updated 19/01/2023
      },
    };
  }
}
