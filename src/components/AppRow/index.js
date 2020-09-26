import React from "react";

import "./index.css"
import UserSideBar from "../side-bar/UserSideBar";


export default function AppRow({sideBar = <UserSideBar/>, content}) {

  return (
    <div className={"app-row"}>
      <div className="left">
        {sideBar}
      </div>
      <div className="right">
        {content}
      </div>
    </div>
  )
}
