import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

import greeting from "./some_module";

console.log(greeting);

export default (props: HelloProps) =>
    <h1>Hello from {props.compiler} and {props.framework} in the Component!</h1>;