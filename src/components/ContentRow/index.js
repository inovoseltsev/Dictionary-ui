import React from "react";

import "./index.css"

export default function ContentRow({leftCard, middleCard, rightCard}) {

  return (
    <div className="content-row">
      {leftCard}
      {middleCard}
      {rightCard}
    </div>
  )
}
