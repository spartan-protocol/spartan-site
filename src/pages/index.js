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
import Token from "../components/token";
import Contributors from "../components/contributors";
import LandingPage from "../components/landingPage";
import SocialIcons from "../components/footer/socialIcons";
import BackgroundAnimation from "../components/backgroundAnimation";
import { BreakpointProvider } from "../providers/breakpoint";
import { defaultFallbackInView } from 'react-intersection-observer';

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
        allContentfulContributors {
          edges {
            node {
              name
              link
              avatar {
                file {
                  url
                  fileName
                }
              }
              overwrite
              order
            }
          }
        }
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
        allContentfulTradeSpartaLinks {
          edges {
            node {
              id
              label
              url
              order
            }
          }
        }
      }
    `
  );

  const [landingPageData] = heroData.allContentfulHeaderHero.edges;
  const [swapData, poolData, stakeData, synthsData, contributorsTextData] = heroData.allContentfulHeroSection.edges;
  const contentfulContributors = heroData.allContentfulContributors.edges;

  const dappContributors = heroData.allRestApiReposSpartanProtocolSpartanProtocolDAppV2Contributors.edges;
  const spartanDocsContributors = heroData.allRestApiReposSpartanProtocolSpartanDocsContributors.edges;
  const spartanSiteContributors = heroData.allRestApiReposSpartanProtocolSpartanSiteContributors.edges;

  const tradeSpartaLinks = heroData.allContentfulTradeSpartaLinks.edges;

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
        <SocialIcons data={landingPageData.node}/>
        <LandingPage data={{...landingPageData.node, tradeSpartaLinks}} />
        <Swap data={swapData.node} />
        <Pool data={poolData.node} />
        <Stake data={stakeData.node} />
        <Contributors data={{ contributorsTextData: contributorsTextData.node, githubContributors, contentfulContributors }} />
        <Token />
      </div>
    </BreakpointProvider>
  );
};

export default IndexPage;
