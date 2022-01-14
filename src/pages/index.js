import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "@fontsource/titillium-web"; // Defaults to weight 400 with all styles included.
import "../sass/global.scss";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import FeatureBar from "../components/featurebar";
import Footer from "../components/footer";
import Header from "../components/header";
import Container from "../components/container";

const IndexPage = () => {
  const data = useStaticQuery(
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
            }
          }
        }
      }
    `
  );

  return (
    <>
      <Navbar />
      <div class='wrapper'>
        <Header />
        <Hero data={data.allContentfulHeroSection.edges[0].node} id='swap' />
        {/* <FeatureBar>FEAT BAR</FeatureBar> */}
        <Hero data={data.allContentfulHeroSection.edges[1].node} id='pool' />
        <Hero data={data.allContentfulHeroSection.edges[2].node} id='stake' />
        <Hero data={data.allContentfulHeroSection.edges[3].node} id='synths' />
        <Hero data={data.allContentfulHeroSection.edges[4].node} id='dao' />
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;
