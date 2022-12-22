import * as React from "react";

/**
 * Check if there're multiple sentences inside title. If yes, split them to separate h1 tags.
 * @param {string} title
 * @param {bool} textVisible
 * @returns {React.Component} h1 or multiple h1 tags
 */
const RefactorTitle = (title, textVisible) => {
  /* I */
  return title.split(".").length === 1 ? (
    <h1 className={`text-4xl sm:text-5xl mb-2 opacity-0 ${textVisible && "animate-fadeIn"}`}>{title}</h1>
  ) : (
    <>
      {title.split(".").map((el, index) => (
        <h1 key={index} className={`text-4xl sm:text-5xl mb-2 opacity-0 ${textVisible && "animate-fadeIn"}`}>{title.split(".")[index] && title.split(".")[index] + "."}</h1>
      ))}
    </>
  );
};

export default RefactorTitle;
