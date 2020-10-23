import React from "react";
import SideBarItem from "../SideBarItem";

import "./index.css"
import AppHeader from "../../shared/AppHeader";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../../actions/auth";
import createSideBarItem from "../../../helpers/createSideBarItem";

export default function UserSideBar() {
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logoutUser());
  }

  const items = [
    createSideBarItem(1, "/term-groups", "Term groups"),
    createSideBarItem(2, "/folders", "Folders"),
    createSideBarItem(3, "/profile", "Profile"),
    createSideBarItem(4, "/sign-in", "Logout", onLogoutClick)
  ];

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
