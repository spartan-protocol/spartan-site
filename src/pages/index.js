import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "@fontsource/titillium-web"; // Defaults to weight 400 with all styles included.
import "../sass/global.scss";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Header from "../components/header";
import Container from "../components/container";
import FeatSwapBar from "../components/featSwapBar";
import FeatAuditBar from "../components/featAuditBar";
import FeatBountyBar from "../components/featBountyBar";

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
      <div className='wrapper'>
        <Header />
        <Hero data={data.allContentfulHeroSection.edges[0].node} id='swap' />
        <FeatSwapBar />
        <Hero data={data.allContentfulHeroSection.edges[1].node} id='pool' />
        <FeatAuditBar />
        <Hero data={data.allContentfulHeroSection.edges[2].node} id='stake' />
        <FeatBountyBar />
        <Hero data={data.allContentfulHeroSection.edges[3].node} id='synths' />
        <Hero data={data.allContentfulHeroSection.edges[4].node} id='dao' />
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;
