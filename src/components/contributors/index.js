import React from "react";
import { useInView } from "react-intersection-observer";

const Contributors = ({ data }) => {
  const { ref: textRef, inView: textVisible } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: teamRef, inView: teamVisible } = useInView({ threshold: 0.3, triggerOnce: true });

  // There are two sources of data. We are pulling contributors from Spartan Protocol github,
  // and also we are adding manually contributors on contentful
  const { githubContributors, contentfulContributors, teamData } = data;

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
  const overwrite = contentfulContributors.map((item) => item.node.overwrite);

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

  // Sort contributors based on order field. If there's no value, move the item to the end
  const contentfulContributorsData = contentfulContributors
    .map((item) => {
      if (item.node.order === null) item.node.order = 99;
      return item;
    })
    .sort((a, b) => a.node.order - b.node.order);

  const contributorsHtml = () => {
    const contributorsData = [...contentfulContributorsData, ...githubContributorsData];

    return contributorsData.map((item, index) => {
      const { name, avatar, link } = item.node;
      const animationDelay = (delay) => (
        { animationDelay: `${index + delay}00ms`, webkitAnimationDelay: `${index + delay}00ms` }
      )
      return (
        <div className={`flex flex-col justify-center items-center w-2/6 sm:w-3/12 px-2 my-4`} key={name}>
          <a className="hover:opacity-60 transition" href={link} target="_blank" rel="noreferrer">
            <div className={`opacity-0 ${teamVisible && "animate-fadeInLeft"}`} style={animationDelay(3)}>
              <img alt="Avatar" className="sm:w-12 w-8 rounded mb-1" src={avatar.file.url} />
            </div>
          </a>
          <a className="hover:opacity-60 transition" href={link} target="_blank" rel="noreferrer">
            <div className={`sm:text-sm text-xs opacity-0 ${teamVisible && "animate-fadeInLeft"}`} style={animationDelay(4)}>{name}</div>
          </a>
        </div>
      );
    });
  };

  return (
    <div id="team" className="h-screen bg-black justify-center">
      <div className="flex flex-col flex-1 h-full items-center justify-center">
        <div className="flex flex-col flex-1 justify-center sm:justify-evenly relative z-10">
          <div ref={textRef} className="font-saira text-white text-center px-8">
            <h1 className={`text-2xl sm:text-4xl mb-2 opacity-0 ${textVisible && "animate-fadeIn"}`}>{teamData.title}</h1>
            <div
              className={`w-11/12 sm:w-6/12 text-xs sm:text-sm mx-auto font-extralight text-gray-400 opacity-0 ${
                textVisible && "animate-fadeIn animation-delay-300"
              }`}
            >
              <span className="bg-black bg-opacity-50 rounded">{teamData.description.description}</span>
            </div>
          </div>
          <div
            ref={teamRef}
            className="flex flex-col justify-center sm:mt-0 mt-8 max-h-35 sm:max-h-6/12 overflow-y-auto sm:w-8/12 w-11/12 mx-auto font-saira text-white text-center px-8"
          >
            <div className={`flex flex-wrap justify-center max-h-full`}>{contributorsHtml()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributors;
