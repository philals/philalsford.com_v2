import * as React from "react";

require("./site.scss");

import ContentComponent from "./ContentComponent";
import NavBar from "./NavBarComponent";

// State is never set so we use the 'undefined' type.
export class SiteContainer extends React.Component<undefined, undefined> {
    render() {
        return <div className="site-container">
            <NavBar />
            <ContentComponent />
        </div>;
    }
}