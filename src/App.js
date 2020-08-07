import React, {Component} from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import MovieSet from "./containers/Movieset/MovieSet";


class App extends Component
{

  render() {
    return (
        <div className="App">
          <Layout>
              <MovieSet />
          </Layout>
        </div>
    );
  }
}

export default App;
