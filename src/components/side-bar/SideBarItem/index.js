import React from "react";
import {Link} from "react-router-dom";

import "./index.css"

export default function SideBarItem({route, name, onClick}) {

  return (
    <div className="bar-item-wrapper">
      <Link to={route} onClick={onClick}
            className="list-group-item list-group-item-action bg-light">
        <p>{name}</p></Link>
    </div>
  )
}
