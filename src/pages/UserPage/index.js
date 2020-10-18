import React from "react";
import {Switch} from "react-router";
import {useSelector} from "react-redux";
import PrivateRoute from "../../components/generic/PrivateRoute";
import AppRow from "../../components/AppRow";
import TermGroupsContainer from "../../containers/TermGroupsContainer";

export default function UserPage() {

  const {isAuth} = useSelector(state => state.authReducer);

  return (
    <Switch>
      <PrivateRoute
        path={"/home"}
        isAuth={isAuth}
        component={<AppRow content={<TermGroupsContainer/>}/>}
      />
      <PrivateRoute
        path={"/term-groups"}
        isAuth={isAuth}
        component={<AppRow content={<TermGroupsContainer/>}/>}
      />
    </Switch>
  )
}
