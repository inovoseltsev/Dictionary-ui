import React from "react";
import SideBarContainer from "../../containers/SideBarContainer";

import "./index.css"

export default function AppRow({sideBar = <SideBarContainer/>, content}) {

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
