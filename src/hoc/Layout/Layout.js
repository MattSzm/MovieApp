import React, {Component, Fragment} from "react";
import Logo from '../../components/Logo/Logo';
import Footer from "../../components/UI/Footer/Footer";

class Layout extends Component
{

    render() {
        return (
            <Fragment>
                <Logo />
                {this.props.children}
                <Footer />
            </Fragment>
        );
    }
}

export default Layout;