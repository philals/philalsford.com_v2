import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

import greeting from "../some_module";

console.log(greeting);

require("./HelloComponent.scss");

export default (props: HelloProps) => (
    <div className="hello">
        <p>Hello from {props.compiler} and {props.framework} in the Component!</p>
    </div >
);