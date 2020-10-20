import React from "react";
import {Add} from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";
import SideBarContainer from "../../containers/SideBarContainer";

import "./index.css"

export default function AppRow({sideBar = <SideBarContainer/>, content}) {

  return (
    <div className={"app-row"}>
      <div className="left">
        {sideBar}
      </div>
      <div className="right">
        <div className="content-wrapper">
          {content}
        </div>
        <div className="controls">
          <Fab color="primary" aria-label="add">
            <Add fontSize={"small"}/>
          </Fab>
        </div>
      </div>
    </div>
  )
}
