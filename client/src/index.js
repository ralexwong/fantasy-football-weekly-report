import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';


const mystore = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



ReactDOM.render(
    <Provider>
        <App />
    </Provider>, 
    document.getElementById("root")
);
