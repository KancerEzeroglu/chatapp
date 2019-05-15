import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React from 'react';
import './App.css';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import App from "./App";
import {store} from "./helpers/store";

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);