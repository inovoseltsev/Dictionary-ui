import React from "react";

import "./index.css"

export default function ContentControlBar({children}) {

  return (
    <div className="content-control-bar">
      {children}
    </div>
  );
}
