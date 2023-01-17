import * as React from "react";

import VercelLogo from "../../assets/logos/vercel_logo.svg"
import NetlifyLogo from "../../assets/logos/netlify_logo.svg"

const Friends = () => {
  return (
    <div id="friends" className="h-screen max-h-screen overflow-y-auto bg-black justify-center snap-start">
      <div className="flex flex-col flex-1 h-full items-center justify-center">
        <div className="flex flex-col items-center space-y-12 md:space-y-0 md:flex-row justify-center space-x-0 md:space-x-12 text-white relative z-20 w-full">
            <a className="hover:opacity-60 transition" href="https://vercel.com/?utm_source=spartan-team&utm_campaign=oss" target="_blank" rel="noreferrer">
                <VercelLogo fill="white" className="shadow-md w-50 mx-1" />
            </a>
            <a className="hover:opacity-60 transition" href="https://www.netlify.com/" target="_blank" rel="noreferrer">
                <NetlifyLogo fill="white" className="shadow-md w-40 mx-1" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Friends;
