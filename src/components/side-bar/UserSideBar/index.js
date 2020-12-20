import React, {useContext} from "react";
import SideBarItem from "../SideBarItem";
import AppHeader from "../../shared/AppHeader";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../../actions/auth";
import createSideBarItem from "../../../helpers/createSideBarItem";
import {LanguageMessageContext} from "../../../context";

import "./index.css"

export default function UserSideBar() {

  const dispatch = useDispatch();
  const getLangMessage = useContext(LanguageMessageContext);

  const onLogoutClick = () => {
    dispatch(logoutUser());
  }

  const items = [
    createSideBarItem(1, "/term-groups", getLangMessage("side-bar-groups-item")),
    createSideBarItem(2, "/folders", getLangMessage("side-bar-folders-item")),
    createSideBarItem(3, "/profile", getLangMessage("side-bar-profile-item")),
    createSideBarItem(4, "/sign-in", getLangMessage("side-bar-logout-item"), onLogoutClick)
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
