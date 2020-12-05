import React from "react";
import Image from "../../Image";

import "./index.css"

export default function HiddenCardContent({text, image}) {

  return (
    <div className="hidden-content">
      {text ? <div><p>Keyword: {text}</p></div> : ""}
      <Image imageContent={image.content} size="small"/>
    </div>
  )
}
