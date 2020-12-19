import React from "react";
import {Switch} from "react-router";
import {useSelector} from "react-redux";
import PrivateRoute from "../../components/shared/PrivateRoute";
import AppRow from "../../components/AppRow";
import TermGroups from "../../components/TermGroups";
import Terms from "../../components/Terms";
import StudyView from "../../components/StudyView";
import Profile from "../../components/Profile";

export default function UserPage() {

  const {isAuth} = useSelector(state => state.authReducer);

  return (
    <Switch>
      <PrivateRoute
        path="/home"
        isAuth={isAuth}
        component={<AppRow content={<TermGroups/>}/>}
      />
      <PrivateRoute
        path="/term-groups"
        isAuth={isAuth}
        component={<AppRow content={<TermGroups/>}/>}
        exact
      />
      <PrivateRoute
        path="/term-groups/:id"
        isAuth={isAuth}
        component={<AppRow content={<Terms/>}/>}
        exact
      />
      <PrivateRoute
        path="/term-groups/studying/:id"
        isAuth={isAuth}
        component={<AppRow content={<StudyView/>}/>}
        exact
      />
      <PrivateRoute
        path="/profile"
        isAuth={isAuth}
        component={<AppRow content={<Profile/>}/>}
      />
    </Switch>
  )
}
