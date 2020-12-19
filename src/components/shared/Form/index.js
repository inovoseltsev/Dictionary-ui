import React from "react";

import "./index.css"

export default function Form({title, children, onSubmit, className}) {

  return (
    <form className={`form ${className}`} onSubmit={onSubmit}>
      {title ? <p className="form-title">{title}</p> : ""}
      {children}
    </form>
  );
}
