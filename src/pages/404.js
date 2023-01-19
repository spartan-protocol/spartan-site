import React, { useEffect, useState } from "react";

import Navbar from "../components/navbar";
import BackgroundAnimation from "../components/backgroundAnimation";
import ErrorPage from "../components/errorPage";
import SocialIcons from "../components/footer/socialIcons";

import { BreakpointProvider } from "../providers/breakpoint";
import { defaultFallbackInView } from "react-intersection-observer";


import "@fontsource/saira/400.css";
import "../sass/global.scss";

const NotFoundPage = () => {

  const [isMetaMask, setisMetaMask] = useState(false);

  useEffect(() => {
    // fix for landing page height on some mobile browsers (ios)
    function setLandingPageHeight(doc) {
      let prevClientHeight;
      function handleResize() {
        const clientHeight = doc.clientHeight;
        if (clientHeight === prevClientHeight) return;
        requestAnimationFrame(function updateViewportHeight() {
          document.querySelector("#home").style.height = clientHeight - clientHeight * 0.01 + "px";
          prevClientHeight = clientHeight;
        });
      }
      handleResize();
      return handleResize;
    }
    const { clientWidth } = document.documentElement;
    const { userAgent } = navigator;
    const iOs = userAgent && userAgent.match(/iPhone|iPad|iPod/i);
    if (clientWidth < 600 && iOs) {
      window.addEventListener("resize", setLandingPageHeight(document.documentElement));
      setLandingPageHeight(document.documentElement);
    }
    if (clientWidth < 415 && window?.ethereum?.isMetaMask) {
      setisMetaMask(true);
    }
  }, []);

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
      <Navbar isMetaMask={isMetaMask} isErrorPage={true} />
      <BackgroundAnimation />
      <div className="wrapper">
        <ErrorPage />
        <SocialIcons />
      </div>
    </BreakpointProvider>
  );
};

export default NotFoundPage;
