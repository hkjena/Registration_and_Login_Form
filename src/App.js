import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import "./styles/tailwind-pre-build.css";

import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import Login from "./components/Login";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Login" component={Login} />
        <Route path="/Registration" component={Registration} />
      </Switch>
    </Router>
  );
}
