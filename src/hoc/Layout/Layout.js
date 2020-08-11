import React, {Component, Fragment} from "react";
import Logo from '../../components/Logo/Logo';
import Footer from "../../components/UI/Footer/Footer";
import ChartSet from "../../containers/Chart/ChartSet";
import { Route, Link } from 'react-router-dom';

class Layout extends Component
{

    render() {
        return (
            <Fragment>
                <Link to={'/'}>
                    <Logo />
                </Link>

                {this.props.children}
                <Route path={'/'} exact component={ChartSet} />
                <Footer />
            </Fragment>
        );
    }
}

export default Layout;