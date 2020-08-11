import React, {Component} from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import MovieSet from "./containers/Movieset/MovieSet";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

class App extends Component
{
    render() {
        return (
            <div className="App">
                <Layout>
                    <Switch>
                        <Route path={'/'} component={MovieSet} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
