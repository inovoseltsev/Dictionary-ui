import React from "react";
import {Switch} from "react-router";
import PrivateRoute from "../../components/shared/PrivateRoute";

export default function TermGroupsPage() {

  return (
    <Switch>
      <PrivateRoute
        path="/term-groups"
      />
    </Switch>
  );
}
