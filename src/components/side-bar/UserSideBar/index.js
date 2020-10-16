import React, {useState} from "react";
import createSideBarItem from "../../../helpers/createSideBarItem";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../../actions/auth";
import SideBarItem from "../SideBarItem";

import "./index.css"
import {Link} from "react-router-dom";

export default function UserSideBar() {

  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logoutUser());
  }

  const [items] = useState([
    createSideBarItem(1, "/term-groups", "Term groups"),
    createSideBarItem(2, "/folders", "Folders"),
    createSideBarItem(3, "/profile", "Profile"),
    createSideBarItem(4, "/sign-in", "Logout", onLogoutClick)
  ]);

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
