import React from "react";
import {Route, Switch} from "react-router";
import StartMenu from "../../components/StartMenu";
import SignInFormContainer from "../../containers/SignInFormContainer";
import SignUpFormContainer from "../../containers/SignUpFormContainer";

export default function StartPage() {

  return (
    <Switch>
      <Route path={"/"} component={StartMenu} exact/>
      <Route path={"/sign-in"} component={SignInFormContainer}/>
      <Route path={"/sign-up"} component={SignUpFormContainer}/>
    </Switch>
  );
}
