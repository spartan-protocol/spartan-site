import * as React from "react";
import { useInView } from "react-intersection-observer";

import { StaticImage } from "gatsby-plugin-image";

const Video = () => {
  const { ref: videoRef, inView: videoVisible } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: textRef, inView: textVisible } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: partnersRef, inView: partnersVisible } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div id="video" className="h-screen max-h-screen overflow-y-auto bg-black justify-center snap-start font-saira">
      <div className="flex flex-col flex-1 h-full items-center justify-center md:space-y-16 xl:space-y-24 text-white relative z-10 ">
        <div className="flex flex-col items-center">
          <div
            ref={videoRef}
            className={`rounded border-2 border-white opacity-0 ${videoVisible && "animate-fadeInLeft"}`}
            style={{ animationDelay: "200ms", WebkitAnimationDelay: "200ms" }}
          >
            <iframe
              id="player"
              allowFullScreen="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="Spartan Protocol in a nutshell."
              src="https://www.youtube.com/embed/wnNPJaCmTGw?enablejsapi=1&amp;origin=https%3A%2F%2Fspartanprotocol.org&amp;widgetid=1"
              frameBorder="0"
              className="w-[80vw] h-[24vh] md:w-[530px] md:h-[300px] xl:w-[640px] xl:h-[360px]"
            ></iframe>
          </div>
          <div ref={textRef} className={`mt-2 opacity-0 ${textVisible && "animate-fadeIn"}`} style={{ animationDelay: "300ms", WebkitAnimationDelay: "300ms" }}>
            WATCH: Spartan Protocol in a nutshell.
          </div>
        </div>
        <div ref={partnersRef} className="flex flex-wrap justify-center mt-2 partners smPhoneText">
          <div className="flex flex-col w-44 my-3 md:w-64 items-center text-center smPhoneSecurityItem">
            <div
              className={`mb-2 opacity-0 ${partnersVisible && "animate-fadeIn"}`}
              style={{ animationDelay: "500ms", WebkitAnimationDelay: "500ms" }}
            >
              <StaticImage src="../../assets/brands/certik.png" alt="certikLogo" height={33} />
            </div>
            <div className={`opacity-0 ${partnersVisible && "animate-fadeIn"}`} style={{ animationDelay: "600ms", WebkitAnimationDelay: "600ms" }}>
              Smart Contract Audit
            </div>
            <a
              href="https://github.com/spartan-protocol/resources/blob/master/certik-audit.pdf"
              className="cursor-pointer font-sairaCondensed hover:opacity-60 transition"
            >
              <div
                className={`p-1 px-5 border mt-5 opacity-0 ${partnersVisible && "animate-fadeIn"}`}
                style={{ animationDelay: "700ms", WebkitAnimationDelay: "700ms" }}
              >
                View Audit
              </div>
            </a>
          </div>
          <div className="flex flex-col w-44 my-3 md:w-64 items-center text-center smPhoneSecurityItem">
            <div
              className={`mb-2 opacity-0 ${partnersVisible && "animate-fadeIn"}`}
              style={{ animationDelay: "500ms", WebkitAnimationDelay: "500ms" }}
            >
              <StaticImage src="../../assets/brands/arena.png" alt="c4renaLogo" height={33} />
            </div>
            <div className={`opacity-0 ${partnersVisible && "animate-fadeIn"}`} style={{ animationDelay: "600ms", WebkitAnimationDelay: "600ms" }}>
              $98k Audit Contest
            </div>
            <a href="https://code423n4.com/reports/2021-07-spartan/" className="cursor-pointer font-sairaCondensed hover:opacity-60 transition">
              <div
                className={`p-1 px-5 border mt-5 opacity-0 ${partnersVisible && "animate-fadeIn"}`}
                style={{ animationDelay: "700ms", WebkitAnimationDelay: "700ms" }}
              >
                View Report
              </div>
            </a>
          </div>
          <div className="flex flex-col w-44 my-3 md:w-64 items-center text-center smPhoneSecurityItem">
            <div
              className={`mb-2 opacity-0 ${partnersVisible && "animate-fadeIn"}`}
              style={{ animationDelay: "500ms", WebkitAnimationDelay: "500ms" }}
            >
              <StaticImage src="../../assets/brands/immunefi.png" alt="immunefiLogo" height={33} />
            </div>
            <div className={`opacity-0 ${partnersVisible && "animate-fadeIn"}`} style={{ animationDelay: "600ms", WebkitAnimationDelay: "600ms" }}>
              Rewards up to $10k
            </div>
            <a href="https://immunefi.com/bounty/spartanprotocol/" className="cursor-pointer font-sairaCondensed hover:opacity-60 transition">
              <div
                className={`p-1 px-5 border mt-5 opacity-0 ${partnersVisible && "animate-fadeIn"}`}
                style={{ animationDelay: "700ms", WebkitAnimationDelay: "700ms" }}
              >
                Don't trust. Verify
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
