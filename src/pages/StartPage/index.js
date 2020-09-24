import React from "react";
import {Route, Switch} from "react-router";

import SignInForm from "../../components/forms/SignInForm";
import SignUpForm from "../../components/forms/SignUpForm";
import HomeCover from "../../components/home/HomeCover";

export default function StartPage() {

  return (
    <Switch>
      <Route path={"/"} component={HomeCover} exact/>
      <Route path={"/sign-in"} component={SignInForm}/>
      <Route path={"/sign-up"} component={SignUpForm}/>
    </Switch>
  );
}