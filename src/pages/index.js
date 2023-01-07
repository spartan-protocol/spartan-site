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

import "@fontsource/blinker/400.css";
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
import SocialIcons from "../components/footer/socialIcons";
import BackgroundAnimation from "../components/backgroundAnimation";
import { BreakpointProvider } from "../providers/breakpoint";
import { defaultFallbackInView } from "react-intersection-observer";

const IndexPage = () => {
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
      <Navbar />
      <BackgroundAnimation />
      <div className="wrapper">
        <SocialIcons />
        <LandingPage />
        <Swap />
        <Pool />
        <Stake />
        <Video />
        <Contributors data={{ githubContributors }} />
        {/* <Tokenomics /> is for mobile devices only */}
        <Tokenomics />
        <Token />
      </div>
    </BreakpointProvider>
  );
};

export default IndexPage;
