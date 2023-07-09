import * as React from "react";

const ErrorPage = () => {
  return (
    <div id="error" className="h-screen bg-black justify-center snap-start snap-always">
      <div className="flex font-saira flex-1 h-full items-center justify-center relative z-20">
        <div className="flex flex-col flex-1 justify-center items-center text-white">
        <h1 className="text-6xl px-6 mb-2 opacity-0 animate-fadeIn tracking-[.2em] sm:tracking-[.25em] font-medium">404</h1>
        <div>Not found</div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
