import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import UserPage from "./pages/user/user.component";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/user" component={UserPage} />
    </Switch>
  );
}

export default App;
