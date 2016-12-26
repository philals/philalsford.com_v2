import * as React from "react";
import * as ReactDOM from "react-dom";

require("file?name=[name].[ext]!../index.html");

import { HelloContainer } from "./components/HelloContainer";

ReactDOM.render(
    <HelloContainer />,
    document.getElementById("app")
);