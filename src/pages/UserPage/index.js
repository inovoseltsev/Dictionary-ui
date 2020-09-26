import React from "react";
import {Switch} from "react-router";
import PrivateRoute from "../../components/PrivateRoute";
import {useSelector} from "react-redux";
import AppRow from "../../components/AppRow";
import WordSetsPlaceholder from "../../components/WordSetsPlaceholder";

export default function UserPage() {

  const {isAuth} = useSelector(state => state.authReducer);

  return (
    <Switch>
      <PrivateRoute
        path={"/home"} isAuth={isAuth} component={AppRow}
        content={<WordSetsPlaceholder/>}
      />
      <PrivateRoute
        path={"/word-sets"} isAuth={isAuth} component={AppRow}
        content={<WordSetsPlaceholder/>}
      />
    </Switch>
  )
}
