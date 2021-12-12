import React from "react";
import ReactDOM from "react-dom";
import { Router,Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/home.component";
import Home2 from "./components/home2.component";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
ReactDOM.render(
<Router history={history}> 
    <div>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/home2">
        <Home2 />
      </Route>
    </div>
  </Router>,
    document.getElementById("root")
);

serviceWorker.unregister();