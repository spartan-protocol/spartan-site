import * as React from "react";

import HeartIcon from "../../assets/icons/heart.svg";

const Footer = () => {
  return (
    <div className="text-gray-300 text-sm relative z-10 flex flex-col align-center justify-center text-center pb-10 mb-3">
      <div className="flex items-center justify-center">
        <div>By the community.</div>
        <div className="ml-1">Made with</div>
        <HeartIcon className="text-spartan-red mx-1.5" width="14px" height="14px" />
      </div>
    </div>
  );
};

export default Footer;
