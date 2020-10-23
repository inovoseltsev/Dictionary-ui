import React from "react";
import {Switch} from "react-router";
import {useSelector} from "react-redux";
import PrivateRoute from "../../components/shared/PrivateRoute";
import AppRow from "../../components/AppRow";
import TermGroupsContent from "../../components/TermGroupsContent";

export default function UserPage() {

  const {isAuth} = useSelector(state => state.authReducer);

  return (
    <>
      <Switch>
        <PrivateRoute
          path={"/home"}
          isAuth={isAuth}
          component={<AppRow content={<TermGroupsContent/>}/>}
        />
        <PrivateRoute
          path={"/term-groups"}
          isAuth={isAuth}
          component={<AppRow content={<TermGroupsContent/>}/>}
        />
      </Switch>
    </>
  )
}
