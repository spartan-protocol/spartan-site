import * as React from "react";

const Footer = ({ updatedAt }) => {
  return (
    <div className="text-white relative z-10 flex justify-center">
      <div className="mb-2">Last updated at {updatedAt.toLocaleDateString()}</div>
    </div>
  );
};

export default Footer;
