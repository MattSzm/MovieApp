import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import moviesReducer from '../src/store/reducers/movies';
import chartsReducer from '../src/store/reducers/charts';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import axios from 'axios'
import { BrowserRouter } from "react-router-dom";


axios.defaults.baseURL = process.env.REACT_APP_API_KEY;

const rootReducer = combineReducers({movies: moviesReducer,
                                            charts: chartsReducer})

const store = createStore(rootReducer, applyMiddleware(Thunk));


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
