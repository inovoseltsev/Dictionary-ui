import React from "react";

import "./index.css"

export default function TermGroupCard({isAddCard}) {

  return (
    <div className={isAddCard ? "term-group-card add-card" : "term-group-card"}>
      {!isAddCard ? "" :
        <div className="add-icon-wrapper">
          <p>Add</p>
          <i className="fa fa-plus"/>
        </div>
      }
    </div>
  );
}
