import React from "react";
import {Switch} from "react-router";
import {useSelector} from "react-redux";
import PrivateRoute from "../../components/shared/PrivateRoute";
import AppRow from "../../components/AppRow";
import TermGroupsContent from "../../components/TermGroupsContent";
import TermGroupContent from "../../components/TermGroupContent";

export default function UserPage() {

  const {isAuth} = useSelector(state => state.authReducer);

  return (
    <Switch>
      <PrivateRoute
        path="/home"
        isAuth={isAuth}
        component={<AppRow content={<TermGroupsContent/>}/>}
      />
      <PrivateRoute
        path="/term-groups"
        isAuth={isAuth}
        component={<AppRow content={<TermGroupsContent/>}/>}
        exact
      />
      <PrivateRoute
        path="/term-groups/:id"
        isAuth={isAuth}
        component={<AppRow content={<TermGroupContent/>}/>}
        exact
      />
    </Switch>
  )
}
