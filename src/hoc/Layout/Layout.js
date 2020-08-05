import React, {Component, Fragment} from "react";

class Layout extends Component
{

    render() {
        return (
            <Fragment>
                {/*layout!*/}
                {this.props.children}
            </Fragment>
        );
    }
}

export default Layout;