import React, {Component, Fragment} from "react";
import Logo from '../../components/Logo/Logo';
import Footer from "../../components/UI/Footer/Footer";
import SingleChart from "../../containers/Chart/SingleChart/SingleChart";
import {Route} from 'react-router-dom';

class Layout extends Component
{

    render() {
        return (
            <Fragment>
                <Logo />
                {this.props.children}
                <Route path={'/charts'} component={SingleChart} />
                <Footer />
            </Fragment>
        );
    }
}

export default Layout;