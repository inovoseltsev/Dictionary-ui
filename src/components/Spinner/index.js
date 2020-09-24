import React from "react";

import "./index.css"

export default function Spinner() {

  return (
    <div className="loader">
      <div className="inner one"/>
      <div className="inner two"/>
      <div className="inner three"/>
    </div>
  );
}