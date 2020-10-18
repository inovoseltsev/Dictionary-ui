import React from "react";
import MaterialIconButton from "@material-ui/core/IconButton"

import "./index.css"

export default function IconButton({icon, onClick, size}) {

  return (
    <MaterialIconButton size={size} onClick={onClick} className="icon-button">
      {icon}
    </MaterialIconButton>
  )
}
