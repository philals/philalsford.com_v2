import * as React from "react";


import ContentComponent from "./ContentComponent/ContentComponent";

// State is never set so we use the 'undefined' type.
export class SiteContainer extends React.Component<undefined, undefined> {
    render() {
        return <ContentComponent />;
    }
}