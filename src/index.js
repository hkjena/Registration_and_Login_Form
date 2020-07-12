import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import rootReducer from "./reducers/rootreducer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>,
  rootElement
);
