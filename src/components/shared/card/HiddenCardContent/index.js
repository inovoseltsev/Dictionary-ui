import React from "react";

import "./index.css"

export default function HiddenCardContent({text, image}) {

  return (
    <div className="hidden-content">
      {text ? <div>text</div> : ""}
      {image ? <div><img src={`data:image/jpeg;base64,${image}`} alt=""/></div> : ""}
    </div>
  )
}
