import * as React from "react";


import Hello from "./HelloComponent/HelloComponent";

// State is never set so we use the 'undefined' type.
export class HelloContainer extends React.Component<undefined, undefined> {
    render() {
        return <div>
            <h1>Hello..  from container!</h1>
            <Hello framework="React" compiler="TypeScript" />
        </div>;
    }
}