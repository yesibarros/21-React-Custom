import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Timer from "./Timer";
import Countdown from "./Countdown";

export default function Main() {
  return (
    <React.Fragment>
      <Header />
      <main className="container">
        <Switch>
          <Route path="/timer" component={Timer}></Route>
          <Route path="/countdown" component={Countdown}></Route>
          <Redirect to="/timer" />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}
