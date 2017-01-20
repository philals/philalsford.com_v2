import * as React from "react";

import ReactSVG from "react-svg";

require("./ContentComponent.scss");

export default () => (
    <div className="content">
        <ReactSVG path="static/pea.svg" className="pea_logo Absolute-Center" />
    </div >
);