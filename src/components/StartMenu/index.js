import React from "react";
import {Link} from "react-router-dom";

import "./index.css"
import {FormattedMessage} from "react-intl";

export default function StartMenu() {

  return (
    <div className="start-menu-wrapper">
      <div className="start-menu">
        <h1><FormattedMessage id="start-menu-header"/></h1>
        <p>
          <FormattedMessage id="start-menu-tagline"/>
        </p>
        <div className="start-menu-buttons">
          <Link to="/sign-in">
            <button><FormattedMessage id="sign-in-title"/></button>
          </Link>
          <Link to="/sign-up">
            <button><FormattedMessage id="sign-up-title"/></button>
          </Link>
        </div>
      </div>
    </div>
  );
}
