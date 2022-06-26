import React from "react";

const Contributors = ({ data }) => {
  const contributorsHtml = () => {
    const contributorsData = data.filter((item) => item.node.type === "User");
    return contributorsData.map((item) => {
      const { login, avatar_url, html_url } = item.node;
      return (
        <div className="flex flex-col justify-center items-center w-2/6 sm:w-3/12 px-2 my-4" key={login}>
          <a className="hover:opacity-60 transition" href={html_url} target="_blank" rel="noreferrer">
            <div>
              <img alt="Avatar" className="sm:w-12 w-8 rounded mb-1" src={avatar_url} />
            </div>
          </a>
          <a className="hover:opacity-60 transition" href={html_url} target="_blank" rel="noreferrer">
            <div className="sm:text-base text-sm">{login}</div>
          </a>
        </div>
      );
    });
  };

  // TEMP data
  const tempData = {
    title: "By the community For the community",
    subtitle: "The project is galvanized by the communities of former Binance Chain projects. Individual token holders destroy their previous assets to acquire SPARTA. Limited Binance Chain projects selected to participate.",
    buttonLink1: "https://t.me/SpartanProtocol",
    buttonLabel1: "Telegram Community"
  }

  return (
    <div id="team" className="h-screen bg-black justify-center">
      <div className="flex flex-col flex-1 h-full items-center justify-center">
        <div className="flex flex-col flex-1 justify-evenly relative z-10">
          <div className="font-saira text-white text-center px-8">
            <h1 className="text-2xl sm:text-4xl mb-2">{tempData.title}</h1>
            <div className="w-11/12 sm:w-6/12 text-xs sm:text-sm mx-auto font-extralight text-gray-400 bg-black rounded">{tempData.subtitle}</div>
          </div>
          <div className="flex flex-col justify-center sm:w-6/12 w-11/12 mx-auto font-saira text-white text-center px-8">
            <div className="flex flex-wrap justify-center">{contributorsHtml()}</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contributors;
