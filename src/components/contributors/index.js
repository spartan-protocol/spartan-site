import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";

const Contributors = ({ data }) => {
  const { ref: textRef, inView: textVisible } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: teamRef, inView: teamVisible } = useInView({ threshold: 0.3, triggerOnce: true });

  // There are two sources of data. We are pulling contributors from Spartan Protocol github,
  // and also we are adding manually contributors on contentful
  const { githubContributors } = data;

  const contentfulContributors = [
    {
      name: "Ronni",
      link: "https://twitter.com/ronnirais",
      avatar: {
        static: <StaticImage style={{margin: "auto"}} className="sm:w-12 w-8 rounded mb-1" src="../../assets/images/ronni_avatar.jpg" alt="ronni" />
      },
      order: 3,
    },
    {
      name: "Thespis",
      link: "https://twitter.com/ReidyPhillip",
      avatar: {
        static: <StaticImage style={{margin: "auto"}} className="sm:w-12 w-8 rounded mb-1" src="../../assets/images/thespis_avatar.jpg" alt="thespis" />
      },
      order: 1,
    },
    {
      name: "AJ",
      link: "https://twitter.com/CryptoSpartan83",
      avatar: {
        static: <StaticImage style={{margin: "auto"}} className="sm:w-12 w-8 rounded mb-1" src="../../assets/images/aj_avatar.jpg" alt="aj" />
      },
    },
  ];

  // we are pulling github data from couple of repos - we need to merge the data to one array
  let ghData = [];
  let ghLogins = [];

  for (let repo of Object.keys(githubContributors)) {
    if (!ghLogins.length) {
      // get only logins (user names) from first array
      const logins = githubContributors[repo].map((item) => item.node.login);
      ghLogins = [...logins];
      ghData = [...githubContributors[repo]];
    } else {
      // add up contributions if we have a duplicate, will need that for sorting later
      githubContributors[repo].forEach((item) => {
        if (ghLogins.includes(item.node.login)) {
          ghData.forEach((el, index) => {
            if (item.node.login === el.node.login) {
              ghData[index].node.contributions += item.node.contributions;
            }
          });
        }
      });
      // filter out duplicates from next item
      const data = githubContributors[repo].filter((item) => !ghLogins.includes(item.node.login));
      // get only logins (user names) from next array
      const logins = data.map((item) => item.node.login);
      // add new logins to the array
      ghLogins = [...ghLogins, ...logins];
      // add new data to the array
      ghData = [...ghData, ...data];
    }
  }

  // sort github contributors based on contributions number (higher to lower)
  ghData.sort((a, b) => b.node.contributions - a.node.contributions);

  // If the overwrite key is set for the entry in contentful, that means that we should hide matched
  // github entry because we will be replacing it.
  const overwrite = contentfulContributors.map((item) => item.overwrite);

  const githubContributorsData = ghData
    .filter((item) => item.node.type === "User" && !overwrite.includes(item.node.login))
    .map((item) => {
      const { login, avatar_url, html_url } = item.node;
      return {
        node: {
          name: login,
          avatar: {
            file: {
              url: avatar_url,
            },
          },
          link: html_url,
        },
      };
    });

  // Sort contributors based on order field. If there's no value, save contributor as 'smaller' contributor
  const contentfulSmallerContributors = [];
  const contentfulContributorsData = contentfulContributors
    .map((item) => {
      item = { node: { ...item } };
      if (!item.node.order || item.node.order === null) {
        contentfulSmallerContributors.push(item);
        return null;
      }
      return item;
    })
    .filter((item) => item !== null)
    .sort((a, b) => a.node.order - b.node.order);

  const contributorsData = [...contentfulContributorsData, ...githubContributorsData];

  // push smaller contributors to the middle of the team array
  if (contentfulSmallerContributors.length) {
    //get the middle of the array
    const arrayMiddle = Math.floor(contributorsData.length / 2);
    contentfulSmallerContributors.forEach((item) => {
      contributorsData.splice(arrayMiddle, 0, item);
    });
  }

  const contributorsHtml = () => {
    return contributorsData.map((item, index) => {
      const { name, avatar, link } = item.node;
      const animationDelay = (delay) => ({ animationDelay: `${(index + delay) * 75}ms`, WebkitAnimationDelay: `${(index + delay) * 75}ms` });
      return (
        <div className={`flex flex-col justify-center items-center w-20 px-2 my-4`} key={name}>
          <a className="hover:opacity-60 transition" href={link} target="_blank" rel="noreferrer">
            <div className={`opacity-0 ${teamVisible && "animate-fadeInLeft"}`} style={animationDelay(3)}>
              {avatar?.static ? avatar?.static :  <img alt="Avatar" className="sm:w-12 w-8 rounded mb-1" src={avatar.file.url} />}
             
            </div>
          </a>
          <a className="hover:opacity-60 transition block w-full" href={link} target="_blank" rel="noreferrer">
            <div className={`sm:text-sm text-xs opacity-0 truncate ${teamVisible && "animate-fadeInLeft"}`} style={animationDelay(4)}>
              {name}
            </div>
          </a>
        </div>
      );
    });
  };

  return (
    <div id="contributors" className="h-screen max-h-screen xl:max-w-6xl xl:mx-auto overflow-y-auto bg-black justify-center snap-start">
      <div className="flex flex-col flex-1 h-full items-center justify-center">
        <div className="flex flex-col flex-1 justify-center relative z-10">
          <div ref={textRef} className="font-saira text-white text-center px-8">
            <h1 className={`text-4xl sm:text-4xl mb-2 opacity-0 font-medium ${textVisible && "animate-fadeIn"}`}>By the community. For the community.</h1>
            <div
              className={`w-11/12 sm:w-6/12 text-sm sm:text-md mx-auto text-white subtitle opacity-0 ${textVisible && "animate-fadeIn"}`}
              style={{ animationDelay: "200ms", WebkitAnimationDelay: "200ms" }}
            >
              <span className="bg-black bg-opacity-50 rounded">100% open source project that is built, maintained and governed by the community.</span>
            </div>
          </div>
          <div
            ref={teamRef}
            className="flex flex-col justify-center mt-6 max-h-30 sm:max-h-6/12 overflow-y-auto sm:w-8/12 w-full mx-auto font-saira text-white text-center px-8 list scrollbar-thin"
          >
            <div className={`flex flex-wrap justify-center max-h-full`}>{contributorsHtml()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributors;
