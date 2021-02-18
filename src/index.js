import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./views/Main";
import "./assets/normalize.css";
import "./assets/index.css";

const target = document.getElementById("root");

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" component={Main} />
    </BrowserRouter>
  </React.StrictMode>
);

render(app, target);
