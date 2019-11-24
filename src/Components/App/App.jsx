import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import styles from "./App.module.css";
import Reader from "../Reader/Reader";

const App = () => (
  <div className={styles.App}>
    <Switch>
      <Route path="/reader" component={Reader} />
      <Redirect from="/" to="/reader" />
    </Switch>
  </div>
);

export default withRouter(App);
