import React from "react";
import {Redirect, Route} from "react-router";

export default function PrivateRoute({component, isAuth, ...rest}) {

  return (
    <Route {...rest} render={() => (
      isAuth ?
        (component) :
        (<Redirect to={"/sign-in"}/>)
    )}/>
  );
}
