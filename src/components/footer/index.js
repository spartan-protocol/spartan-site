import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import HeartIcon from "../../assets/icons/heart.svg";

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
    <div className="text-gray-300 text-sm relative z-10 flex flex-col align-center justify-center text-center pb-10 mb-3">
      <div>Last updated: {buildDate}</div>
      <div className="flex items-center justify-center">
        <div>Made with</div>
        <HeartIcon className="text-spartan-red ml-1.5" width="14px" height="14px" />
      </div>
    </div>
  );
};

export default Footer;
