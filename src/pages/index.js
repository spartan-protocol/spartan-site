import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "@fontsource/saira/100.css"; //
import "@fontsource/saira/200.css"; //
import "@fontsource/saira/300.css";
import "@fontsource/saira/400.css";
import "@fontsource/saira/500.css";
import "@fontsource/saira/600.css"; //
import "@fontsource/saira/700.css"; //
import "@fontsource/saira/800.css";
import "@fontsource/saira/900.css";

import "@fontsource/saira-condensed/100.css"; //
import "@fontsource/saira-condensed/200.css"; //
import "@fontsource/saira-condensed/300.css";
import "@fontsource/saira-condensed/400.css";
import "@fontsource/saira-condensed/500.css";
import "@fontsource/saira-condensed/600.css"; //
import "@fontsource/saira-condensed/700.css"; //
import "@fontsource/saira-condensed/800.css";

import "@fontsource/nunito/400.css"; // Used general/body
import "@fontsource/nunito/700.css"; // Used hero title
import "@fontsource/nunito/800.css"; // Used hero title
import "../sass/global.scss";

import Navbar from "../components/navbar";
import Dao from "../components/dao";
import Swap from "../components/swap";
import Pool from "../components/pool";
import Stake from "../components/stake";
import Footer from "../components/footer";
import LandingPage from "../components/landingPage";
import BackgroundAnimation from "../components/backgroundAnimation"
import { BreakpointProvider } from "../providers/breakpoint";

const IndexPage = () => {
  const heroData = useStaticQuery(
    graphql`
      query {
        allContentfulHeaderHero {
          edges {
            node {
              cexButtonLabel
              cexButtonLink
              ctaButton
              ctaButtonLink
              discordUrl
              gitHubUrl
              bscscanUrl
              heroBackground {
                file {
                  url
                  fileName
                }
              }
              heroBgNarrow {
                file {
                  url
                  fileName
                }
              }
              tagline
              telegramUrl
              title
              twitterUrl
            }
          }
        }
        allContentfulHeroSection(sort: { fields: order, order: ASC }) {
          edges {
            node {
              buttonLabel1
              buttonLabel2
              buttonLink1
              buttonLink2
              order
              subtitle
              title
              description {
                description
              }
              featureImage {
                file {
                  url
                  fileName
                }
              }
              feature {
                title
                description
              }
              richFeature {
                buttonLabel
                buttonLink
                description
                logo {
                  file {
                    url
                    fileName
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const [swapData, poolData, stakeData,, daoData] = heroData.allContentfulHeroSection.edges;

  const mediaQueries = {
    xs: "(max-width: 480px)", // use max here for default/smallest
    sm: "(min-width: 481px)", // use min for rest
    md: "(min-width: 769px)", // use min for rest
    lg: "(min-width: 1024px)", // use min for rest
    xl: "(min-width: 1200px)", // use min for rest
  };

  //temp data
  const headerData = () => {
    return {
      title: "Disrupting DeFi with Quantum liquidity.",
      subtitle: "Deep incentivized liquidity for the entire BNBChain ecosystem. Claimable every second.",
      ctaButtonLabel: "Open DApp",
      ctaButtonLink: "https://dapp.spartanprotocol.org",
      cexButtonLabel: "Trade on Binance",
      cexButtonLink: "https://www.binance.com/en/trade/SPARTA_BNB",
    };
  };

  return (
    <BreakpointProvider queries={mediaQueries}>
      <Navbar />
      <BackgroundAnimation />
      {/* <Jumper /> */}
      <div className="wrapper">
        <LandingPage data={headerData()} />
        <Swap data={swapData.node} />
        <Pool data={poolData.node} />
        <Stake data={stakeData.node} />
        <Dao data={daoData.node} />
        <Footer id="footer" />
      </div>
    </BreakpointProvider>
  );
};

export default IndexPage;
