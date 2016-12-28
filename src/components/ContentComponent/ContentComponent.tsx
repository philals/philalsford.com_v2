import * as React from "react";

import ReactSVG from "react-svg";

require("./ContentComponent.scss");

export default () => (
    <div className="content">
        <p>Phil !</p>
        <ReactSVG
            path="static/pea.svg"
            className="example"
            />
    </div >
);