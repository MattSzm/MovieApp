import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import moviesReducer from '../src/store/reducers/movies';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import axios from 'axios'
import { BrowserRouter } from "react-router-dom";


axios.defaults.baseURL = process.env.REACT_APP_API_KEY;



const store = createStore(moviesReducer, applyMiddleware(Thunk));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
