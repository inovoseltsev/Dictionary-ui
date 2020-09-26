import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import "./index.css"

export default function ProfileSideBarItem() {

  const {firstName, lastName} = useSelector(state => state.userReducer);

  return (
    <div className="profile-item-wrapper">
      <Link to="/profile"><p>{firstName} {lastName}</p></Link>
    </div>
  );
}
