import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore } from 'redux';

function reducer(state, action) {
    console.log(action);
    return 'State';
}

const store = createStore(reducer);

console.log(store.getState());

const action = {
    type: 'changeState',
    payload: {
        newState: 'New State'
    }
};

store.dispatch(action);


ReactDOM.render(<App />, document.getElementById("root"));
