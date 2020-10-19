import React from "react";
import MaterialIconButton from "@material-ui/core/IconButton"

import "./index.css"

export default function IconButton({icon, onClick, size, type = "button"}) {

  return (
    <MaterialIconButton className="icon-button" size={size} onClick={onClick} type={type}>
      {icon}
    </MaterialIconButton>
  )
}
