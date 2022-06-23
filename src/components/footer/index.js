import * as React from "react";

const Footer = () => {
    // TODO: get real updated at
    const lastUpdated = "2022"
    return (
        <div className="text-white relative z-10 flex justify-center">
            <div className="mb-2">Last updated at {lastUpdated}</div>
        </div>
    )
}

export default Footer