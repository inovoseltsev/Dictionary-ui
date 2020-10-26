import React from "react";
import {Route, Switch} from "react-router";
import StartMenu from "../../components/StartMenu";
import SignInForm from "../../components/form/SignInForm";
import SignUpForm from "../../components/form/SignUpForm";

export default function StartPage() {

  return (
    <Switch>
      <Route path="/" component={StartMenu} exact/>
      <Route path="/sign-in" component={SignInForm}/>
      <Route path="/sign-up" component={SignUpForm}/>
    </Switch>
  );
}
