import React from "react";
import {Link} from "react-router-dom";

import "./index.css"

export default function StartMenu() {

  return (
    <div className="start-menu-wrapper">
      <div className="start-menu">
        <h1>Dicter</h1>
        <p>Study with us</p>
        <div className="start-menu-buttons">
          <Link to="/sign-in">
            <button>Sign in</button>
          </Link>
          <Link to="/sign-up">
            <button>Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
