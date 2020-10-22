import React from "react";
import MuiFab from "@material-ui/core/Fab"

export default function Fab({color, icon, onClick}) {

  return (
    <MuiFab color={color} onClick={onClick}>
      {icon}
    </MuiFab>
  );
}
