import React from "react";
import {Link} from "react-router-dom";

import "./index.css"

export default function AppHeader({linkTo}) {

  return (
    <div className="app-header">
      <Link to={linkTo} className="link-to">Dicter</Link>
    </div>
  )
}
