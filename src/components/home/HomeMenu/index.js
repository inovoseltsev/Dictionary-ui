import React from "react";
import {Link} from "react-router-dom";

import './index.css'

export default function HomeMenu({caption, tagline}) {

  return (
    <div className={"start-menu"}>
      <h1>{caption}</h1>
      <p>{tagline}</p>
      <div className={"start-menu-buttons"}>
        <Link to={"/sign-in"}>
          <button>Sign in</button>
        </Link>
        <Link to={"/sign-up"}>
          <button>Sign up</button>
        </Link>
      </div>
    </div>
  );
}
