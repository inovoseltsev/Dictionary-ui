import React from "react";
import {Redirect, Route} from "react-router";

export default function PrivateRoute({component: Component, isAuth, ...rest}) {

  return (
    <Route {...rest} render={props => (
      isAuth ?
        (<Component {...props}/>) :
        (<Redirect to={"/sign-in"}/>)
    )}/>
  );
}