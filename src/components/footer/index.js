import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      currentBuildDate {
        currentDate
      }
    }
  `);

  const buildDate = data.currentBuildDate.currentDate;
  return (
    <div className="text-white relative z-10 flex justify-center pb-10">
      <div className="mb-2">Last updated at {buildDate}</div>
    </div>
  );
};

export default Footer;
