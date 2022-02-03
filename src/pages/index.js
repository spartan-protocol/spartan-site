import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "@fontsource/titillium-web"; // Defaults to weight 400 with all styles included.
import "../sass/global.scss";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Header from "../components/header";

const IndexPage = () => {
  const heroData = useStaticQuery(
    graphql`
      query {
        allContentfulHeroSection(sort: { fields: order, order: ASC }) {
          edges {
            node {
              order
              buttonLabel1
              buttonLabel2
              buttonLink1
              buttonLink2
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
                logo {
                  file {
                    url
                    fileName
                  }
                }
                description
                buttonLabel
                buttonLink
              }
            }
          }
        }
      }
    `
  );

  return (
    <>
      <Navbar />
      <div className='wrapper'>
        <Header />
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
        <Footer id="footer" />
      </div>
    </>
  );
};

export default IndexPage;
