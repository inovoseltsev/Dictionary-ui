import React from "react";
import {Switch} from "react-router";
import PrivateRoute from "../../components/PrivateRoute";
import {useSelector} from "react-redux";
import AppRow from "../../components/AppRow";

export default function UserPage() {

  const {isAuth} = useSelector(state => state.authReducer);

  return (
    <Switch>
      <PrivateRoute path={"/home"} isAuth={isAuth} component={AppRow}/>
    </Switch>
  )
}