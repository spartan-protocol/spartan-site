import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "@fontsource/titillium-web/200.css";
import "@fontsource/titillium-web/300.css";
import "@fontsource/titillium-web/400.css";
import "@fontsource/titillium-web/600.css";
import "@fontsource/titillium-web/700.css";
import "@fontsource/saira-condensed/400.css";
import "../sass/global.scss";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Header from "../components/header";
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
        allContentfulHeroSection {
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

  const mediaQueries = {
    xs: "(max-width: 480px)", // use max here for default/smallest
    sm: "(min-width: 481px)", // use min for rest
    md: "(min-width: 769px)", // use min for rest
    lg: "(min-width: 1024px)", // use min for rest
    xl: "(min-width: 1200px)", // use min for rest
  };

  return (
    <BreakpointProvider queries={mediaQueries}>
      <Navbar />
      <div className='wrapper'>
        <Header data={heroData.allContentfulHeaderHero.edges[0].node} />
        <Hero
          heroData={heroData.allContentfulHeroSection.edges[0].node}
          id='swap'
        />
        <Hero
          heroData={heroData.allContentfulHeroSection.edges[1].node}
          id='pool'
        />
        <Hero
          heroData={heroData.allContentfulHeroSection.edges[2].node}
          id='stake'
        />
        <Hero
          heroData={heroData.allContentfulHeroSection.edges[3].node}
          id='synths'
        />
        <Hero
          heroData={heroData.allContentfulHeroSection.edges[4].node}
          id='dao'
        />
        <Footer id='footer' />
      </div>
    </BreakpointProvider>
  );
};

export default IndexPage;
