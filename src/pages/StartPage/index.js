import React from "react";
import {Route, Switch} from "react-router";
import HomeCover from "../../components/home/HomeCover";
import SignInFormContainer from "../../containers/SignInFormContainer";
import SignUpFormContainer from "../../containers/SignUpFormContainer";

export default function StartPage() {

  return (
    <Switch>
      <Route path={"/"} component={HomeCover} exact/>
      <Route path={"/sign-in"} component={SignInFormContainer}/>
      <Route path={"/sign-up"} component={SignUpFormContainer}/>
    </Switch>
  );
}
