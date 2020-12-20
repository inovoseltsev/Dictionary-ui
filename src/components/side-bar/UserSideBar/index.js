import React, {useContext} from "react";
import SideBarItem from "../SideBarItem";
import AppHeader from "../../shared/AppHeader";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../../actions/auth";
import createSideBarItem from "../../../helpers/createSideBarItem";
import {LanguageMessageContext} from "../../../context";

import "./index.css"

export default function UserSideBar() {

  const dispatch = useDispatch();
  const {role} = useSelector(state => state.authReducer.authData);
  const getLangMessage = useContext(LanguageMessageContext);

  const onLogoutClick = () => {
    dispatch(logoutUser());
  }

  const items = [
    createSideBarItem(1, "/term-groups", getLangMessage("side-bar-groups-item")),
    createSideBarItem(2, "/folders", getLangMessage("side-bar-folders-item")),
    createSideBarItem(4, "/profile", getLangMessage("side-bar-profile-item")),
    createSideBarItem(5, "/sign-in", getLangMessage("side-bar-logout-item"), onLogoutClick)
  ];

  const setAdminTab = () => {
    if (role === "ADMIN") {
      const adminTab = createSideBarItem(3, "/users", getLangMessage("side-bar-users-item"));
      items.splice(2, 0, adminTab)
    }
  }

  return (
    <div className="bg-light border-right">
      <AppHeader linkTo="/home"/>
      <ul className="list-group list-group-flush">
        {setAdminTab()}
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
