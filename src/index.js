import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index/index.scss";
import configureStore from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App";

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);
