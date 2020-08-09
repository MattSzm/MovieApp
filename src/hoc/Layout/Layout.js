import React, {Component, Fragment} from "react";
import Logo from '../../components/Logo/Logo';


class Layout extends Component
{

    render() {
        return (
            <Fragment>
                <Logo />
                LAYOUT
                {this.props.children}
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            </Fragment>
        );
    }
}

export default Layout;