import React from "react";

import "./index.css"

export default function WordSetCard({isAddCard}) {

  return (
    <div className={isAddCard ? "word-set-card add-card" : "word-set-card"}>
      {!isAddCard ? "" :
        <div className="add-icon-wrapper">
          <p>Add</p>
          <i className="fa fa-plus"/>
        </div>
      }
    </div>
  );
}
