import React from "react";
import MuiIconButton from "@material-ui/core/IconButton"

import "./index.css"

export default function IconButton({icon, onClick, size, type = "button"}) {

  return (
    <MuiIconButton className="icon-button" size={size} onClick={onClick} type={type}>
      {icon}
    </MuiIconButton>
  )
}
