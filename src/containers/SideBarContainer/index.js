import React from "react";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../actions/auth";
import createSideBarItem from "../../helpers/createSideBarItem";
import UserSideBar from "../../components/side-bar/UserSideBar";

export default function SideBarContainer() {

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
    <UserSideBar items={items}/>
  );

}
