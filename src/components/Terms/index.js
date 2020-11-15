import React from "react";
import {useRouteMatch} from "react-router";
import TermControlBar from "../../containres/term/TermControlBar";

export default function Terms() {

  const groupId = useRouteMatch().params.id;

  return (
    <>
      <TermControlBar/>
      <div className="content-wrapper">

      </div>
    </>
  );
}
