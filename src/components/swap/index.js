import * as React from "react";

const Swap = ({ data }) => {
  return (
    <div id="swap" className="h-screen bg-black justify-center">
      <div className="flex flex-col flex-1 h-full items-center justify-center">
        <div className="flex flex-col flex-1 justify-evenly relative z-10">
          <div className="font-saira text-white text-center px-8">
            <h1 className="text-3xl sm:text-5xl mb-2">{data.title}</h1>
            <div className="w-64 text-xs sm:w-96 sm:text-sm mx-auto font-extralight text-gray-400">{data.subtitle}</div>
          </div>
          <div>
            <div className="flex flex-col items-center w-52 mx-auto text-center font-sairaCondensed font-semibold text-lg">
              <a className="bg-white p-1.5 text-black rounded mb-2 w-full" href={data.buttonLink1}>
                {data.buttonLabel1}
              </a>
              <a className="border border-white p-1.5 text-white w-full rounded bg-black" href={data.buttonLink2}>
                {data.buttonLabel2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
