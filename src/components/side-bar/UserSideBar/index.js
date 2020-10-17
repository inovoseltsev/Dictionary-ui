import React from "react";
import {Link} from "react-router-dom";
import SideBarItem from "../SideBarItem";

import "./index.css"

export default function UserSideBar({items}) {

  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">
        <Link to={"/home"} className="home-link">Dicter</Link>
      </div>
      <ul className="list-group list-group-flush">
        {
          items.map(item => <SideBarItem
            route={item.route}
            name={item.name}
            key={item.id}
            onClick={item.onClick}
          />)
        }
      </ul>
    </div>
  )
}
