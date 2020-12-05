import React from "react";

import "./index.css"

export default function Image({imageContent, size, isBlob}) {

  return (
    <div className={size}>
      {imageContent
        ? <img
          src={isBlob ? URL.createObjectURL(imageContent) : `data:image/jpeg;base64,${imageContent}`}
          alt=""/>
        : ""}
    </div>
  );
}
