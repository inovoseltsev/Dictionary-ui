import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import {Route, Switch} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./App";
import store from "./store/store";

import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
import "font-awesome/css/font-awesome.min.css"
import "font-awesome/scss/font-awesome.scss"
import "./index.css";
import ErrorBoundary from "./components/ErrorBoundary";

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route path="/" component={App}/>
          <Route path="*">Not found</Route>
        </Switch>
      </Router>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
