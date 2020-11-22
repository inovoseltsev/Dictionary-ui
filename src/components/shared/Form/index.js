import React from "react";

import "./index.css"

export default function Form({title, children, onSubmit, className, encType}) {

  return (
    <form className={`form ${className}`} onSubmit={onSubmit}>
      <p className="form-title">{title}</p>
      {children}
    </form>
  );
}