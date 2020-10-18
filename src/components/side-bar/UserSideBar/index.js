import React from "react";
import SideBarItem from "../SideBarItem";

import "./index.css"
import AppHeader from "../../generic/AppHeader";

export default function UserSideBar({items}) {

  return (
    <div className="bg-light border-right">
      <AppHeader linkTo="/home"/>
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
