import React, {useState} from "react";
import Home from "./views/Home";
import Create from "./views/Create";
import DoPoll from "./views/DoPoll";
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import NavBarComponent from "./components/NavBarComponent";
import { Route, Switch, Redirect } from "react-router-dom";

export const Routes = () => {
  return (
    <div>
      <NavBarComponent/>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Create" component={Create} />
        <Route exact path="/DoPoll" component={DoPoll} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Login" component={Login} />
      </Switch>
    </div>
  );
};
