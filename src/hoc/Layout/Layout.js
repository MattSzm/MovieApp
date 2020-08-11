import React, {Component, Fragment} from "react";
import Logo from '../../components/Logo/Logo';


class Layout extends Component
{

    render() {
        return (
            <Fragment>
                <Logo />
                {this.props.children}

            </Fragment>
        );
    }
}

export default Layout;